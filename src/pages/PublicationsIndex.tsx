import Masonry from "react-masonry-css";
import { publications } from "../data/publications";
import PublicationCard from "../components/PublicationCard";
import Breadcrumbs from "../components/Breadcrumbs";
import { useTranslation } from "react-i18next";

export default function PublicationsIndex() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("es") ? "es" : "en";

  // columnas por ancho
  const breakpoints = { default: 2, 1024: 2, 640: 1 };

  return (
    <div className="min-h-screen w-full pt-6 px-4">
      <Breadcrumbs />
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
          {lang === "es" ? "Publicaciones" : "Publications"}
        </h1>

        {/* Contenedor Masonry */}
        <Masonry
          breakpointCols={breakpoints}
          className="flex -ml-6"           // wrapper
          columnClassName="pl-6 space-y-6" // columnas con separación
        >
          {publications.map((p) => (
            <PublicationCard key={p.id} pub={p} lang={lang} />
          ))}
        </Masonry>
      </div>
    </div>
  );
}
