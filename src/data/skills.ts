export type LangText = { en: string; es: string };
export type SkillLevel = 'proficient' | 'intermediate' | 'exploring' | 'familiar';

export type SkillItem = {
  label: string;        // texto del chip
  level: SkillLevel;
  prefix?: string;      // etiqueta pequeña (p.ej. "AWS")
  icon?: string;        // emoji opcional
};

export type SkillCategory = {
  id: string;
  title: LangText;
  icon?: string;        // emoji grande del bloque
  items: SkillItem[];
};

export const skillsCategories: SkillCategory[] = [
  {
    id: 'core',
    title: { en: 'Languages & Core Tech', es: 'Lenguajes y Core' },
    icon: '💻',
    items: [
      { label: 'Python', level: 'proficient', icon: '⌨️' },
      { label: 'SQL', level: 'intermediate', icon: '🗄️' },
      { label: 'Java', level: 'proficient', icon: '☕' },
      { label: 'JavaScript', level: 'proficient', icon: '🟨' },
      { label: 'HTML', level: 'proficient', icon: '📄' },
      { label: 'CSS', level: 'proficient', icon: '🎨' },
      { label: 'Elasticsearch', level: 'familiar', icon: '🔎' },
      { label: 'C', level: 'familiar', icon: '🧰' },
    ],
  },
  {
    id: 'frameworks',
    title: { en: 'Frameworks & Architecture', es: 'Frameworks y Arquitectura' },
    icon: '🧱',
    items: [
      { label: 'NumPy', level: 'intermediate', icon: '➗' },
      { label: 'Pandas', level: 'intermediate', icon: '🐼' },
      { label: 'scikit‑learn', level: 'intermediate', icon: '📐' },
      { label: 'XGBoost', level: 'exploring', icon: '⚡' },
      { label: 'Spring Boot', level: 'proficient', icon: '🌱' },
      { label: 'Webpack', level: 'intermediate', icon: '📦' },
      { label: 'Three.js', level: 'exploring', icon: '🧊' },
      { label: 'JUnit', level: 'familiar', icon: '🧪' },
      { label: 'REST APIs', level: 'proficient', icon: '🔗' },
      { label: 'Microservices', level: 'intermediate', icon: '🧩' },
    ],
  },
  {
    id: 'data',
    title: { en: 'Data Science & Analytics', es: 'Data Science y Analítica' },
    icon: '📈',
    items: [
      { label: 'Machine Learning', level: 'intermediate', icon: '🤖' },
      { label: 'Linear Regression', level: 'proficient', icon: '📊' },
      { label: 'Logistic Regression', level: 'proficient', icon: '📉' },
      { label: 'K‑means', level: 'intermediate', icon: '🧮' },
      { label: 'Decision Trees', level: 'exploring', icon: '🌳' },
      { label: 'Statistical Analysis', level: 'intermediate', icon: '📈' },
      { label: 'Random Forest', level: 'exploring', icon: '🌲' },
      { label: 'A/B Testing', level: 'intermediate', icon: '🅰️/🅱️' },
      { label: 'SVM', level: 'familiar', icon: '📐' },
      { label: 'Feature Engineering', level: 'intermediate', icon: '⚙️' },
      { label: 'Time Series', level: 'familiar', icon: '⏱️' },
      { label: 'Kibana', level: 'proficient', icon: '📟' },
    ],
  },
  {
    id: 'devops',
    title: { en: 'DevOps & Tools', es: 'DevOps y Herramientas' },
    icon: '🛠️',
    items: [
      { label: 'Docker', level: 'intermediate', icon: '🐳' },
      { label: 'GitHub', level: 'proficient', icon: '🐙' },
      { label: 'Perforce', level: 'familiar', icon: '🧭' },
      { label: 'Jenkins', level: 'familiar', icon: '🔧' },
      { label: 'AWS Platform', level: 'intermediate', prefix: 'AWS', icon: '☁️' },
      { label: 'EC2 / ECS / ECR', level: 'intermediate', prefix: 'AWS' },
      { label: 'SQS / Kinesis', level: 'familiar', prefix: 'AWS' },
      { label: 'Lambda', level: 'intermediate', prefix: 'AWS' },
      { label: 'RDS / DynamoDB', level: 'familiar', prefix: 'AWS' },
      { label: 'Elastic Search', level: 'familiar', prefix: 'AWS' },
      { label: 'CloudWatch', level: 'familiar', prefix: 'AWS' },
      { label: 'VS Code', level: 'proficient', icon: '🧰' },
      { label: 'Jupyter Notebooks', level: 'proficient', icon: '📓' },
      { label: 'Jira', level: 'intermediate', icon: '📌' },
      { label: 'Postman', level: 'proficient', icon: '📮' },
      { label: 'Confluence', level: 'intermediate', icon: '📚' },
    ],
  },
];
