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
        <section className="bg-[var(--card)] text-[var(--text)] px-6 py-16">
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
                        <p className="mt-4 text-[color:var(--muted)] leading-relaxed">
                          {t("I am a Computer Engineering student, Software Developer, and Artificial Intelligence enthusiast, with a solid foundation in web development, object-oriented programming, and process automation. Over more than 4 years of professional experience, I have worked on the creation and optimization of enterprise applications, Prestashop and WordPress websites, and custom projects integrating APIs, databases, and scalable solutions.")}
                        </p>
                        <p className="mt-4 text-[color:var(--muted)] leading-relaxed">
                          {t("My journey began with a genuine curiosity to understand how technology could solve complex problems and improve people’s lives. This drive has led me to delve into areas such as Data Science, Machine Learning, and the development of consultative applications with LLMs using tools like LangChain and the OpenAI API. I am currently expanding my horizons as a Computer Engineering student, combining practical experience with academic knowledge in AI, algorithms, and advanced data structures.")}
                        </p>
                        <p className="mt-4 text-[color:var(--muted)] leading-relaxed">
                          {t("Beyond the technical side, I am passionate about continuous learning, problem-solving, and the creative application of science and technology. I enjoy exploring fields such as astrophysics, philosophy, and essay writing, always seeking to unite logical thinking with creative vision. In my free time, I take part in coding challenges, develop personal projects, and experiment with AI, while also pursuing my other passions such as theater and language learning.")}
                        </p>
                        <p className="mt-4 text-[color:var(--muted)] leading-relaxed">
                          {t("My goal is to build intelligent, human, and sustainable solutions, and to leave a lasting mark both in the technological and personal spheres, combining technical rigor with an inspiring and empathetic vision.")}
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
