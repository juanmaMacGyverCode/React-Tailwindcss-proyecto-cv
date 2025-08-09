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
