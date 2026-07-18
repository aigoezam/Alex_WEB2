/* ========================================================
   TRANSLATIONS
======================================================== */
const translations = {
  en: {
    nav: { about: "About", journey: "Journey", experience: "Experience", tfg: "Thesis", projects: "Projects", skills: "Skills", contact: "Contact" },
    hero: {
      eyebrow: "Industrial Electronics & Automation Engineer",
      hi: "Hi, I'm",
      lead: "Industrial Electronics and Automation Engineer from Universitat Politècnica de València, with robotics and digital control experience built during a year at the Technical University of Denmark. Focused on technical problems end to end, from theoretical development and simulation through to implementation in industrial environments.",
      cta_thesis: "See my projects",
      cta_cv: "Download CV",
      stat1: "languages I build with: Python, C/C++, MATLAB",
      stat2: "control strategies validated on real hardware",
      stat3: "engineering projects taken from simulation to real hardware",
    },
    about: {
      tag: "Who I am",
      title: "About Me",
      p1: "I'm <strong>Alexander Immanuel Goerke</strong>, an <strong>Industrial Electronics and Automation Engineer</strong> from Universitat Politècnica de València, with a year specializing in robotics and digital control at the <strong>Technical University of Denmark</strong>. I'm driven by investigating technical problems end to end, from theoretical development and simulation through to implementation in industrial environments and continuous process improvement.",
      p2: "My Bachelor's thesis focused on the geometric and software design of a delta robot for an agricultural project, covering everything from the kinematics to a C++ controller running on a Teensy 4.1. The prototype is still in use today within a PhD research project at the Technical University of Denmark.",
      p3: "During my final year at university, following a selection process, I joined <strong>Cebreo Medical</strong> as a Software Engineer, a medical technology company in Copenhagen, where I developed tools to visualize biomedical signals (EEG, PPG, accelerometry) alongside a multidisciplinary team, enabling people without a technical background to study human body signals for medical device development.",
      p4: "I work with Python, C/C++, MATLAB/Simulink and design tools such as SolidWorks. I'm currently looking for my next challenge in robotics, control and process automation within the tech industry.",
    },
    journey: {
      tag: "The path so far",
      title: "My Journey",
      upv_dates: "2022 – 2026",
      upv_title: "Universitat Politècnica de València, Valencia, Spain",
      upv_desc: "B.Sc. in Industrial Electronics and Automation Engineering, completed. Foundations in circuits, embedded systems, energy systems and automation.",
      "2025": "2025 – 2026",
      dtu_title: "Erasmus+ at the Technical University of Denmark, Copenhagen",
      dtu_desc: "Full academic year at the Technical University of Denmark focused on Robotics, Digital Control and Deep Learning, working on complex engineering projects alongside international teams.",
      "2025b": "Feb 2026 – Jun 2026",
      tfg_title: "Bachelor Thesis: Delta Robot",
      tfg_desc: "Designed, simulated and built the control system for a delta robot for agricultural weed-intervention, from the math to a working prototype with 1-2 mm end-effector positioning accuracy on real hardware.",
      "2026": "Jan 2026 – Present",
      cebreo_title: "Cebreo Medical A/S, Copenhagen, Denmark",
      cebreo_desc: "Software Engineer building EEG, accelerometer and PPG signal-analysis tools for clinical biosignal inspection in a medtech R&D team.",
    },
    experience: {
      tag: "Work",
      title: "Experience",
      cebreo_period: "Jan 2026 – Present",
      cebreo_title: "Cebreo Medical A/S: Software Engineer",
      cebreo_desc: "Developed signal-processing algorithms and visualization tools for biomedical signals (EEG, PPG, accelerometry), including filtering and pulse-analysis, to support clinical biosignal inspection across EDF, CSV and .mat data formats. Designed synthetic test-signal pipelines for algorithm validation and QA, within a multidisciplinary team of software engineers, physiologists and product developers.",
      tutor_period: "2022 – Present",
      tutor_title: "Private Tutor: Maths, Physics & Chemistry",
      tutor_desc: "Provide one-to-one academic tutoring for secondary-school students since 2022. Plan and develop personalized study plans for each student, structuring the explanation of complex topics clearly and progressively. Recommended by school teachers for strong academic results.",
      leroy_period: "2023",
      leroy_title: "Leroy Merlin: Customer Service & Sales",
      leroy_desc: "Provided technical product guidance and managed stock under high-pressure conditions. Built teamwork, communication and rapid problem-solving skills.",
    },
    tfg: {
      tag: "Bachelor Thesis",
      title: "Delta Robot: Control Design",
      subtitle: "My thesis project: writing and testing the control code for a delta robot, for agricultural weed-intervention research, from a blank sketch to a robot moving on a bench.",
      badge1: "Prototype now used in research at the Technical University of Denmark",
      badge2: "Real-robot control, not just simulation",
      badge3: "Full IK/FK derivation",
      badge4: "1-2 mm end-effector accuracy",
      step1: "Define robot geometry & coordinate frames",
      step2: "Derive & validate inverse/forward kinematics",
      step3: "Simulate the full control pipeline in Python",
      step4: "Port the controller to C++ on a Teensy 4.1",
      step5: "Log real-robot experiments and compare controllers",
      tab_smooth: "Smooth Feedback (main)",
      tab_feedforward: "Feedforward",
      tab_pid: "Full PID",
      tab_sim: "Offline Simulation",
      caption_smooth: "Default mode: encoder-based bounded feedback correcting the inverse-kinematics reference. This is the main demonstration mode used in the thesis.",
      caption_feedforward: "Baseline mode: the inverse-kinematics reference is sent to the robot without encoder-based correction.",
      caption_pid: "Comparison mode: a full PID controller, which can reduce numerical error on some targets but is more aggressive on the physical prototype.",
      caption_sim: "Offline Python simulation of the intended kinematic motion, run before testing on the physical prototype.",
      tech_label: "Stack:",
    },
    projects: {
      tag: "More builds",
      title: "Other Engineering Projects",
      p1_title: "4-DOF Robotic Arm: Vision & Control",
      p1_desc: "Built a robotic arm that detects objects with computer vision, converts pixel coordinates to world space, and reaches targets via inverse kinematics, with HSV segmentation, camera calibration, and smooth joint-space motion on Dynamixel servos.",
      p2_title: "Differential-Drive Robot: Digital Control",
      p2_desc: "Ranked 1st in class. Designed and implemented PI/PD controllers and sensor fusion for a differential-drive robot, validated in Simulink and deployed on a Teensy 4.1.",
      p3_title: "Graph Neural Networks: Deep Learning",
      p3_desc: "Trained a physics-informed graph neural network (PaiNN) for molecular property prediction using the QM9 and MD17 datasets.",
    },
    skills: {
      tag: "Toolbox",
      title: "Skills",
      eng_title: "Engineering",
      prog_title: "Programming",
      design_title: "Design & Simulation",
      tools_title: "Tools",
      cert1_title: "ISO 21500 & ISO 21502",
      cert1_desc: "Project, Programme & Portfolio Management, Danish Standards, Jan 2026",
      cert2_title: "Languages",
      cert2_desc: "Spanish (native) · English (C1) · German (A2)",
      cert3_title: "Science Prize",
      cert3_desc: "Iale International School",
      cert4_title: "Web Programming",
      cert4_desc: "HTML, CSS and JavaScript",
      cert5_title: "Energy Systems",
      cert5_desc: "CFP, Universitat Politècnica de València, 2024",
    },
    contact: {
      tag: "Let's talk",
      title: "Contact",
      lead: "If you want to collaborate, connect, or discuss opportunities, feel free to reach out:",
      location: "Valencia, Spain",
    },
    footer: { rights: "All rights reserved." },
  },

  es: {
    nav: { about: "Sobre mí", journey: "Trayectoria", experience: "Experiencia", tfg: "TFG", projects: "Proyectos", skills: "Habilidades", contact: "Contacto" },
    hero: {
      eyebrow: "Ingeniero en Electrónica Industrial y Automática",
      hi: "Hola, soy",
      lead: "Ingeniero en Electrónica Industrial y Automática por la Universitat Politècnica de València, con experiencia en robótica y control digital forjada durante un año en la Universidad Técnica de Dinamarca. Centrado en problemas técnicos de principio a fin, desde el desarrollo teórico y la simulación hasta la implementación en entornos industriales.",
      cta_thesis: "Ver mis proyectos",
      cta_cv: "Descargar CV",
      stat1: "lenguajes con los que trabajo: Python, C/C++, MATLAB",
      stat2: "estrategias de control validadas en hardware real",
      stat3: "proyectos de ingeniería llevados de la simulación a hardware real",
    },
    about: {
      tag: "Quién soy",
      title: "Sobre mí",
      p1: "Soy <strong>Alexander Immanuel Goerke</strong>, <strong>Ingeniero en Electrónica Industrial y Automática</strong> por la Universitat Politècnica de València, con un año de especialización en robótica y control digital en la <strong>Universidad Técnica de Dinamarca</strong>. Me apasiona investigar problemas técnicos de principio a fin, desde el desarrollo teórico y la simulación hasta su implementación en entornos industriales y la mejora continua de los procesos.",
      p2: "Mi Trabajo de Fin de Grado se centró en el diseño geométrico y de software de un robot delta para un proyecto agrícola, abarcando desde la cinemática hasta un controlador en C++ ejecutándose en un Teensy 4.1. El prototipo sigue hoy en uso dentro de un proyecto de doctorado en la Universidad Técnica de Dinamarca.",
      p3: "Durante mi último periodo universitario, y tras un proceso de selección, conseguí el puesto de Software Engineer en Cebreo Medical, empresa de tecnología médica en Copenhague, donde desarrollé herramientas para visualizar señales biomédicas (EEG, PPG, acelerometría) junto a un equipo multidisciplinar, permitiendo a personas sin conocimientos técnicos estudiar señales del cuerpo humano para el desarrollo de equipos médicos.",
      p4: "Trabajo con Python, C/C++, MATLAB/Simulink y herramientas de diseño como SolidWorks. Actualmente busco mi próximo reto en robótica, control y automatización de procesos dentro de la industria tecnológica.",
    },
    journey: {
      tag: "El camino hasta ahora",
      title: "Mi Trayectoria",
      upv_dates: "2022 – 2026",
      upv_title: "Universitat Politècnica de València, Valencia, España",
      upv_desc: "Grado en Ingeniería Electrónica Industrial y Automática, completado. Bases en circuitos, sistemas embebidos, sistemas energéticos y automatización.",
      "2025": "2025 – 2026",
      dtu_title: "Erasmus+ en la Universidad Técnica de Dinamarca, Copenhague",
      dtu_desc: "Año académico completo en la Universidad Técnica de Dinamarca centrado en Robótica, Control Digital y Deep Learning, trabajando en proyectos de ingeniería complejos junto a equipos internacionales.",
      "2025b": "Feb 2026 – Jun 2026",
      tfg_title: "TFG: Robot Delta",
      tfg_desc: "Diseñé, simulé y construí el sistema de control de un robot delta para intervención agrícola contra malas hierbas, desde las matemáticas hasta un prototipo con una precisión de 1-2 mm en el efector final sobre hardware real.",
      "2026": "Ene 2026 – Presente",
      cebreo_title: "Cebreo Medical A/S, Copenhague, Dinamarca",
      cebreo_desc: "Software Engineer construyendo herramientas de análisis de señal de EEG, acelerómetro y PPG para inspección de bioseñales clínicas en un equipo de I+D de tecnología médica.",
    },
    experience: {
      tag: "Trabajo",
      title: "Experiencia",
      cebreo_period: "Ene 2026 – Presente",
      cebreo_title: "Cebreo Medical A/S: Software Engineer",
      cebreo_desc: "Desarrollé algoritmos de procesamiento de señal y herramientas de visualización para señales biomédicas (EEG, PPG, acelerometría), incluyendo filtrado y análisis de pulso, dando soporte a la inspección clínica de bioseñales en formatos EDF, CSV y .mat. Diseñé pipelines de señales sintéticas para validación de algoritmos y control de calidad (QA), dentro de un equipo multidisciplinar de ingeniería de software, fisiología y producto.",
      tutor_period: "2022 – Actualidad",
      tutor_title: "Profesor Particular: Matemáticas, Física y Química",
      tutor_desc: "Ofrezco asesoría académica uno a uno a estudiantes de secundaria desde 2022. Planifico y desarrollo planes de estudio personalizados para cada alumno, estructurando la explicación de conceptos complejos de forma clara y progresiva. Recomendado por el profesorado del centro por los resultados académicos obtenidos.",
      leroy_period: "2023",
      leroy_title: "Leroy Merlin: Atención al Cliente y Ventas",
      leroy_desc: "Asesoramiento técnico de producto y gestión de stock en condiciones de alta demanda. Desarrollé trabajo en equipo, comunicación y resolución rápida de problemas.",
    },
    tfg: {
      tag: "Trabajo de Fin de Grado",
      title: "Robot Delta: Diseño de Control",
      subtitle: "Mi TFG: escribir y probar el código de control de un robot delta, para investigación de intervención agrícola contra malas hierbas, desde un boceto en blanco hasta un robot moviéndose en el banco de pruebas.",
      badge1: "Prototipo usado hoy en investigación en la Universidad Técnica de Dinamarca",
      badge2: "Control sobre robot real, no solo simulación",
      badge3: "Derivación completa de cinemática IK/FK",
      badge4: "Precisión de 1-2 mm en el efector final",
      step1: "Definir la geometría del robot y los sistemas de referencia",
      step2: "Derivar y validar la cinemática inversa/directa",
      step3: "Simular todo el pipeline de control en Python",
      step4: "Portar el controlador a C++ sobre un Teensy 4.1",
      step5: "Registrar experimentos con el robot real y comparar controladores",
      tab_smooth: "Feedback Suave (principal)",
      tab_feedforward: "Feedforward",
      tab_pid: "PID Completo",
      tab_sim: "Simulación Offline",
      caption_smooth: "Modo por defecto: realimentación acotada basada en encoders que corrige la referencia de cinemática inversa. Este es el modo principal de demostración usado en el TFG.",
      caption_feedforward: "Modo base: la referencia de cinemática inversa se envía al robot sin corrección basada en encoders.",
      caption_pid: "Modo de comparación: un controlador PID completo, que puede reducir el error numérico en algunos objetivos pero es más agresivo sobre el prototipo físico.",
      caption_sim: "Simulación offline en Python del movimiento cinemático previsto, ejecutada antes de probar en el prototipo físico.",
      tech_label: "Stack:",
    },
    projects: {
      tag: "Más proyectos",
      title: "Otros Proyectos de Ingeniería",
      p1_title: "Brazo Robótico de 4 GDL: Visión y Control",
      p1_desc: "Construí un brazo robótico capaz de detectar objetos mediante visión por computador, convertir coordenadas de píxeles a espacio real y alcanzarlos mediante cinemática inversa, con segmentación HSV, calibración de cámara y movimiento suave en el espacio articular sobre servos Dynamixel.",
      p2_title: "Robot de Tracción Diferencial: Control Digital",
      p2_desc: "Quedé 1º de la clase. Diseñé e implementé controladores PI/PD y fusión de sensores para un robot de tracción diferencial, validados en Simulink e implementados en un Teensy 4.1.",
      p3_title: "Redes Neuronales de Grafos: Deep Learning",
      p3_desc: "Entrené una red neuronal de grafos con información física (PaiNN) para predicción de propiedades moleculares usando los conjuntos de datos QM9 y MD17.",
    },
    skills: {
      tag: "Herramientas",
      title: "Habilidades",
      eng_title: "Ingeniería",
      prog_title: "Programación",
      design_title: "Diseño y Simulación",
      tools_title: "Herramientas",
      cert1_title: "ISO 21500 y ISO 21502",
      cert1_desc: "Gestión de Proyectos, Programas y Carteras, Danish Standards, ene 2026",
      cert2_title: "Idiomas",
      cert2_desc: "Español (nativo) · Inglés (C1) · Alemán (A2)",
      cert3_title: "Premio de Ciencias",
      cert3_desc: "Iale International School",
      cert4_title: "Programación Web",
      cert4_desc: "HTML, CSS y JavaScript",
      cert5_title: "Sistemas Energéticos",
      cert5_desc: "CFP, Universitat Politècnica de València, 2024",
    },
    contact: {
      tag: "Hablemos",
      title: "Contacto",
      lead: "Si quieres colaborar, conectar o hablar de oportunidades, no dudes en escribirme:",
      location: "Valencia, España",
    },
    footer: { rights: "Todos los derechos reservados." },
  },
};

