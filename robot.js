/* ========================================================
   3D ROBOT ARM (Three.js)
   A small robotic arm rendered in WebGL inside the hero
   section. Its end-effector tracks the mouse cursor in real
   3D space using a 2-bone analytic IK solve (yaw + planar
   shoulder/elbow), the same technique used for game character
   arms/legs. Rendering pauses when the hero scrolls out of view.
======================================================== */
(function () {
  function initRobotArm3D() {
    const hero = document.getElementById("hero");
    const container = document.getElementById("bgRobot");
    if (!hero || !container || typeof THREE === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    if (!width || !height) return;

    const NEON = 0x39ff14;
    const NEON_DEEP = 0x00c853;
    const L1 = 1.55;
    const L2 = 1.1;

    // A narrow FOV placed far away keeps the visible frustum small at any
    // given depth, so the arm's reach can realistically cover the full
    // tracked area without needing to be huge (wide FOV blows up the
    // frustum size and makes full-hero tracking geometrically impossible
    // for a small arm).
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(26, width / height, 0.1, 100);
    camera.position.set(0, -0.78, 5.2);
    camera.lookAt(0, -0.78, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    const armMat = new THREE.MeshBasicMaterial({ color: NEON });
    const jointMat = new THREE.MeshBasicMaterial({ color: NEON_DEEP });

    // --- Base (fixed mount) ---
    const base = new THREE.Group();
    base.position.set(0, -1.15, 0);
    scene.add(base);

    const baseMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.38, 0.24, 24), jointMat);
    base.add(baseMesh);

    // --- Yaw group: rotates around Y to face the target horizontally ---
    const yawGroup = new THREE.Group();
    yawGroup.position.set(0, 0.12, 0);
    base.add(yawGroup);

    // --- Shoulder group: pitches the whole arm up/down ---
    const shoulder = new THREE.Group();
    yawGroup.add(shoulder);

    const upperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, L1, 16), armMat);
    upperArm.position.y = L1 / 2;
    shoulder.add(upperArm);

    // --- Elbow group: bends the forearm relative to the upper arm ---
    const elbowPivot = new THREE.Group();
    elbowPivot.position.y = L1;
    shoulder.add(elbowPivot);

    const elbowJoint = new THREE.Mesh(new THREE.SphereGeometry(0.145, 20, 20), jointMat);
    elbowPivot.add(elbowJoint);

    const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, L2, 16), armMat);
    forearm.position.y = L2 / 2;
    elbowPivot.add(forearm);

    // --- Wrist / gripper ---
    const wristPivot = new THREE.Group();
    wristPivot.position.y = L2;
    elbowPivot.add(wristPivot);

    const wristJoint = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), jointMat);
    wristPivot.add(wristJoint);

    const prongGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.32, 8);
    const prongL = new THREE.Mesh(prongGeo, armMat);
    prongL.position.set(-0.09, 0.16, 0);
    prongL.rotation.z = 0.45;
    wristPivot.add(prongL);
    const prongR = new THREE.Mesh(prongGeo, armMat);
    prongR.position.set(0.09, 0.16, 0);
    prongR.rotation.z = -0.45;
    wristPivot.add(prongR);

    // solveIK takes a target already expressed relative to the shoulder
    // pivot (not world space) — this avoids any camera/FOV dependency.
    function solveIK(rel) {
      const yaw = Math.atan2(rel.x, rel.z);
      const horiz = Math.sqrt(rel.x * rel.x + rel.z * rel.z);
      const y = rel.y;

      const rawDist = Math.sqrt(horiz * horiz + y * y);
      const maxReach = L1 + L2 - 0.03;
      const minReach = Math.abs(L1 - L2) + 0.05;
      const dist = Math.min(Math.max(rawDist, minReach), maxReach);
      const scale = dist / Math.max(rawDist, 0.0001);
      const h2 = horiz * scale;
      const y2 = y * scale;

      const cosElbow = (dist * dist - L1 * L1 - L2 * L2) / (2 * L1 * L2);
      const elbowInterior = Math.acos(Math.min(1, Math.max(-1, cosElbow)));

      const shoulderAngle =
        Math.atan2(h2, y2) - Math.atan2(L2 * Math.sin(elbowInterior), L1 + L2 * Math.cos(elbowInterior));

      yawGroup.rotation.y = yaw;
      shoulder.rotation.x = shoulderAngle;
      elbowPivot.rotation.x = elbowInterior;
    }

    // --- Mouse tracking: raycast from the real camera through the cursor
    // position onto a fixed depth plane, so the gripper visually lines up
    // with wherever the cursor actually is on screen (perspective-correct),
    // then convert that world point into shoulder-relative coordinates
    // for the IK solve. ---
    const shoulderWorld = new THREE.Vector3(0, -1.03, 0);
    const raycaster = new THREE.Raycaster();
    const targetPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -0.9);
    const hitPoint = new THREE.Vector3();
    const rel = { x: 0, y: 0, z: 0.9 };
    let hasPointer = false;

    function setTargetFromClient(clientX, clientY) {
      const rect = hero.getBoundingClientRect();
      const ndcX = ((clientX - rect.left) / rect.width) * 2 - 1;
      const ndcY = -((clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera({ x: ndcX, y: ndcY }, camera);
      const hit = raycaster.ray.intersectPlane(targetPlane, hitPoint);
      if (!hit) return;
      rel.x = hitPoint.x - shoulderWorld.x;
      rel.y = hitPoint.y - shoulderWorld.y;
      rel.z = hitPoint.z - shoulderWorld.z;
    }

    hero.addEventListener(
      "mousemove",
      (e) => {
        setTargetFromClient(e.clientX, e.clientY);
        hasPointer = true;
      },
      { passive: true }
    );

    hero.addEventListener("mouseleave", () => {
      hasPointer = false;
    });

    // --- Resize handling ---
    window.addEventListener("resize", () => {
      width = container.clientWidth;
      height = container.clientHeight;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });

    // --- Pause rendering when hero is off-screen ---
    let isVisible = true;
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          isVisible = entries[0].isIntersecting;
        },
        { threshold: 0.05 }
      );
      io.observe(hero);
    }

    let idleAngle = 0;

    function animate() {
      requestAnimationFrame(animate);
      if (!isVisible) return;

      if (!hasPointer) {
        idleAngle += 0.012;
        rel.x = Math.sin(idleAngle) * 0.8;
        rel.y = 0.4 + Math.sin(idleAngle * 0.6) * 0.5;
        rel.z = 0.9;
      }

      solveIK(rel);
      renderer.render(scene, camera);
    }

    animate();
  }

  window.initRobotArm3D = initRobotArm3D;
})();
