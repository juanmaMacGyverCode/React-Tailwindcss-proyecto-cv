import { Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/* Páginas */
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ScheduleMeeting from './pages/ScheduleMeeting';
import ResumePreview from './pages/ResumePreview';

/* Rutas localizadas */
import { localizedRoutes } from './routes';

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

  useCanonicalAndHreflang(lang as keyof typeof localizedRoutes, location.pathname);

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
