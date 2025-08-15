import {
  Disclosure, DisclosureButton, DisclosurePanel,
  Menu, MenuButton, MenuItem, MenuItems
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitch';
import { localizedRoutes } from '../routes';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { BrandLogo } from './BrandLogo';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language.startsWith('es') ? 'es' : 'en') as 'en' | 'es';
  const routes = localizedRoutes[lang];

  // 👉 separa navegación principal vs. desplegable
  const primary = ['home', 'about', 'contact', 'resume'] as const;
  const dropdown = ['projects', 'publications', 'certifications'] as const;

  const buildHref = (key: keyof typeof routes) => {
    const seg = routes[key] ?? '';
    return seg ? `/${lang}/${seg}` : `/${lang}`;
  };
  const labelFor = (key: keyof typeof routes | 'home') => t(`routes.${key}`);

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

          {/* Logo + enlaces */}
          <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
            <Link to={`/${lang}`} className="flex shrink-0 items-center">
              <BrandLogo className="h-8 w-auto" />
            </Link>

            {/* Desktop */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex items-center space-x-2">
                {/* enlaces principales */}
                {primary.map((key) => {
                  const href = buildHref(key as keyof typeof routes);
                  return (
                    <NavLink
                      key={key}
                      to={href}
                      end={key === 'home'}
                      className={({ isActive }) =>
                        classNames(
                          'rounded-md px-3 py-2 text-sm font-medium flex items-center',
                          isActive
                            ? 'bg-[var(--elev)] text-[var(--text)]'
                            : 'opacity-80 hover:opacity-100 hover:bg-[var(--elev)]'
                        )
                      }
                    >
                      {labelFor(key)}
                    </NavLink>
                  );
                })}

                {/* 👉 Desplegable (Projects, Publications, Certifications) */}
                <Menu as="div" className="relative">
                  <MenuButton
                    className="rounded-md px-3 py-2 text-sm font-medium flex items-center gap-1 opacity-80 btn theme-link hover:opacity-100 hover:bg-[var(--elev)]"
                  >
                    {/* Etiqueta del botón del dropdown (elige la que prefieras) */}
                    {t('navbar.work', { defaultValue: lang === 'es' ? 'Trabajo' : 'Work' })}
                    <ChevronDownIcon className="size-4 opacity-80" aria-hidden="true" />
                  </MenuButton>

                  <MenuItems
                    transition
                    anchor="bottom start"
                    className="mt-2 w-56 rounded-md border theme-border bg-[var(--card)] shadow-lg outline-none data-[closed]:scale-95 data-[closed]:opacity-0 transition duration-100 origin-top"
                  >
                    <div className="py-1">
                      {dropdown.map((key) => {
                        const href = buildHref(key as keyof typeof routes);
                        return (
                          <MenuItem key={key}>
                            {({ focus }) => (
                              <NavLink
                                to={href}
                                className={classNames(
                                  'block px-3 py-2 text-sm rounded-md',
                                  focus ? 'bg-[var(--elev)]' : ''
                                )}
                              >
                                {labelFor(key)}
                              </NavLink>
                            )}
                          </MenuItem>
                        );
                      })}
                    </div>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          {/* Idioma / tema */}
          <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="mr-4">
              <LanguageSwitcher />
            </div>
            <div className="mr-0.5">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Móvil */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {primary.map((key) => {
            const href = buildHref(key as keyof typeof routes);
            return (
              <DisclosureButton
                key={key}
                as={Link}
                to={href}
                className="block rounded-md px-3 py-2 text-base font-medium text-[color:var(--muted)] hover:bg-[var(--card)] hover:text-[var(--text)]"
              >
                {labelFor(key)}
              </DisclosureButton>
            );
          })}

          {/* Submenú móvil (plegable simple) */}
          <Disclosure>
            {({ open }) => (
              <>
                <DisclosureButton className="w-full text-left rounded-md px-3 py-2 text-base font-medium text-[color:var(--muted)] hover:bg-[var(--card)] hover:text-[var(--text)]">
                  {t('navbar.work', { defaultValue: lang === 'es' ? 'Trabajo' : 'Work' })}
                </DisclosureButton>
                <DisclosurePanel className="pl-3">
                  {dropdown.map((key) => {
                    const href = buildHref(key as keyof typeof routes);
                    return (
                      <DisclosureButton
                        key={key}
                        as={Link}
                        to={href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-[color:var(--muted)] hover:bg-[var(--card)] hover:text-[var(--text)]"
                      >
                        {labelFor(key)}
                      </DisclosureButton>
                    );
                  })}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
