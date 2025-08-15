import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/*import { projects, ProjectCategory } from '../data/projects';*/
import { projects } from '../data/projects';
import type { ProjectCategory } from '../data/projects';
import { localizedRoutes } from '../routes';

type Lang = keyof typeof localizedRoutes;
type Filter = 'all' | ProjectCategory;

type Props = {
  title?: string;
  initialFilter?: Filter;       // 'all' | 'dev' | 'ds'
  slidesPerView?: number;
  autoplayMs?: number | false;
  showFilters?: boolean;
};

export default function MyProjectsCarousel({
  title,
  initialFilter = 'all',
  slidesPerView = 1.1,
  autoplayMs = 4500,
  showFilters = true,
}: Props) {
  const { t } = useTranslation();
  const { lang = 'es' } = useParams<{ lang: Lang }>();
  const [filter, setFilter] = useState<Filter>(initialFilter);

  const items = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter(p => p.categories.includes(filter));
  }, [filter]);

  const routeProjects = localizedRoutes[lang].projects;

  return (
    <section className="mx-auto max-w-6xl px-4">
      {/* Título */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">{title ?? t('projects.title')}</h2>
        <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-indigo-400/60" />
      </div>

      {/* Filtros */}
      {showFilters && (
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          {(['all','dev','ds'] as Filter[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-xl px-5 py-2 text-sm font-medium transition
                ${filter === f ? 'bg-[var(--card)] text-[var(--text)] shadow ring-1 ring-white/10' : 'bg-[var(--card)]/60 text-[color:var(--muted)] hover:bg-[var(--card)]'}`}
              aria-pressed={filter === f}
            >
              {t(`projects.filters.${f}`)}
            </button>
          ))}
        </div>
      )}

        <div className="mt-4 text-right">
          <Link
            to={`/${lang}/${localizedRoutes[lang].projects}`}
            className="text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
          >
            {t('projects.view')} {/* En tu JSON: "projects": { "view": "Ver todos" } */}
          </Link>
        </div>

      {/* Carrusel */}
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={autoplayMs ? { delay: autoplayMs, disableOnInteraction: false } : false}
        spaceBetween={16}
        slidesPerView={slidesPerView}
        breakpoints={{
          640:  { slidesPerView: 1.4, spaceBetween: 16 },
          768:  { slidesPerView: 2,   spaceBetween: 20 },
          1024: { slidesPerView: 3,   spaceBetween: 24 },
          1280: { slidesPerView: 4,   spaceBetween: 24 },
        }}
        className="!pb-10"
      >
        {items.map(p => {
          const href = `/${lang}/${routeProjects}/${p.slug[lang as Lang]}`;
          return (
            <SwiperSlide key={p.slug.en}>
              <article className="bg-[var(--card)] rounded-xl overflow-hidden shadow ring-1 ring-white/5 h-full flex flex-col">
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
                  <p className="text-[color:var(--muted)] text-sm line-clamp-3">{p.summary[lang as Lang]}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {p.tags.slice(0,4).map(tag => (
                      <span key={`${p.slug.en}-${tag}`} className="text-xs bg-[var(--card)] px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Ver todos */}
      <div className="mt-6 text-right">
        <Link
          to={`/${lang}/${routeProjects}`}
          className="text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
        >
          {t('projects.view')}
        </Link>
      </div>
    </section>
  );
}
