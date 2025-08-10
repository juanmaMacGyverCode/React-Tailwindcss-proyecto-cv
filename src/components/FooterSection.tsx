// src/components/Footer.tsx
import { useTranslation } from "react-i18next";
import { localizedRoutes } from "../routes";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.85 9.7.5.1.69-.22.69-.49 0-.24-.01-.88-.01-1.73-2.79.62-3.38-1.37-3.38-1.37-.46-1.19-1.14-1.5-1.14-1.5-.93-.66.07-.65.07-.65 1.03.07 1.58 1.08 1.58 1.08.92 1.61 2.42 1.15 3.01.88.09-.69.36-1.15.65-1.41-2.23-.26-4.58-1.14-4.58-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.33.1-2.76 0 0 .85-.28 2.79 1.05a9.36 9.36 0 0 1 5.08 0c1.94-1.33 2.79-1.05 2.79-1.05.55 1.43.2 2.5.1 2.76.64.72 1.03 1.63 1.03 2.75 0 3.93-2.36 4.79-4.6 5.05.37.33.69.98.69 1.99 0 1.44-.01 2.6-.01 2.95 0 .28.18.6.69.49A10 10 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7 0h3.83v2.05h.05c.53-1 1.83-2.05 3.77-2.05C19.6 8 22 10 22 14.1V23h-4v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.93V23h-4V8z"/>
  </svg>
);

const ExternalIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/><path d="M5 5h6V3H3v8h2V5zm0 14v-6H3v8h8v-2H5z"/>
  </svg>
);

export default function FooterSection() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language?.startsWith("es") ? "es" : "en") as "es" | "en";
  const siteName = import.meta.env.VITE_SITE_NAME || "Portfolio";
  const year = new Date().getFullYear();

  // ejemplo por si quieres un enlace interno que respete el idioma
  const homeHref = `/${lang}`;
  const policiesHref = `/${lang}/${localizedRoutes[lang].publications}`; // cambia a tu página real de política si la tienes

  return (
    <footer className="bg-gray-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col items-center gap-5">
        {/* Nombre / marca */}
        <h2 className="text-3xl font-bold text-blue-400">{siteName}</h2>

        {/* Redes */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition"
            aria-label="GitHub"
            title="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={homeHref}
            className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition"
            aria-label={t("footer.home")}
            title={t("footer.home")}
          >
            <span className="block h-5 w-5 rounded-full bg-blue-500/80" />
          </a>
          <a
            href={policiesHref}
            className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition"
            aria-label={t("footer.external")}
            title={t("footer.external")}
          >
            <ExternalIcon className="h-5 w-5" />
          </a>
        </div>

        {/* Aviso */}
        <p className="text-sm text-gray-400 text-center max-w-xl">
          {t("footer.analyticsNotice")}
        </p>

        {/* línea separadora */}
        <div className="w-full h-px bg-white/10"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 text-center">
          © {year} {siteName}. {t("footer.allRightsReserved")}
        </p>
      </div>
    </footer>
  );
}