/* ========================================================
   HELPERS
======================================================== */
function getTranslation(lang, key) {
  return key.split(".").reduce((obj, part) => (obj ? obj[part] : undefined), translations[lang]);
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("site-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = getTranslation(lang, el.getAttribute("data-i18n"));
    if (value !== undefined) el.innerHTML = value;
  });

  document.querySelectorAll(".lang-option").forEach((el) => {
    el.classList.toggle("is-active", el.getAttribute("data-lang-option") === lang);
  });

  const captionEl = document.getElementById("tfgVideoCaption");
  const activeTab = document.querySelector(".tfg-tab.is-active");
  if (captionEl && activeTab) {
    const captionKey = "tfg.caption_" + activeTab.getAttribute("data-video");
    const fallback = getTranslation(lang, "tfg.caption_smooth");
    captionEl.textContent = getTranslation(lang, captionKey) || fallback;
  }
}

function detectInitialLanguage() {
  const saved = localStorage.getItem("site-lang");
  if (saved === "en" || saved === "es") return saved;
  return navigator.language && navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

/* ========================================================
   CURSOR GLOW
======================================================== */
function initCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  if (!glow || window.matchMedia("(pointer: coarse)").matches) return;
  window.addEventListener(
    "mousemove",
    (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    },
    { passive: true }
  );
}

