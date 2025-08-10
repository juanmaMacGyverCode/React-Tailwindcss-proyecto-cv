import { useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { localizedRoutes } from '../routes';

type Filter = 'all' | 'dev' | 'ds';
const FILTERS: readonly Filter[] = ['all', 'dev', 'ds'] as const;

type Lang = keyof typeof localizedRoutes; // 'en' | 'es'

export default function MyProjectsSection() {
  const { t } = useTranslation();
  /*const { lang = 'en' } = useParams();
  const r = localizedRoutes[lang as keyof typeof localizedRoutes];*/
  const { lang } = useParams<{ lang?: Lang }>();
  const L: Lang = (lang ?? 'es') as Lang;    // estrechamos
  const r = localizedRoutes[L];              // rutas tipadas

  const [filter, setFilter] = useState<Filter>('all');
  const trackRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => (
    filter === 'all' ? projects : projects.filter(p => p.categories.includes(filter))
  ), [filter]);

  const scrollBy = (dx: number) => trackRef.current?.scrollBy({ left: dx, behavior: 'smooth' });

  return (
    <section className="bg-gray-900 text-white py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center">{t('projects.title')}</h2>
        <div className="h-1 w-20 bg-indigo-400 mx-auto mt-4 rounded-full" />

        {/* filtros */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {FILTERS.map((key) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 rounded-xl ${filter === key ? 'bg-gray-800' : 'bg-gray-900/60'}`}
              aria-pressed={filter === key}
            >
              {t(`projects.filters.${key}`)}
            </button>
          ))}
        </div>

        <div className="mt-4 text-right">
          <Link
            to={`/${L}/${r.projects}`}
            className="text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
          >
            {t('projects.view')}
          </Link>
        </div>
        
        {/* slider */}
        <div className="relative mt-10">
          <button
            type="button"
            aria-label="prev"
            onClick={() => scrollBy(-420)}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-20
                       bg-black/60 hover:bg-black/80 text-white
                       w-12 h-12 rounded-full flex items-center justify-center
                       text-xl transition-all duration-300 shadow-lg"
          >
            &lt;
          </button>

          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-10 py-2
                       [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            <style>{`div::-webkit-scrollbar{display:none}`}</style>

            {filtered.map(p => (
              <article 
                key={p.slug[lang as 'en' | 'es']} 
                className="snap-center bg-gray-800 rounded-xl overflow-hidden shadow ring-1 ring-white/5 w-[340px] shrink-0"
              >
                <img src={p.cover} alt={p.title[lang as 'en' | 'es'] } className="h-48 w-full object-cover" />
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-semibold leading-tight">{p.title[lang as 'en' | 'es']}</h3>
                  <p className="text-gray-300 text-sm line-clamp-3">{p.summary[lang as 'en' | 'es']}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.tags.slice(0,4).map(tag => (
                      <span key={tag} className="text-xs bg-gray-700 px-2 py-1 rounded-md">{tag}</span>
                    ))}
                  </div>
                  <div className="pt-3">
                    <Link
                      to={`/${lang}/${r.projects}/${p.slug[lang as 'en' | 'es']}`}
                      className="inline-block text-indigo-300 hover:text-indigo-200 underline underline-offset-4"
                    >
                      {t('projects.view')}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="next"
            onClick={() => scrollBy(420)}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-20
                       bg-black/60 hover:bg-black/80 text-white
                       w-12 h-12 rounded-full flex items-center justify-center
                       text-xl transition-all duration-300 shadow-lg"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
