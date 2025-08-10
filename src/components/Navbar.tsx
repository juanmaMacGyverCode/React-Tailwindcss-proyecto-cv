import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitch';
import { localizedRoutes } from '../routes';
import { useParams } from 'react-router-dom';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'es';
  const routes = localizedRoutes[lang];

  const navigation = [
    { key: 'home' },
    { key: 'about' },
    { key: 'contact' },
    { key: 'schedule' },
    { key: 'projects' },
  ];

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botón móvil */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo y enlaces */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt={t('CV Project')}
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => {
                  const seg = routes[item.key as keyof typeof routes] ?? ''; // '' para home
                  const href = seg ? `/${lang}/${seg}` : `/${lang}`;
                                
                  // Si es "projects", pedimos la hoja 'title'; el resto sigue igual
                  const label = item.key === 'projects' ? t('projects.title') : t(item.key);
                                
                  return (
                    <a
                      key={item.key}
                      href={href}
                      className={classNames(
                        'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Cambiador de idioma */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="mr-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => {
            const key = item.key as keyof typeof routes;
            const seg = routes[key] ?? '';                    // evita /es/undefined
            const href = seg ? `/${lang}/${seg}` : `/${lang}`; // home -> /:lang
                    
            // 'projects' es un objeto en i18n: usa la hoja 'title'
            const label = item.key === 'projects' ? t('projects.title') : t(item.key);
                    
            return (
              <DisclosureButton
                key={item.key}
                as="a"
                href={href}
                className={classNames(
                  'block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                )}
              >
                {label}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
