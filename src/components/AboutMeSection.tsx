import { useTranslation } from 'react-i18next';

import profilePic from '../assets/images/recursos/profileVertical.jpg';

export default function AboutMeSection() {

    const { t } = useTranslation();

    const skills = [
        {
            icon: "💻",
            title: t("skills.software.title"),
            description: t("skills.software.description"),
        },
        {
            icon: "📊",
            title: t("skills.data.title"),
            description: t("skills.data.description"),
        },
        {
            icon: "🌐",
            title: t("skills.fullstack.title"),
            description: t("skills.fullstack.description"),
        },
        {
            icon: "📈",
            title: t("skills.analytics.title"),
            description: t("skills.analytics.description"),
        }
    ];

    return (
        <section className="bg-gray-900 text-white px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                    {t("About Me")}
                    <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 rounded"></div>
                </h2>

                <div className="flex flex-col md:flex-row items-start gap-10">
                    <div className="md:w-1/3 shadow-xl rounded-xl overflow-hidden">
                        <img src={profilePic} alt="About" className="w-full h-auto object-cover" />
                    </div>

                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold text-blue-500 underline underline-offset-4">
                            {t("My Journey")}
                        </h3>
                        <p className="mt-4 text-gray-300 leading-relaxed">
                          {t("I am a passionate Software Development Engineer with over 4 years of experience and a growing expertise in Data Science & Machine Learning. My journey in tech began with curiosity about how software could solve complex problems, leading me to pursue a career where I've developed enterprise applications that deliver real business value.")}
                        </p>
                        <p className="mt-4 text-gray-300 leading-relaxed">
                          {t("Currently, I'm expanding my horizons by pursuing an MS in Computer Science with a specialization in Data Science & Machine Learning. I'm combining my engineering background with cutting-edge data science techniques to build intelligent and data-driven solutions.")}
                        </p>
                        <p className="mt-4 text-gray-300 leading-relaxed">
                          {t("Beyond work, I love problem solving, participating in coding challenges and contributing to AI projects.")}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            {skills.map((skill, i) => (
                                <div key={i} className="flex items-start gap-4">
                                  <div className="text-3xl">{skill.icon}</div>
                                  <div>
                                    <h4 className="font-bold">{skill.title}</h4>
                                    <p className="text-gray-400 text-sm">{skill.description}</p>
                                  </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
