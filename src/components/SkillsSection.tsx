import { skillsCategories } from "../data/skills";
import { useTranslation } from "react-i18next";

const levelClasses: Record<string, string> = {
  proficient:   "from-emerald-500/20 to-emerald-400/10 text-emerald-200 ring-emerald-400/20",
  intermediate: "from-sky-500/20     to-sky-400/10     text-sky-200     ring-sky-400/20",
  exploring:    "from-violet-500/20  to-violet-400/10  text-violet-200  ring-violet-400/20",
  familiar:     "from-amber-500/20   to-amber-400/10   text-amber-200   ring-amber-400/20",
};

function SkillChip({ label, level, prefix, icon }: { label:string; level:keyof typeof levelClasses; prefix?:string; icon?:string }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm ring-1 bg-gradient-to-br ${levelClasses[level]}`}>
      {prefix && <span className="text-[10px] font-bold rounded px-1.5 py-0.5 bg-black/30 ring-1 ring-white/10">{prefix}</span>}
      {icon && <span aria-hidden>{icon}</span>}
      {label}
    </span>
  );
}

export default function SkillsSection() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language.startsWith("es") ? "es" : "en") as "en" | "es";

  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">{t("My Skills")}</h2>

        {/* Leyenda */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-10">
          <LegendDot color="bg-emerald-400" label={t("Proficient")} />
          <LegendDot color="bg-sky-400" label={t("Intermediate")} />
          <LegendDot color="bg-violet-400" label={t("Exploring")} />
          <LegendDot color="bg-amber-400" label={t("Familiar")} />
        </div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillsCategories.map(cat => (
            <section key={cat.id} className="rounded-3xl bg-[var(--card)]/70 ring-1 ring-white/5 shadow p-6 md:p-8">
              <header className="flex items-center gap-4 mb-6">
                <div className="grid place-items-center h-12 w-12 rounded-2xl bg-blue-600/20 text-xl">{cat.icon ?? "🧩"}</div>
                <h3 className="text-2xl font-semibold">{cat.title[lang]}</h3>
              </header>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.items.map((s, i) => (
                  <SkillChip key={`${cat.id}-${i}`} label={s.label} level={s.level} prefix={s.prefix} icon={s.icon} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[color:var(--muted)]">
      <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
      {label}
    </span>
  );
}
