import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Contact() {

  const { t } = useTranslation();

  return (
    <div className="p-8 text-center">
        <div className="min-h-screen flex items-center justify-center bg-[var(--card)] text-[var(--text)]">
            <h1 className="text-5xl font-bold">{t('Contact')}</h1>
        </div>
        <Breadcrumbs />
    </div>
  );
}