/* ========================================================
   MAGNETIC BUTTONS
======================================================== */
function initMagneticButtons() {
  const els = document.querySelectorAll(".magnetic, .tfg-tab");
  els.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      const moveX = (relX / rect.width - 0.5) * 10;
      const moveY = (relY / rect.height - 0.5) * 10;
      el.style.transform = `translate(${moveX}px, ${moveY}px)`;
      el.style.setProperty("--mx", `${(relX / rect.width) * 100}%`);
      el.style.setProperty("--my", `${(relY / rect.height) * 100}%`);
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0, 0)";
    });
  });
}

/* ========================================================
   HERO PHOTO TILT
======================================================== */
function initHeroTilt() {
  const frame = document.getElementById("heroPhotoFrame");
  if (!frame || window.matchMedia("(pointer: coarse)").matches) return;
  const hero = document.getElementById("hero");
  hero.addEventListener("mousemove", (e) => {
    const rect = frame.getBoundingClientRect();
    const relX = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const relY = (e.clientY - rect.top - rect.height / 2) / rect.height;
    frame.style.transform = `rotateY(${relX * 14}deg) rotateX(${relY * -14}deg)`;
  });
  hero.addEventListener("mouseleave", () => {
    frame.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
}

/* ========================================================
   HERO TERMINAL TYPING EFFECT
======================================================== */
const terminalLines = {
  en: [
    "engineer.mindset = ['curious', 'hands-on', 'hard-working']",
    "skills += ['Python', 'C/C++', 'MATLAB', 'control systems']",
    "status: open to robotics, control and automation roles",
  ],
  es: [
    "ingeniero.mentalidad = ['curioso', 'practico', 'trabajador']",
    "habilidades += ['Python', 'C/C++', 'MATLAB', 'sistemas de control']",
    "estado: abierto a roles en robótica, control y automatización",
  ],
};

let terminalTimer = null;

function runTerminalTyping(lang) {
  const el = document.getElementById("heroTyping");
  if (!el) return;
  if (terminalTimer) clearTimeout(terminalTimer);

  const lines = terminalLines[lang] || terminalLines.en;
  let lineIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const currentLine = lines[lineIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = currentLine.slice(0, charIndex);
      if (charIndex === currentLine.length) {
        deleting = false;
        terminalTimer = setTimeout(() => {
          deleting = true;
          tick();
        }, 1800);
        return;
      }
      terminalTimer = setTimeout(tick, 32);
    } else {
      charIndex--;
      el.textContent = currentLine.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
        terminalTimer = setTimeout(tick, 400);
        return;
      }
      terminalTimer = setTimeout(tick, 14);
    }
  }

  tick();
}

