import {
  Disclosure, DisclosureButton, DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitch';
import { localizedRoutes } from '../routes';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language.startsWith('es') ? 'es' : 'en') as 'en' | 'es';
  const routes = localizedRoutes[lang];

  const navigation = [
    { key: 'home' },
    { key: 'about' },
    { key: 'contact' },
    { key: 'schedule' },
    { key: 'projects' },
    { key: 'publications' },
    { key: 'certifications' },
    { key: 'resume' },
  ] as const;

  const buildHref = (key: keyof typeof routes) => {
    const seg = routes[key] ?? '';
    return seg ? `/${lang}/${seg}` : `/${lang}`;
  };

  const labelFor = (key: keyof typeof routes | 'home') =>
    t(`routes.${key}`);

  return (
    <Disclosure as="nav" className="theme-surface theme-text border-b theme-border">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botón móvil */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[var(--card)] hover:text-[var(--text)] focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo y enlaces */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link to={`/${lang}`} className="flex shrink-0 items-center">
              <img
                alt={t('CV Project')}
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </Link>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => {
                  const key = item.key as keyof typeof routes | 'home';
                  const href = buildHref(key as keyof typeof routes);
                  return (
                    <NavLink
                      key={item.key}
                      to={href}
                      end={item.key === 'home'} // 👈 Esto asegura coincidencia exacta solo en Home
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? 'bg-[var(--elev)] text-[var(--text)]'
                            : 'opacity-80 hover:opacity-100 hover:bg-[var(--elev)]',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )
                      }
                    >
                      {t(`routes.${item.key}`)}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Cambiador de idioma */}
          <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="mr-4">
              <LanguageSwitcher />
            </div>
            <div className="mr-0.5">
              {/* Nuevo: botón de tema */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => {
            const key = item.key as keyof typeof routes | 'home';
            const href = buildHref(key as keyof typeof routes);
            return (
              <DisclosureButton
                key={item.key}
                as={Link}
                to={href}
                className="block rounded-md px-3 py-2 text-base font-medium text-[color:var(--muted)] hover:bg-[var(--card)] hover:text-[var(--text)]"
              >
                {labelFor(key)}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
