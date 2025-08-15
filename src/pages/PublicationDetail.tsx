// src/pages/PublicationDetail.tsx
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { publications } from "../data/publications";
import Breadcrumbs from "../components/Breadcrumbs";

export default function PublicationDetail() {
  const { t } = useTranslation();
  const { lang = "es", slug = "" } = useParams<{ lang: "es" | "en"; slug: string }>();
  const current = lang === "en" ? "en" : "es";

  // Busca por slug del idioma activo; si no, intenta en cualquiera (fallback útil)
  const pub =
    publications.find(p => p.slug[current] === slug) ||
    publications.find(p => Object.values(p.slug).includes(slug));

  if (!pub) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center text-[var(--text)]">
        {t("Publication not found", "Publication not found")}
      </div>
    );
  }

  const title = pub.title[current];
  const summary = pub.summary[current];
  const sectionPath = current === "es" ? `/${current}/publicaciones` : `/${current}/publications`;

  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-8 px-4">
      <Breadcrumbs />
      <div className="max-w-5xl w-full">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-[var(--text)]">{title}</h1>
          <Link
            to={sectionPath}
            className="text-sm bg-[var(--card)] hover:bg-[var(--card)] text-blue-100 px-3 py-1.5 rounded-md"
          >
            ← {current === "es" ? "Volver" : "Back"}
          </Link>
        </div>

        <p className="italic text-[color:var(--muted)]">{pub.authors}</p>
        <p className="text-[color:var(--muted)]">{pub.venue}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {pub.tags.map(tag => (
            <span key={tag} className="text-xs bg-[var(--card)] text-blue-100 px-2 py-1 rounded-md">{tag}</span>
          ))}
        </div>

        <p className="mt-4 text-gray-200/90">{summary}</p>

        {pub.links?.pdf && (
          <>
            <div className="mt-6">
              <a
                href={pub.links.pdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-[var(--text)] hover:bg-blue-500"
              >
                📄 {current === "es" ? "Descargar PDF" : "Download PDF"}
              </a>
            </div>

            {/* PDF embebido */}
            <div className="mt-6 w-full min-h-[75vh] bg-transparent rounded-lg overflow-hidden ring-1 ring-white/10">
              <iframe
                src={pub.links.pdf}
                title={`${title} PDF`}
                className="w-full h-[80vh] border-0"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
