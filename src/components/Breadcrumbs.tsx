import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Breadcrumbs() {
  const location = useLocation();
  const { i18n, t } = useTranslation();

  const pathParts = location.pathname.split('/').filter(Boolean);

  const lang = i18n.language;
  const translatedParts = pathParts.slice(1).map((part, index) => {
    const path = '/' + lang + '/' + pathParts.slice(1, index + 2).join('/');
    return { label: t(part), path };
  });

  return (
    <nav className="text-sm text-gray-400 px-4 py-2">
      <Link to={`/${lang}`} className="hover:underline text-blue-300">{t('home')}</Link>
      {translatedParts.map((segment, i) => (
        <span key={i}>
          {' / '}
          {i === translatedParts.length - 1 ? (
            <span className="text-white">{segment.label}</span>
          ) : (
            <Link to={segment.path} className="hover:underline text-blue-300">{segment.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}
