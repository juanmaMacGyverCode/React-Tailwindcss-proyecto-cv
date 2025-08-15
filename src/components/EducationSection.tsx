import { education } from "../data/education";
import { useTranslation } from "react-i18next";

export default function EducationSection() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language.startsWith("es") ? "es" : "en") as "en" | "es";

  return (
    <section id="education" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">{t("Education")}</h2>

        {/* Timeline */}
        <div className="relative pl-6">
          {/* Línea vertical */}
          <div className="absolute left-0 top-0 h-full w-px bg-blue-500/60" />
          <ul className="space-y-10">
            {education.map((item) => (
              <li key={item.id} className="relative">
                {/* Badge de periodo */}
                <div className="absolute -left-[1.15rem]">
                  <span className="inline-block bg-blue-600 text-[var(--text)] text-xs font-semibold rounded-md px-3 py-2 shadow">
                    {item.period[lang]}
                  </span>
                </div>

                <article className="bg-[var(--card)]/80 rounded-2xl ring-1 ring-white/5 shadow p-6 md:p-8">
                  <h3 className="text-2xl font-semibold leading-snug">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-3 text-blue-300 font-medium">
                    {item.institution[lang]}
                  </p>
                  <p className="mt-3 text-[color:var(--muted)]">{item.description[lang]}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.skills.map((s) => (
                      <span
                        key={s}
                        className="text-sm bg-blue-600/20 text-blue-200 rounded-full px-3 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
