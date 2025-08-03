import { useTranslation } from 'react-i18next';

export default function Home() {

  const { t } = useTranslation();

  return (
    <div className="p-8 text-center">
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <h1 className="text-5xl font-bold">{t('Home')}</h1>
        </div>
    </div>
  );
}
