import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../components/Breadcrumbs';
import Background from '../components/Background';
import ProfileSection from '../components/ProfileSection';

import backgroundHome from '../assets/images/backgrounds/wallpaper-vectorial-image.jpg';

export default function Home() {

  const { t } = useTranslation();

  return (
    <div className="w-full">
        <Background image={backgroundHome} className="min-h-screen flex flex-col items-center justify-center text-white space-y-4">
          <h1 className="text-5xl font-bold">{t('Juan López')}</h1>
          <h2 className="text-4xl font-bold">{t('Full stack developer & Data Science Enthusiast')}</h2>
        </Background>
        <Breadcrumbs />
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <h2 className="text-5xl font-bold">{t('Home')}</h2>
        </div>
        <ProfileSection />
    </div>
  );
}