/* ========================================================
   INIT
======================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Language
  let currentLang = detectInitialLanguage();
  applyLanguage(currentLang);
  runTerminalTyping(currentLang);

  document.getElementById("langToggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "es" : "en";
    applyLanguage(currentLang);
    runTerminalTyping(currentLang);
  });

  // Tech interactions
  if (typeof window.initRobotArm3D === "function") window.initRobotArm3D();
  initCursorGlow();
  initMagneticButtons();
  initHeroTilt();

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // CV dropdown
  const cvDropdown = document.querySelector(".cv-dropdown");
  const cvDropdownBtn = document.getElementById("cvDropdownBtn");
  cvDropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    cvDropdown.classList.toggle("is-open");
  });
  document.addEventListener("click", (e) => {
    if (!cvDropdown.contains(e.target)) cvDropdown.classList.remove("is-open");
  });

  // Scroll progress bar (rAF-throttled so it updates at most once per frame)
  const progressBar = document.getElementById("scrollProgress");
  let progressTicking = false;
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + "%";
    progressTicking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (progressTicking) return;
      progressTicking = true;
      requestAnimationFrame(updateProgress);
    },
    { passive: true }
  );
  updateProgress();

  // Scroll reveal
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));

  // TFG video tabs
  const tfgVideoSources = {
    smooth: "videos/tfg_smooth_feedback.mp4",
    feedforward: "videos/tfg_feedforward.mp4",
    pid: "videos/tfg_pid.mp4",
    sim: "videos/tfg_offline_sim.mp4",
  };
  const tfgVideoPosters = {
    smooth: "videos/posters/tfg_smooth_feedback.jpg",
    feedforward: "videos/posters/tfg_feedforward.jpg",
    pid: "videos/posters/tfg_pid.jpg",
    sim: "videos/posters/tfg_offline_sim.jpg",
  };
  const tfgTabs = document.querySelectorAll(".tfg-tab");
  const tfgVideo = document.getElementById("tfgVideo");
  const tfgCaption = document.getElementById("tfgVideoCaption");

  tfgTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tfgTabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      const key = tab.getAttribute("data-video");
      tfgVideo.poster = tfgVideoPosters[key];
      tfgVideo.src = tfgVideoSources[key];
      tfgVideo.load();

      const captionText = getTranslation(currentLang, "tfg.caption_" + key);
      if (captionText) tfgCaption.textContent = captionText;
    });
  });
});
