import { Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { metaConfig } from './metaConfig';

/* Páginas */
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ScheduleMeeting from './pages/ScheduleMeeting';
import ResumePreview from './pages/ResumePreview';

/* Rutas localizadas */
import { localizedRoutes } from './routes';

const localeMap = {
  es: 'es_ES',
  en: 'en_US',
} as const;

function useCanonicalAndHreflang(lang: keyof typeof localizedRoutes, pathname: string) {
  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BASE_URL; // 👈 cambia a tu dominio real

    // Crear o actualizar canonical
    let canonicalTag = document.querySelector("link[rel='canonical']");
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", `${baseUrl}${pathname}`);

    // Limpiar hreflang anteriores
    document.querySelectorAll("link[rel='alternate']").forEach(el => el.remove());

    // Detectar clave semántica de la ruta actual
    const parts = pathname.split("/").filter(Boolean).slice(1); // sin el lang
    let key: string | null = null;
    if (parts.length) {
      const match = Object.entries(localizedRoutes[lang]).find(([, slug]) => slug === parts[0]);
      key = match?.[0] || null;
    }

    // Generar hreflang para cada idioma con su slug correspondiente
    (Object.keys(localizedRoutes) as Array<keyof typeof localizedRoutes>).forEach(otherLang => {
      let otherPath = `/${otherLang}`;
      if (key) {
        const slug = localizedRoutes[otherLang][key as keyof typeof localizedRoutes[typeof otherLang]];
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

function useMetaTags(lang: keyof typeof localizedRoutes, pathname: string) {
  useEffect(() => {
    const parts = pathname.split('/').filter(Boolean).slice(1); // quitamos lang
    const key = parts.length
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
    (Object.keys(localizedRoutes) as Array<keyof typeof localizedRoutes>)
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

  /*useCanonicalAndHreflang(lang as keyof typeof localizedRoutes, location.pathname);*/
  if (lang && lang in localizedRoutes) {
    useCanonicalAndHreflang(lang as keyof typeof localizedRoutes, location.pathname);
    useMetaTags(lang as keyof typeof localizedRoutes, location.pathname);
  }

  const r = localizedRoutes[lang as keyof typeof localizedRoutes];

  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path={r.about} element={<About />} />
      <Route path={r.contact} element={<Contact />} />
      <Route path={r.schedule} element={<ScheduleMeeting />} />
      <Route path={r.resume} element={<ResumePreview />} />
    </Routes>
  );
}
