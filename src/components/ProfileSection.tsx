import { useTranslation } from 'react-i18next';

import profilePic from '../assets/images/recursos/profile.jpg';

export default function ProfileSection() {

  const { t } = useTranslation();

  return (
    <section className="text-[var(--text)] min-h-screen flex items-center justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 px-6 py-12">
            <div className="flex-2 text-center md:text-left">
                <p className="text-blue-400 text-lg">{t("Hello, Im")}</p>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
                    {t('Juan Manuel López Durán')}
                </h1>
                <h2 className="text-xl mt-2 font-semibold text-gray-800">
                    {t('Full Stack Developer & Data Science Enthusiast')}
                </h2>
                <p className="text-gray-600 mt-4 max-w-md">
                    {t('Transforming ideas into applications, powered by data and artificial intelligence')}
                </p>

                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-gray-800 px-6 py-2 rounded-md font-semibold">
                        {t('Get in Touch')}
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 hover:border-gray-300 text-gray-800 px-6 py-2 rounded-md font-semibold">
                        {t('View My Work')}
                    </button>
                </div>

                <div className="mt-6 flex justify-center md:justify-start gap-4">
                    <a href="https://www.linkedin.com/in/juan-manuel-l%C3%B3pez-dur%C3%A1n-a00161168/" className="text-blue-600 hover:text-[var(--text)]">
                        <i className="fab fa-linkedin fa-lg"></i>
                    </a>
                    <a href="https://github.com/juanmaMacGyverCode" className="text-blue-600 hover:text-[var(--text)]">
                        <i className="fab fa-github fa-lg"></i>
                    </a>
                </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
                <div className="rounded-full border-4 border-blue-500 p-1 shadow-lg">
                    <img src={profilePic} alt="Profile" className="rounded-full w-70 h-70 object-cover" />
                </div>
            </div>
        </div>
    </section>
  );
}
