import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../components/Breadcrumbs';
import { projects } from '../data/projects';
import { localizedRoutes } from '../routes';

type Lang = keyof typeof localizedRoutes;

export default function Projects() {
  const { t } = useTranslation();
  const { lang = 'es' } = useParams<{ lang: Lang }>();
  const routeProjects = localizedRoutes[lang].projects;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
        <Breadcrumbs />
      <header className="mx-auto max-w-6xl px-4 pt-10 pb-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">{t('projects.title')}</h1>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-indigo-400/60" />
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        {/* Grid: 1 / 2 / 3 / 4 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map(p => {
            const href = `/${lang}/${routeProjects}/${p.slug[lang as Lang]}`;
            return (
              <article
                key={p.slug.en} // key estable
                className="bg-gray-800 rounded-xl overflow-hidden shadow ring-1 ring-white/5 flex flex-col"
              >
                <Link to={href} className="block">
                  <img
                    src={p.cover}
                    alt={p.title[lang as Lang]}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                </Link>
                <div className="p-5 flex-1 flex flex-col gap-3">
                  <h3 className="text-lg font-semibold leading-tight line-clamp-2">
                    <Link to={href} className="hover:underline">
                      {p.title[lang as Lang]}
                    </Link>
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-3">
                    {p.summary[lang as Lang]}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {p.tags.slice(0, 6).map(tag => (
                      <span
                        key={`${p.slug.en}-${tag}`}
                        className="text-xs bg-gray-700 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Breadcrumbs />
    </div>
  );
}
