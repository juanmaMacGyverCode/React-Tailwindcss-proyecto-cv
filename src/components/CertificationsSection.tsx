import { certifications } from "../data/certifications";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { localizedRoutes } from "../routes";

export default function CertificationsSection() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language as "en" | "es") || "en";
  const routes = localizedRoutes[lang];

  // Contenedor externo para la paginación
  const paginationRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t("Certifications")}
          </h2>
          <a href={`/${lang}/${routes.certifications}`} className="text-sm text-blue-400 hover:underline">
            {t("View all certifications")}
          </a>
        </div>
        <Swiper
          className="cert-swiper overflow-visible"
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation
          // Paginación usando contenedor externo
          pagination={{ el: paginationRef.current, clickable: true }}
          onBeforeInit={(swiper) => {
            // Necesario para que Swiper conozca el el externo antes de inicializar
            // @ts-ignore
            swiper.params.pagination.el = paginationRef.current;
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop
        >
          {certifications.map((cert) => (
            <SwiperSlide key={cert.id} className="!h-auto flex">
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition w-full h-full min-h-[240px]"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">{cert.title[lang]}</h3>
                  <p className="text-sm text-gray-400">{cert.institution[lang]}</p>
                  <p className="text-xs text-gray-500">{cert.date[lang]}</p>
                </div>
                <p className="text-sm text-gray-200">
                  {cert.description[lang]}
                </p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Paginación fuera del carrusel */}
        <div ref={paginationRef} className="mt-4 flex justify-center" />
      </div>
    </section>
  );
}
