import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(initReactI18next).init({
  lng: 'en', // idioma por defecto
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        home: 'Home',
        about: 'About',
        contact: 'Contact me',
        Contact: 'Contact me',
        "Contact me": 'Contact me',
        schedule: 'Schedule a meeting',
        Home: 'Home',
        notifications: 'View notifications',
        openMenu: 'Open main menu',
        profile: 'Your Profile',
        settings: 'Settings',
        signout: 'Sign out',
        "about me": 'About me',
        "Schedule a meeting": 'Schedule a meeting',
      },
    },
    es: {
      translation: {
        home: 'Inicio',
        about: 'Sobre mí',
        contact: 'Contáctame',
        Contact: 'Contáctame',
        "Contact me": 'Contáctame',
        Home: 'Inicio',
        schedule: 'Programar una cita',
        notifications: 'Ver notificaciones',
        openMenu: 'Abrir menú principal',
        profile: 'Tu perfil',
        settings: 'Configuración',
        signout: 'Cerrar sesión',
        "about me": 'Sobre mi',
        "Schedule a meeting": 'Programar una cita',
      },
    },
  },
});

export default i18n;
