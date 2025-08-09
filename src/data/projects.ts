import automatedCodeQuality from '../assets/images/projects/automated_code_quality.jpeg';
import classificationOfAbnormalities from '../assets/images/projects/classification_of_abnormalities.svg';
import endToEndDataScience from '../assets/images/projects/end-to-end_data_science.jpeg';
import experimentsOnApplications from '../assets/images/projects/experiments_on_applications.jpeg';
import interactiveTableau from '../assets/images/projects/interactive_tableau.jpg';

export type ProjectCategory = 'dev' | 'ds';

export type ProjectItem = {
  slug: { en: string; es: string };
  title: { en: string; es: string };
  summary: { en: string; es: string };
  cover: string;                    // /public/...
  categories: ProjectCategory[];
  tags: string[];
};

export const projects: ProjectItem[] = [
  {
    slug: { en: 'code-quality-security', es: 'code-quality-security-en-espanol' },
    title: {
      en: 'Automated Code Quality & Security Reporting System',
      es: 'Sistema de Reportes de Calidad y Seguridad de Código'
    },
    summary: {
      en: 'Automated Jenkins pipeline to retrieve SonarQube/Veracode metrics…',
      es: 'Pipeline en Jenkins para obtener métricas de SonarQube/Veracode…'
    },
    cover: automatedCodeQuality,
    categories: ['dev'],
    tags: ['Jenkins','SonarQube','Veracode','DevSecOps']
  },
  {
    slug: { en: 'ux-experiments-app', es: 'ux-experiments-app-en-espanol' },
    title: { en: 'Experiments on Application Enhancements', es: 'Experimentos de Mejora de Aplicación' },
    summary: { en: 'Multiple UX improvements…', es: 'Múltiples mejoras de UX…' },
    cover: experimentsOnApplications,
    categories: ['dev'],
    tags: ['JavaScript','Elasticsearch','Three.js','UX']
  },
  {
    slug: { en: 'end-to-end-data-science', es: 'end-to-end-data-science-en-espanol' },
    title: { en: 'End-to-End Data Science Case Studies', es: 'Casos de Estudio End-to-End de Data Science' },
    summary: { en: '10 data-driven case studies…', es: '10 casos data-driven…' },
    cover: endToEndDataScience,
    categories: ['ds'],
    tags: ['Python','SQL','Scikit-learn','XGBoost']
  },
  {
    slug: { en: 'interactive-tableau-dashboards', es: 'interactive-tableau-dashboards-en-espanol' },
    title: { en: 'Interactive Tableau Dashboards', es: 'Interactive Tableau Dashboards' },
    summary: { en: 'Interactive Tableau Dashboards…', es: 'Interactive Tableau Dashboards…' },
    cover: interactiveTableau,
    categories: ['ds'],
    tags: ['Tableau', 'Data Visualization', 'Analytics', 'Dashboard Design'],
  },
  {
    slug: { en: 'classification-of-abnormalities-in-ECG', es: 'classification-of-abnormalities-in-ECG-en-espanol' },
    title: { en: 'Classification of Abnormalities in ECG', es: 'Classification of Abnormalities in ECG' },
    summary: { en: 'Classification of Abnormalities in ECG…', es: 'Classification of Abnormalities in ECG…' },
    cover: classificationOfAbnormalities,
    categories: ['ds'],
    tags: ["Python", "IoT", "Machine Learning", "Signal Processing"]
  }
];
