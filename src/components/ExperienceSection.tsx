import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

import eskoLogo from '../assets/images/companies/esko-company.svg';

type ExperienceItem = {
  type: 'job' | 'internship';
  logoKey?: 'esko';
  title: string;
  company: string;
  dates: string;
  location: string;
  points: string[];
  tech: string[];
};

const LOGOS: Record<string, string> = {
  esko: eskoLogo,
};

export default function ExperienceSection() {

    const { t } = useTranslation();
    
    const experiences = t('experience.items', { returnObjects: true }) as ExperienceItem[];
    const sectionTitle = t('experience.title');

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">{sectionTitle}</h2>
        <div className="relative border-l-2 border-blue-500 pl-8 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
                <div className="absolute -left-[3.2rem] top-6 bg-blue-600 p-2 rounded-full z-10">
                  {exp.type === 'job' ? (
                    <BriefcaseIcon className="h-5 w-5 text-white" />
                  ) : (
                    <AcademicCapIcon className="h-5 w-5 text-white" />
                  )}
                </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                    {exp.logoKey && (
                      <div className="bg-white rounded p-1 flex items-center justify-center">
                        <img src={LOGOS[exp.logoKey]} alt={exp.company} className="w-12 h-12 object-contain" />
                      </div>
                    )}
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                    <div className="flex items-center text-sm text-gray-400 gap-4">
                      <span>📅 {exp.dates}</span>
                      <span>📍 {exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="bg-gray-700 px-3 py-1 rounded-md text-sm">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
