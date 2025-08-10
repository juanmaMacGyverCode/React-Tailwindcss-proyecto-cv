import { Link } from "react-router-dom";
import { publications } from "../data/publications";
import PublicationCard from "../components/PublicationCard";
import { useTranslation } from "react-i18next";
import { localizedRoutes } from "../routes";

export default function PublicationsSection() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("es") ? "es" : "en";

  return (
    <section id="publications" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <header className="mb-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          {t("Publications", "Publications")}
          <span className="ml-2 text-blue-400 text-2xl align-top">
            {publications.length}
          </span>
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 bg-blue-600 rounded-full" />

        {/* Enlace a la página completa */}
        <div className="mt-4">
          <Link
            to={`/${lang}/${localizedRoutes[lang].publications}`}
            className="inline-block text-blue-400 hover:text-blue-300 underline underline-offset-2"
          >
            {lang === "es" ? "Ver todas las publicaciones" : "View all publications"}
          </Link>
        </div>
      </header>

      {/* Grid responsive */}
      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
        {publications.slice(0, 4).map(p => ( // mostramos solo algunas aquí
          <PublicationCard key={p.id} pub={p} lang={lang as "es" | "en"} />
        ))}
      </div>
    </section>
  );
}
