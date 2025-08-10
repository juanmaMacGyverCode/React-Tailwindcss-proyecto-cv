import publication1 from '../assets/documents/publications/publication-1.pdf';
import publication2 from '../assets/documents/publications/publication-2.pdf';

export type Publication = {
  id: string;
  slug: { es: string; en: string };
  title: { es: string; en: string };
  authors: string;
  venue: string;
  date: string;
  tags: string[];
  summary: { es: string; en: string };
  links?: { 
    view?: { es: string; en: string }; 
    pdf?: string 
  };
};

export const publications: Publication[] = [
  {
    id: "lipothymia-2019",
    slug: {
      es: "analisis-de-la-lipotimia-del-conductor",
      en: "analysis-of-drivers-lipothymia"
    },
    title: {
      en: "Analysis Of Driver's Lipothymia",
      es: "Análisis de la lipotimia del conductor",
    },
    authors: "Aravintha Prasath V, et al.",
    venue: "International Journal of Engineering and Advanced Technology",
    date: "2019-07",
    tags: ["IoT", "EEG", "Safety"],
    summary: {
      en: "Developed a drowsiness monitoring system using EEG sensors …",
      es: "Sistema de monitorización de somnolencia con sensores EEG …",
    },
    links: { 
      view: { 
        es: "/es/publicaciones/analisis-de-la-lipotimia-del-conductor", 
        en: "/en/publications/analysis-of-drivers-lipothymia" 
      }, 
      pdf: publication1 
    }
  },
  {
    id: "ecg-msvm-2021",
    slug: {
      es: "clasificacion-de-anomalias-en-ecg-con-machine-learning",
      en: "classification-of-abnormalities-in-ecg-using-machine-learning"
    },
    title: {
      en: "Classification of Abnormalities in ECG using Machine Learning",
      es: "Clasificación de anomalías en ECG con Machine Learning",
    },
    authors: "Aravintha Prasath V, et al.",
    venue: "Journal of Healthcare Engineering",
    date: "2021-05",
    tags: ["IoT", "ECG", "MSVM"],
    summary: {
      en: "Proposed an IoT-based health monitoring system for ambulatory ECG …",
      es: "Sistema IoT de monitorización de ECG ambulatorio …",
    },
    links: { 
      view: { 
        es: "/es/publicaciones/clasificacion-de-anomalias-en-ecg-con-machine-learning", 
        en: "/en/publications/classification-of-abnormalities-in-ecg-using-machine-learning" 
      }, 
      pdf: publication2 
    }
  }
];
