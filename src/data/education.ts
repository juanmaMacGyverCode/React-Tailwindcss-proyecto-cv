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
    id: "ms-ml-2024",
    period: { en: "2024 – Current", es: "2024 – Actualidad" },
    title: {
      en: "MS in Computer Science – Data Science & Machine Learning",
      es: "Máster en Informática – Ciencia de Datos y Machine Learning",
    },
    institution: {
      en: "Scaler Neovarsity (WOOLF University)",
      es: "Scaler Neovarsity (WOOLF University)",
    },
    description: {
      en: "Advanced ML, deep learning, NLP and big data analytics.",
      es: "ML avanzado, deep learning, NLP y analítica big data.",
    },
    skills: ["Advanced Deep Learning", "NLP", "Computer Vision", "Big Data Systems"],
  },
  {
    id: "be-2017-2021",
    period: { en: "2017 – 2021", es: "2017 – 2021" },
    title: {
      en: "BE in Electronic and Instrumentation Engineering",
      es: "Grado en Ingeniería Electrónica e Instrumentación",
    },
    institution: {
      en: "Sri Ramakrishna Engineering College, Anna University",
      es: "Sri Ramakrishna Engineering College, Anna University",
    },
    description: {
      en: "Electronics, control systems and signal processing. CGPA 8.49/10.",
      es: "Electrónica, sistemas de control y procesado de señal. Nota 8,49/10.",
    },
    skills: ["Electronics", "Instrumentation", "Control Systems", "Signal Processing"],
  },
];
