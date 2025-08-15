export type LocalizedText = { en: string; es: string };

export type EducationItem = {
  id: string;
  period: LocalizedText;
  title: LocalizedText;
  institution: LocalizedText;
  description: LocalizedText;
  skills: string[];
};

export const education: EducationItem[] = [
  {
    id: "ing-ti-2024",
    period: { en: "2024 - Current", es: "2024 - Actualidad" },
    title: {
      en: "Bachelor\'s Degree in Information Technology Engineering (IT)",
      es: "Grado en Ingeniería en Tecnologías de la Información (TI)",
    },
    institution: {
      en: "UNED (Universidad Nacional de Educación a Distancia)",
      es: "UNED (Universidad Nacional de Educación a Distancia)",
    },
    description: {
      en: "The program offers a comprehensive education in the design, development, and management of computer systems and information technologies. It combines a solid foundation in programming, software engineering, and databases with advanced knowledge in networks, cybersecurity, artificial intelligence, and cloud computing. The UNED’s distance learning model allows for a flexible and self-paced approach, developing both technical expertise and problem-solving skills essential for the IT sector.",
      es: "El programa ofrece una formación integral en el diseño, desarrollo y gestión de sistemas informáticos y tecnologías de la información. Combina una sólida base en programación, ingeniería de software y bases de datos con conocimientos avanzados en redes, ciberseguridad, inteligencia artificial y computación en la nube. El modelo de enseñanza a distancia de la UNED permite un aprendizaje flexible y autónomo, desarrollando tanto competencias técnicas como habilidades de resolución de problemas esenciales en el sector TI.",
    },
    skills: [
      "Advanced Deep Learning",
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Big Data & Distributed Systems",
      "Cloud Computing & Deployment",
      "Databases",
      "Programming"
    ],
  },
  {
    id: "vo-tw-2024",
    period: { en: "2018 - 2020", es: "2018 - 2020" },
    title: {
      en: "Advanced Vocational Training in Web Application Development (Higher Technician)",
      es: "Técnico Superior en Desarrollo de Aplicaciones Web",
    },
    institution: {
      en: "CIFP Villa de Agüimes",
      es: "CIFP Villa de Agüimes",
    },
    description: {
      en: "The Higher Vocational Training in Web Application Development prepares professionals to design, develop, implement, and maintain web applications according to quality, accessibility, and security standards. It covers both frontend and backend development, database management, API integration, and production deployment, while applying agile methodologies and modern development practices.",
      es: "El Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web forma profesionales capaces de diseñar, desarrollar, implementar y mantener aplicaciones web, siguiendo estándares de calidad, accesibilidad y seguridad. Incluye competencias en frontend, backend, bases de datos, integración de servicios y despliegue en entornos de producción. La formación combina programación, diseño de interfaces, gestión de servidores y metodologías ágiles, preparando para un entorno tecnológico en constante evolución.",
    },
    skills: [
      "Java",
      "Javascript",
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "Ubuntu",
      "Design",
      "WSDL",
      "API",
      "Tomcat",
      "WildFly",
      "Agile methodologies",
      "Git"
    ],
  },
  {
    id: "fisica-2013-2017",
    period: { en: "2013 – 2017 (unfinished)", es: "2013 – 2017 (no terminada)" },
    title: {
      en: "Bachelor Degree in Physics",
      es: "Grado en Física",
    },
    institution: {
      en: "UNED (Universidad Nacional de Educación a Distancia)",
      es: "UNED (Universidad Nacional de Educación a Distancia)",
    },
    description: {
      en: "The Physics degree at UNED provides a strong foundation in the theoretical and experimental principles of physics, covering areas such as classical mechanics, electromagnetism, optics, thermodynamics, quantum physics, statistical mechanics, and relativity. The program combines a rigorous mathematical approach with skills in modeling, problem-solving, and data analysis. Its distance-learning format allows students to combine studies with other activities, fostering autonomy, discipline, and independent learning skills.",
      es: "El Grado en Física de la UNED ofrece una formación sólida en los fundamentos teóricos y experimentales de la física, cubriendo áreas como mecánica clásica, electromagnetismo, óptica, termodinámica, física cuántica, física estadística y relatividad. El plan de estudios combina un enfoque matemático riguroso con habilidades de modelización, resolución de problemas y análisis de datos. Gracias a su modalidad a distancia, permite compatibilizar los estudios con otras actividades, fomentando la autonomía, la disciplina y la capacidad de aprendizaje independiente.",
    },
    skills: [
      "Classical Mechanics",
      "Electromagnetism",
      "Thermodynamics",
      "Quantum Physics",
      "Statistical Mechanics",
      "Relativity",
      "Mathematical Modeling",
      "Numerical Methods",
      "Data Analysis",
      "Scientific Computing (Python, MATLAB)"
    ],
  },
];
