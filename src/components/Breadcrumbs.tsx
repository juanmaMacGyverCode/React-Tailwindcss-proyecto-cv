import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { localizedRoutes } from '../routes';

type LangKey = keyof typeof localizedRoutes;

function getLangFromPathname(pathname: string): LangKey | null {
  const parts = pathname.split('/').filter(Boolean);
  const maybe = parts[0] as LangKey | undefined;
  return maybe && localizedRoutes[maybe] ? maybe : null;
}

function slugToRouteKey(lang: LangKey, slug: string): string | null {
  const entries = Object.entries(localizedRoutes[lang]) as [string, string][];
  const hit = entries.find(([, value]) => value === slug);
  return hit ? hit[0] : null; // e.g., "about", "contact", "resume"...
}

// añade esta función encima del componente:
const labelForRouteKey = (key: string, t: any) => {
  switch (key) {
    case 'home':     return t('home');
    case 'about':    return t('about');            // NO 'about_me'
    case 'contact':  return t('contact');
    case 'schedule': return t('schedule');
    case 'resume':   return t('resume');
    /*case 'projects': return t('projects.title');*/   // 👈 evita el objeto
    case 'projects': return t('routes.projects');
    default:         return key;
  }
};

export default function Breadcrumbs() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  // /:lang/...
  const lang = getLangFromPathname(pathname) ?? (i18n.resolvedLanguage || 'en').slice(0, 2) as LangKey;

  const parts = pathname.split('/').filter(Boolean);
  const rest = lang ? parts.slice(1) : parts; // segmentos después del lang

  // Construye migas: Home siempre primero
  const crumbs: Array<{ href: string; label: string; isLast: boolean }> = [];

  // Home
  const homeHref = lang ? `/${lang}` : '/';
  crumbs.push({
    href: homeHref,
    label: t('home'),
    isLast: rest.length === 0,
  });

  // Resto de segmentos
  let acc: string[] = lang ? [lang] : [];
  rest.forEach((seg, idx) => {
    acc.push(seg);

    const key = slugToRouteKey(lang, seg);
    const label = key
      ? labelForRouteKey(key, t)
      : decodeURIComponent(seg).replace(/-/g, ' ');
    const href = `/${acc.join('/')}`;

    crumbs.push({
      href,
      label,
      isLast: idx === rest.length - 1,
    });
  });

  return (
    <nav className="mx-auto max-w-6xl px-4 py-4" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {crumbs.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {c.isLast ? (
              <span className="text-gray-300">{c.label}</span>
            ) : (
              <Link to={c.href} className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">
                {c.label}
              </Link>
            )}
            {i < crumbs.length - 1 && <span className="text-gray-500">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
