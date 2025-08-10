import { Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { metaConfig } from './metaConfig';
import { projects } from './data/projects';

/* Páginas */
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ScheduleMeeting from './pages/ScheduleMeeting';
import ResumePreview from './pages/ResumePreview';
import ProjectDetail from './pages/ProjectDetail';
import Projects from './pages/Projects';
import PublicationDetail from "./pages/PublicationDetail";

/* Rutas localizadas */
import { localizedRoutes } from './routes';

type Lang = keyof typeof localizedRoutes;

const localeMap = {
  es: 'es_ES',
  en: 'en_US',
} as const;

function useCanonicalAndHreflang(lang: Lang, pathname: string) {
  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    // Canonical
    let canonicalTag = document.querySelector("link[rel='canonical']");
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", `${baseUrl}${pathname}`);

    // Limpiar hreflang anteriores
    document.querySelectorAll("link[rel='alternate']").forEach(el => el.remove());

    // Partes de la ruta sin el lang (["proyectos","mi-slug"] por ejemplo)
    const parts = pathname.split("/").filter(Boolean).slice(1);

    // Clave lógica de la primera parte (home/about/contact/projects/publications/…)
    let key: keyof (typeof localizedRoutes)[Lang] | null = null;
    if (parts.length) {
      const match = Object.entries(localizedRoutes[lang]).find(([, slug]) => slug === parts[0]);
      key = (match?.[0] as any) ?? null;
    }

    // Hreflang por idioma
    (Object.keys(localizedRoutes) as Lang[]).forEach(otherLang => {
      let otherPath = `/${otherLang}`;

      if (key === 'projects') {
        // /:lang/:projects/:projectSlug?
        const currentSlug = parts[1];
        if (currentSlug) {
          const proj = projects.find(p =>
            p.slug[lang] === currentSlug || p.slug[otherLang] === currentSlug
          );
          const targetSlug = proj ? proj.slug[otherLang] : currentSlug;
          otherPath += `/${localizedRoutes[otherLang].projects}/${targetSlug}`;
        } else {
          otherPath += `/${localizedRoutes[otherLang].projects}`;
        }
      } else if (key === 'publications') {
        // /:lang/:publications/:slug
        const currentSlug = parts[1];
        if (currentSlug) {
          // Si tus publicaciones están en un array similar a 'projects',
          // aquí podrías mapear por slug en ambos idiomas, como hicimos arriba.
          // De momento, usamos el mismo slug como fallback.
          otherPath += `/${localizedRoutes[otherLang].publications}/${currentSlug}`;
        } else {
          otherPath += `/${localizedRoutes[otherLang].publications}`;
        }
      } else if (key) {
        const slug = localizedRoutes[otherLang][key];
        otherPath += `/${slug}`;
      }

      const altTag = document.createElement("link");
      altTag.setAttribute("rel", "alternate");
      altTag.setAttribute("hrefLang", otherLang);
      altTag.setAttribute("href", `${baseUrl}${otherPath}`);
      document.head.appendChild(altTag);
    });
  }, [lang, pathname]);
}

function useMetaTags(lang: Lang, pathname: string) {
  useEffect(() => {
    const parts = pathname.split('/').filter(Boolean).slice(1); // quitamos lang
    const key =
      parts.length
        ? (Object.entries(localizedRoutes[lang]).find(([, slug]) => slug === parts[0])?.[0] ?? 'home')
        : 'home';

    const meta = metaConfig[key as keyof typeof metaConfig];
    if (!meta) return;

    const title = meta.title[lang] || import.meta.env.VITE_SITE_NAME;
    const description = meta.description[lang] || import.meta.env.VITE_DEFAULT_DESCRIPTION;
    const imageUrl = `${import.meta.env.VITE_BASE_URL}${meta.image}`;
    const pageUrl = `${import.meta.env.VITE_BASE_URL}${pathname}`;

    document.title = title;

    // Meta description
    let descTag = document.querySelector("meta[name='description']");
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", description);

    // OpenGraph básico + localización
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:url', content: pageUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: localeMap[lang] },
    ];

    // og:locale:alternate para los otros idiomas
    (Object.keys(localizedRoutes) as Lang[])
      .filter(l => l !== lang)
      .forEach(otherLang => {
        ogTags.push({
          property: 'og:locale:alternate',
          content: localeMap[otherLang],
        });
      });

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property='${property}']`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Twitter Card
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
    ];
    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name='${name}']`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
  }, [lang, pathname]);
}

export default function LocalizedRoutes() {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const supportedLangs = Object.keys(localizedRoutes);
    if (lang && supportedLangs.includes(lang)) {
      i18n.changeLanguage(lang);
    } else {
      navigate(`/es${location.pathname}`, { replace: true });
    }
  }, [lang, location.pathname, navigate, i18n]);

  if (!lang || !(lang in localizedRoutes)) return null;
  const L = lang as Lang;
  const r = localizedRoutes[L];

  useCanonicalAndHreflang(L, location.pathname);
  useMetaTags(L, location.pathname);

  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path={r.about} element={<About />} />
      <Route path={r.contact} element={<Contact />} />
      <Route path={r.schedule} element={<ScheduleMeeting />} />
      <Route path={r.resume} element={<ResumePreview />} />

      {/* Projects */}
      <Route path={r.projects} element={<Projects />} />
      <Route path={`${r.projects}/:projectSlug`} element={<ProjectDetail />} />

      {/* Publications (detalle con slug localizado) */}
      <Route path={`${r.publications}/:slug`} element={<PublicationDetail />} />
    </Routes>
  );
}
