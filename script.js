/* ========================================================
   TRANSLATIONS
======================================================== */
const translations = {
  en: {
    nav: { about: "About", journey: "Journey", experience: "Experience", tfg: "Thesis", projects: "Projects", skills: "Skills", contact: "Contact" },
    hero: {
      eyebrow: "Industrial Electronics & Automation Engineer",
      hi: "Hi, I'm",
      lead: "Industrial Electronics and Automation Engineer, recently back from an Erasmus+ exchange at the Technical University of Denmark (DTU). I'm hands-on, curious, and driven to keep learning — I like taking an idea all the way from code to a machine that actually works on the bench.",
      cta_thesis: "See my projects",
      cta_cv: "Download CV",
      stat1: "languages I build with: Python, C/C++, MATLAB",
      stat2: "control strategies validated on real hardware",
      stat3: "months of paid engineering experience",
    },
    about: {
      tag: "Who I am",
      title: "About Me",
      p1: "I'm <strong>Alexander Immanuel Goerke</strong>, graduate in <strong>Industrial Electronics and Automation Engineering</strong> from Universitat Politècnica de València (UPV), having just completed an Erasmus+ exchange at the <strong>Technical University of Denmark (DTU)</strong>.",
      p2: "I enjoy the full stack of an engineering project: doing the math, writing the code, wiring the hardware, and debugging it on the bench until it works. That mindset took me from a robot geometry sketch for my Bachelor's thesis to six months writing signal-processing code for real biosignal data at a medical technology company.",
      p3: "What drives me is curiosity and work ethic: I like picking up new tools fast, digging into how things work under the hood, and putting in the hours a project actually needs — in the lab, in the code, or on a call with a team.",
    },
    journey: {
      tag: "The path so far",
      title: "My Journey",
      upv_dates: "2022 — 2026",
      upv_title: "UPV — Valencia, Spain",
      upv_desc: "B.Sc. in Industrial Electronics and Automation Engineering, completed. Foundations in circuits, embedded systems, energy systems and automation.",
      "2025": "2025 — 2026",
      dtu_title: "Erasmus+ at DTU — Copenhagen, Denmark",
      dtu_desc: "Exchange semester focused on Robotics, Digital Control and Deep Learning. Left Spain to test myself in a new language, culture and engineering environment — and came back more independent, confident and globally minded.",
      "2025b": "2025 — 2026",
      tfg_title: "Bachelor Thesis — Differential Robot Arm",
      tfg_desc: "Designed, simulated and built the control system for a differential robotic arm for agricultural weed-intervention — from the math to a working prototype on real hardware.",
      "2026": "Jan 2026 — Jun 2026",
      cebreo_title: "Cebreo Medical A/S — Copenhagen, Denmark",
      cebreo_desc: "Student worker developing signal-processing algorithms and visualization tools for physiological biosignals (EEG, accelerometer, PPG) in a medtech R&D team.",
      now: "Now",
      now_title: "Degree, Erasmus+ and thesis — all done",
      now_desc: "Back from Copenhagen with my degree finished, thesis submitted, and real engineering experience under my belt — hungry to keep learning and ready for the next challenge.",
    },
    experience: {
      tag: "Work",
      title: "Experience",
      cebreo_period: "Jan 2026 – Jun 2026",
      cebreo_title: "Cebreo Medical A/S — Data Analysis Engineer (Student Worker)",
      cebreo_desc: "Worked as a data analysis engineer in Copenhagen, developing signal-processing algorithms and analysis workflows for physiological biosignals (EEG, accelerometer, PPG). Built data pipelines and visualization tools for clinical signal-quality inspection inside a multidisciplinary software/physiology/product team.",
      tutor_period: "2022 – Present",
      tutor_title: "Private Tutor — Maths, Physics & Chemistry",
      tutor_desc: "Over two years teaching secondary-school students. Designed personalized study plans and explained complex topics step by step — recommended by school teachers for strong academic results.",
      leroy_period: "2023",
      leroy_title: "Leroy Merlin — Customer Service & Sales",
      leroy_desc: "Provided technical product guidance and managed stock under high-pressure conditions. Built teamwork, communication and rapid problem-solving skills.",
      waiter_period: "2021 – 2022",
      waiter_title: "Restaurant Work — Waiter",
      waiter_desc: "Managed high-demand service responsibilities while ensuring an excellent customer experience. Improved leadership, multitasking and interpersonal skills under pressure.",
    },
    tfg: {
      tag: "Bachelor Thesis",
      title: "Differential Robot Arm — Control Design",
      subtitle: "My thesis project: writing and testing the control code for a differential robotic arm, for agricultural weed-intervention research, from a blank sketch to a robot moving on a bench.",
      badge1: "Prototype now used in DTU research",
      badge2: "Real-robot control, not just simulation",
      badge3: "Full IK/FK derivation",
      step1: "Define robot geometry & coordinate frames",
      step2: "Derive & validate inverse/forward kinematics",
      step3: "Simulate the full control pipeline in Python",
      step4: "Port the controller to C++ on a Teensy 4.1",
      step5: "Log real-robot experiments and compare controllers",
      tab_smooth: "Smooth Feedback (main)",
      tab_feedforward: "Feedforward",
      tab_pid: "Full PID",
      tab_sim: "Offline Simulation",
      caption_smooth: "Default mode: encoder-based bounded feedback correcting the inverse-kinematics reference — the main demonstration mode used in the thesis.",
      caption_feedforward: "Baseline mode: the inverse-kinematics reference is sent to the robot without encoder-based correction.",
      caption_pid: "Comparison mode: a full PID controller, which can reduce numerical error on some targets but is more aggressive on the physical prototype.",
      caption_sim: "Offline Python simulation of the intended kinematic motion, run before testing on the physical prototype.",
      tech_label: "Stack:",
    },
    projects: {
      tag: "More builds",
      title: "Other Engineering Projects",
      p1_title: "4-DOF Robotic Arm — Vision & Control",
      p1_desc: "Built a robotic arm that detects objects with computer vision, converts pixel coordinates to world space, and reaches targets via inverse kinematics — with smooth joint-space motion on Dynamixel servos.",
      p2_title: "Differential-Drive Robot — Digital Control",
      p2_desc: "Designed and implemented PI/PD controllers and sensor fusion for a differential-drive robot, validated in Simulink and deployed on a Teensy 4.1.",
      p3_title: "Graph Neural Networks — Deep Learning",
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
      cert1_desc: "Project, Programme & Portfolio Management — Danish Standards, Jan 2026",
      cert2_title: "Languages",
      cert2_desc: "Spanish (native) · English (C1) · German (A2)",
      cert3_title: "Science Prize",
      cert3_desc: "Iale International School",
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
      lead: "Ingeniero en Electrónica Industrial y Automática, recién vuelto de un Erasmus+ en la Universidad Técnica de Dinamarca (DTU). Soy práctico, curioso y con ganas constantes de aprender — me gusta llevar una idea desde el código hasta una máquina que funciona de verdad en el banco de pruebas.",
      cta_thesis: "Ver mis proyectos",
      cta_cv: "Descargar CV",
      stat1: "lenguajes con los que trabajo: Python, C/C++, MATLAB",
      stat2: "estrategias de control validadas en hardware real",
      stat3: "meses de experiencia profesional remunerada",
    },
    about: {
      tag: "Quién soy",
      title: "Sobre mí",
      p1: "Soy <strong>Alexander Immanuel Goerke</strong>, graduado en <strong>Ingeniería Electrónica Industrial y Automática</strong> por la Universitat Politècnica de València (UPV), y acabo de completar un intercambio Erasmus+ en la <strong>Universidad Técnica de Dinamarca (DTU)</strong>.",
      p2: "Me gusta abarcar todo el ciclo de un proyecto de ingeniería: hacer las matemáticas, escribir el código, cablear el hardware y depurarlo en el banco de pruebas hasta que funciona. Esa mentalidad me llevó desde un boceto geométrico de robot para mi TFG hasta seis meses escribiendo código de procesamiento de señal para bioseñales reales en una empresa de tecnología médica.",
      p3: "Lo que me mueve es la curiosidad y las ganas de trabajar: aprendo herramientas nuevas rápido, disfruto entender cómo funcionan las cosas por dentro y le dedico las horas que un proyecto necesita de verdad — en el laboratorio, en el código, o en una reunión de equipo.",
    },
    journey: {
      tag: "El camino hasta ahora",
      title: "Mi Trayectoria",
      upv_dates: "2022 — 2026",
      upv_title: "UPV — Valencia, España",
      upv_desc: "Grado en Ingeniería Electrónica Industrial y Automática, completado. Bases en circuitos, sistemas embebidos, sistemas energéticos y automatización.",
      "2025": "2025 — 2026",
      dtu_title: "Erasmus+ en DTU — Copenhague, Dinamarca",
      dtu_desc: "Semestre de intercambio centrado en Robótica, Control Digital y Deep Learning. Salí de España para ponerme a prueba en un idioma, cultura y entorno de ingeniería nuevos — y volví más independiente, seguro de mí mismo y con una mentalidad global.",
      "2025b": "2025 — 2026",
      tfg_title: "TFG — Brazo Robótico Diferencial",
      tfg_desc: "Diseñé, simulé y construí el sistema de control de un brazo robótico diferencial para intervención agrícola contra malas hierbas — desde las matemáticas hasta un prototipo funcionando en hardware real.",
      "2026": "Ene 2026 — Jun 2026",
      cebreo_title: "Cebreo Medical A/S — Copenhague, Dinamarca",
      cebreo_desc: "Colaborador técnico desarrollando algoritmos de procesamiento de señal y herramientas de visualización para bioseñales fisiológicas (EEG, acelerómetro, PPG) en un equipo de I+D de tecnología médica.",
      now: "Ahora",
      now_title: "Carrera, Erasmus+ y TFG — todo terminado",
      now_desc: "De vuelta de Copenhague con la carrera terminada, el TFG entregado y experiencia real de ingeniería — con ganas de seguir aprendiendo y listo para el siguiente reto.",
    },
    experience: {
      tag: "Trabajo",
      title: "Experiencia",
      cebreo_period: "Ene 2026 – Jun 2026",
      cebreo_title: "Cebreo Medical A/S — Data Analysis Engineer (Colaborador Técnico)",
      cebreo_desc: "Trabajé como ingeniero de análisis de datos en Copenhague, desarrollando algoritmos de procesamiento de señal y flujos de análisis para bioseñales fisiológicas (EEG, acelerómetro, PPG). Construí pipelines de datos y herramientas de visualización para la inspección de calidad de señal clínica dentro de un equipo multidisciplinar de software, fisiología y producto.",
      tutor_period: "2022 – Actualidad",
      tutor_title: "Profesor Particular — Matemáticas, Física y Química",
      tutor_desc: "Más de dos años dando clases a estudiantes de secundaria. Diseñé planes de estudio personalizados y expliqué temas complejos paso a paso — recomendado por profesores del centro por los buenos resultados académicos.",
      leroy_period: "2023",
      leroy_title: "Leroy Merlin — Atención al Cliente y Ventas",
      leroy_desc: "Asesoramiento técnico de producto y gestión de stock en condiciones de alta demanda. Desarrollé trabajo en equipo, comunicación y resolución rápida de problemas.",
      waiter_period: "2021 – 2022",
      waiter_title: "Camarero en Restaurante",
      waiter_desc: "Gestioné responsabilidades de servicio de alta demanda garantizando una excelente experiencia al cliente. Mejoré liderazgo, multitarea y habilidades interpersonales bajo presión.",
    },
    tfg: {
      tag: "Trabajo de Fin de Grado",
      title: "Brazo Robótico Diferencial — Diseño de Control",
      subtitle: "Mi TFG: escribir y probar el código de control de un brazo robótico diferencial, para investigación de intervención agrícola contra malas hierbas, desde un boceto en blanco hasta un robot moviéndose en el banco de pruebas.",
      badge1: "Prototipo usado hoy en investigación en DTU",
      badge2: "Control sobre robot real, no solo simulación",
      badge3: "Derivación completa de cinemática IK/FK",
      step1: "Definir la geometría del robot y los sistemas de referencia",
      step2: "Derivar y validar la cinemática inversa/directa",
      step3: "Simular todo el pipeline de control en Python",
      step4: "Portar el controlador a C++ sobre un Teensy 4.1",
      step5: "Registrar experimentos con el robot real y comparar controladores",
      tab_smooth: "Feedback Suave (principal)",
      tab_feedforward: "Feedforward",
      tab_pid: "PID Completo",
      tab_sim: "Simulación Offline",
      caption_smooth: "Modo por defecto: realimentación acotada basada en encoders que corrige la referencia de cinemática inversa — el modo principal de demostración usado en el TFG.",
      caption_feedforward: "Modo base: la referencia de cinemática inversa se envía al robot sin corrección basada en encoders.",
      caption_pid: "Modo de comparación: un controlador PID completo, que puede reducir el error numérico en algunos objetivos pero es más agresivo sobre el prototipo físico.",
      caption_sim: "Simulación offline en Python del movimiento cinemático previsto, ejecutada antes de probar en el prototipo físico.",
      tech_label: "Stack:",
    },
    projects: {
      tag: "Más proyectos",
      title: "Otros Proyectos de Ingeniería",
      p1_title: "Brazo Robótico de 4 GDL — Visión y Control",
      p1_desc: "Construí un brazo robótico capaz de detectar objetos mediante visión por computador, convertir coordenadas de píxeles a espacio real y alcanzarlos mediante cinemática inversa — con movimiento suave en el espacio articular sobre servos Dynamixel.",
      p2_title: "Robot de Tracción Diferencial — Control Digital",
      p2_desc: "Diseñé e implementé controladores PI/PD y fusión de sensores para un robot de tracción diferencial, validados en Simulink e implementados en un Teensy 4.1.",
      p3_title: "Redes Neuronales de Grafos — Deep Learning",
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
      cert1_desc: "Gestión de Proyectos, Programas y Carteras — Danish Standards, ene 2026",
      cert2_title: "Idiomas",
      cert2_desc: "Español (nativo) · Inglés (C1) · Alemán (A2)",
      cert3_title: "Premio de Ciencias",
      cert3_desc: "Iale International School",
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
    "status: Erasmus+ done, thesis delivered, ready for the next build",
  ],
  es: [
    "ingeniero.mentalidad = ['curioso', 'practico', 'trabajador']",
    "habilidades += ['Python', 'C/C++', 'MATLAB', 'sistemas de control']",
    "estado: Erasmus+ terminado, TFG entregado, listo para el siguiente reto",
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

  // Scroll progress bar
  const progressBar = document.getElementById("scrollProgress");
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + "%";
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
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
  const tfgTabs = document.querySelectorAll(".tfg-tab");
  const tfgVideo = document.getElementById("tfgVideo");
  const tfgCaption = document.getElementById("tfgVideoCaption");

  tfgTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tfgTabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      const key = tab.getAttribute("data-video");
      tfgVideo.src = tfgVideoSources[key];
      tfgVideo.load();

      const captionText = getTranslation(currentLang, "tfg.caption_" + key);
      if (captionText) tfgCaption.textContent = captionText;
    });
  });
});
