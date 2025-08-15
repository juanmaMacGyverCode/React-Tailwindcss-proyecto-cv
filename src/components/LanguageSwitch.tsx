import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import enFlag from '../assets/images/languages/en.svg';
import esFlag from '../assets/images/languages/es.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { localizedRoutes } from '../routes';
import { projects } from '../data/projects';

const languages = [
  { code: 'en', label: 'English', flag: enFlag },
  { code: 'es', label: 'Español', flag: esFlag },
];

export default function LanguageSelect() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  /*const changeLanguage = (code: string) => i18n.changeLanguage(code);*/
  /*const currentLang = languages.find((lang) => lang.code === i18n.language) || languages[0];*/

  const currentCode = (i18n.resolvedLanguage || i18n.language || 'en').slice(0, 2);
  const currentLang = languages.find(l => l.code === currentCode) || languages[0];

  const changeLanguage = (nextCode: string) => {
  // 1) Cambiar idioma en i18n
  i18n.changeLanguage(nextCode);

  // 2) Analizar ruta actual: /:lang/segmento1/segmento2...
  const parts = pathname.split('/').filter(Boolean);
  const [, ...rest] = parts;

  const fromRoutes = localizedRoutes[currentCode as keyof typeof localizedRoutes];
  const toRoutes   = localizedRoutes[nextCode as keyof typeof localizedRoutes];

  // Caso Home (sin segmento)
  if (!rest.length) {
    navigate(`/${nextCode}`, { replace: false });
    return;
  }

  const [seg0, ...tail] = rest;

  // --- 🔹 Detectar si estamos en un detalle de proyecto ---
  if (seg0 === fromRoutes.projects && tail.length >= 1) {
    const currentSlug = tail[0];

    // Buscar proyecto con este slug en el idioma actual
    const project = projects.find(
      p => p.slug[currentCode as 'en' | 'es'] === currentSlug
    );

    // Si lo encontramos, usar el slug en el nuevo idioma
    if (project) {
      const newSlug = project.slug[nextCode as 'en' | 'es'];
      navigate(`/${nextCode}/${toRoutes.projects}/${newSlug}`, { replace: false });
      return;
    }
  }
  // --- 🔹 Fin detección detalle proyecto ---

  // Para páginas normales
  const entry = Object.entries(fromRoutes).find(([, slug]) => slug === seg0);
  const key = entry?.[0] as keyof typeof fromRoutes | undefined;

  const nextSlug = key ? toRoutes[key] : '';
  const tailPath = tail.length ? `/${tail.join('/')}` : '';

  navigate(`/${nextCode}${nextSlug ? `/${nextSlug}` : ''}${tailPath}`, { replace: false });
};

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex items-center text-gray-900 dark:text-[var(--text)] px-2 py-1 focus:outline-none focus:ring focus:ring-indigo-500">
        <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-3 mr-2 object-cover" />
        <span className="text-[var(--text)] text-sm">{currentLang.label}</span>
      </MenuButton>

      <MenuItems className="absolute right-0 mt-1 w-36 origin-top-right rounded-md bg-[var(--card)] text-gray-900 dark:text-[var(--text)] shadow-lg ring-1 ring-black/10 dark:ring-white/10 focus:outline-none z-50">
        {languages.map((lang) => (
          <MenuItem key={lang.code}>
            {({ focus }) => (
              <button
                onClick={() => changeLanguage(lang.code)}
                className={`flex items-center w-full px-3 py-2 text-sm text-left ${
                  focus ? 'bg-[var(--card)]' : ''
                }`}
              >
                <img src={lang.flag} alt={lang.label} className="w-5 h-3 mr-2 object-cover" />
                {lang.label}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
