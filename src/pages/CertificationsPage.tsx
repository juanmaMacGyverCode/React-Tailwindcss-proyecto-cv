import { certifications } from "../data/certifications";
import { useTranslation } from "react-i18next";
import Breadcrumbs from '../components/Breadcrumbs';

export default function CertificationsPage() {
  const { i18n, t } = useTranslation();
  const lang = (i18n.language as "en" | "es") || "en";

  return (
    <div className="min-h-screen bg-gray-900 text-white">
        <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">{t("Certifications")}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/80 rounded-2xl ring-1 ring-white/5 hover:bg-gray-800 transition shadow p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">{cert.title[lang]}</h3>
                <p className="text-sm text-gray-400">{cert.institution[lang]}</p>
                <p className="text-xs text-gray-500">{cert.date[lang]}</p>
              </div>
              <p className="mt-4 text-sm text-gray-200">{cert.description[lang]}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
