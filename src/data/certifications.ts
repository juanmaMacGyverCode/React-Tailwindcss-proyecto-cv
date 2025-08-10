export type LocalizedText = { en: string; es: string };

export type Certification = {
  id: number;
  title: LocalizedText;
  provider: string;
  institution: LocalizedText;
  date: LocalizedText;
  description: LocalizedText;
  icon?: string;
  url: string;
};

export const certifications: Certification[] = [
  {
    id: 1,
    title: { en: "HTML, CSS, and JavaScript for Web Developers", es: "HTML, CSS y JavaScript para Desarrolladores Web" },
    provider: "Coursera",
    institution: { en: "Johns Hopkins University", es: "Universidad Johns Hopkins" },
    date: { en: "January 2021", es: "Enero 2021" },
    description: {
      en: "Web development fundamentals including responsive design, Bootstrap, and JavaScript.",
      es: "Fundamentos de desarrollo web, incluyendo diseño responsive, Bootstrap y JavaScript."
    },
    icon: "code",
    url: "https://coursera.org/verify/HTMLCSSJS123"
  },
  {
    id: 2,
    title: { en: "Data Science Math Skills", es: "Matemáticas para Ciencia de Datos" },
    provider: "Coursera",
    institution: { en: "Duke University", es: "Universidad de Duke" },
    date: { en: "March 2021", es: "Marzo 2021" },
    description: {
      en: "Statistics, probability, linear algebra and optimization for data science.",
      es: "Estadística, probabilidad, álgebra lineal y optimización para ciencia de datos."
    },
    icon: "calculator",
    url: "https://coursera.org/verify/DATAMATH456"
  },
  {
    id: 3,
    title: { en: "Advanced SQL Certificate", es: "Certificado Avanzado en SQL" },
    provider: "HackerRank",
    institution: { en: "HackerRank", es: "HackerRank" },
    date: { en: "April 2024", es: "Abril 2024" },
    description: {
      en: "Advanced SQL concepts including complex joins, window functions, and optimization.",
      es: "SQL avanzado: joins complejos, funciones de ventana y optimización."
    },
    icon: "database",
    url: "https://hackerrank.com/certificates/SQLADV789"
  },
  {
    id: 4,
    title: { en: "SQL Fundamentals", es: "Fundamentos de SQL" },
    provider: "Scaler",
    institution: { en: "Scaler Academy", es: "Scaler Academy" },
    date: { en: "May 2024", es: "Mayo 2024" },
    description: {
      en: "Database design, basic queries, indexes, and performance optimization.",
      es: "Diseño de bases de datos, consultas básicas, índices y optimización."
    },
    icon: "database",
    url: "https://scaler.com/certificates/SQLFUN101"
  },
  {
    id: 5,
    title: { en: "React Frontend Development", es: "Desarrollo Frontend con React" },
    provider: "Udemy",
    institution: { en: "Udemy Academy", es: "Academia Udemy" },
    date: { en: "September 2022", es: "Septiembre 2022" },
    description: {
      en: "React.js, hooks, state management, and component-driven design.",
      es: "React.js, hooks, gestión de estado y diseño orientado a componentes."
    },
    icon: "react",
    url: "https://udemy.com/certificate/REACT2022"
  },
  {
    id: 6,
    title: { en: "Node.js Backend Development", es: "Desarrollo Backend con Node.js" },
    provider: "Pluralsight",
    institution: { en: "Pluralsight", es: "Pluralsight" },
    date: { en: "November 2022", es: "Noviembre 2022" },
    description: {
      en: "Node.js, Express, authentication, and REST API design.",
      es: "Node.js, Express, autenticación y diseño de API REST."
    },
    icon: "node",
    url: "https://pluralsight.com/certificates/NODEJSDEV"
  },
  {
    id: 7,
    title: { en: "Cloud Practitioner Essentials", es: "Fundamentos de Cloud Practitioner" },
    provider: "AWS",
    institution: { en: "Amazon Web Services", es: "Amazon Web Services" },
    date: { en: "February 2023", es: "Febrero 2023" },
    description: {
      en: "AWS services, cloud architecture, and deployment models.",
      es: "Servicios de AWS, arquitectura en la nube y modelos de despliegue."
    },
    icon: "cloud",
    url: "https://aws.amazon.com/verify/AWSCLOUD2023"
  },
  {
    id: 8,
    title: { en: "Machine Learning Specialization", es: "Especialización en Machine Learning" },
    provider: "Coursera",
    institution: { en: "Stanford University", es: "Universidad de Stanford" },
    date: { en: "June 2023", es: "Junio 2023" },
    description: {
      en: "Supervised and unsupervised learning, model evaluation, deep learning basics.",
      es: "Aprendizaje supervisado y no supervisado, evaluación de modelos y fundamentos de deep learning."
    },
    icon: "ai",
    url: "https://coursera.org/verify/MLSTANFORD2023"
  }
];
