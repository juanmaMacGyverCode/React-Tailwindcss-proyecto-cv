import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import enFlag from '../assets/images/languages/en.svg';
import esFlag from '../assets/images/languages/es.svg';

const languages = [
  { code: 'en', label: 'English', flag: enFlag },
  { code: 'es', label: 'Español', flag: esFlag },
];

export default function LanguageSelect() {
  const { i18n } = useTranslation();
  const changeLanguage = (code: string) => i18n.changeLanguage(code);
  const currentLang = languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        className="inline-flex items-center bg-gray-800 px-2 py-1 focus:outline-none focus:ring focus:ring-white"
      >
        <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-3 mr-2 object-cover" />
        <span className="text-white text-sm">{currentLang.label}</span>
      </MenuButton>

      <MenuItems className="absolute right-0 mt-1 w-36 origin-top-right bg-white shadow-lg ring-1 ring-black/10 focus:outline-none z-50">
        {languages.map((lang) => (
          <MenuItem key={lang.code}>
            {({ active }) => (
              <button
                onClick={() => changeLanguage(lang.code)}
                className={`flex items-center w-full px-3 py-2 text-sm text-left ${
                  active ? 'bg-gray-100' : ''
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
