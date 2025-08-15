import { Link } from "react-router-dom";
import type { Publication } from "../data/publications";
import { useTranslation } from "react-i18next";

type Props = { pub: Publication; lang?: "es" | "en" };

export default function PublicationCard({ pub, lang }: Props) {
  const { i18n, t } = useTranslation();
  const current = lang ?? (i18n.language.startsWith("es") ? "es" : "en");

  return (
    <article className="group relative rounded-2xl bg-[var(--card)]/80 ring-1 ring-white/10 shadow
                        overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lg">
      {/* esquina decorativa */}
      <div className="absolute right-0 top-0 h-10 w-10 bg-blue-600 rounded-bl-2xl" />

      <div className="p-6 space-y-3">
        <div className="flex items-center gap-2 text-blue-300">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900/60">
            📄
          </span>
          <h3 className="text-2xl font-semibold text-[var(--text)] leading-snug">
            {pub.title[current]}
          </h3>
        </div>

        <p className="italic text-[color:var(--muted)]">{pub.authors}</p>
        <p className="text-[color:var(--muted)]">{pub.venue}</p>

        <div className="flex items-center gap-2 text-sm text-blue-200">
          <span>📅</span>
          <span>
            {new Date(pub.date + "-01").toLocaleString(current, {
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {pub.tags.map(tag => (
            <span key={tag}
              className="text-xs bg-[var(--card)] text-blue-100 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-200/90 leading-relaxed line-clamp-4">
          {pub.summary[current]}
        </p>

        <div className="pt-2 flex gap-3">
          {pub.links?.view && (
            <Link
              to={pub.links.view[current]}
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-[var(--text)] hover:bg-blue-500"
            >
              🔎 {t("View", "View")}
            </Link>
          )}
          {pub.links?.pdf && (
            <a
              href={pub.links.pdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--card)] px-3 py-1.5 text-sm font-medium text-blue-100
                         hover:bg-[var(--card)] focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              📄 PDF
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
