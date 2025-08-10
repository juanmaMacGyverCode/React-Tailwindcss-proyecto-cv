import { publications } from "../data/publications";
import PublicationCard from "../components/PublicationCard";
import { useTranslation } from "react-i18next";

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
      </header>

      {/* Grid responsive; si luego quieres masonry, cambiamos aquí */}
      <div className="grid gap-6 md:gap-8
                      grid-cols-1 md:grid-cols-2">
        {publications.map(p => (
          <PublicationCard key={p.id} pub={p} lang={lang as "es" | "en"} />
        ))}
      </div>
    </section>
  );
}
