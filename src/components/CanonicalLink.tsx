import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { localizedRoutes } from '../routes';

export default function CanonicalLink() {
  const { pathname } = useLocation();
  const baseUrl = "https://www.tusitio.com"; // 🔹 pon aquí tu dominio real

  useEffect(() => {
    // Crear o actualizar link canonical
    let canonicalTag = document.querySelector("link[rel='canonical']");
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", `${baseUrl}${pathname}`);

    // Opcional: hreflang para SEO multi-idioma
    // Primero limpiamos hreflang existentes
    document.querySelectorAll("link[rel='alternate']").forEach(el => el.remove());

    // Detectar idioma y slug actual
    const parts = pathname.split("/").filter(Boolean);
    const lang = parts[0] as keyof typeof localizedRoutes;
    if (!localizedRoutes[lang]) return;

    // Generar enlaces hreflang para todos los idiomas
    (Object.keys(localizedRoutes) as Array<keyof typeof localizedRoutes>).forEach(otherLang => {
      const newParts = [otherLang, ...parts.slice(1)];
      const href = `${baseUrl}/${newParts.join("/")}`;
      const altTag = document.createElement("link");
      altTag.setAttribute("rel", "alternate");
      altTag.setAttribute("hrefLang", otherLang);
      altTag.setAttribute("href", href);
      document.head.appendChild(altTag);
    });
  }, [pathname]);

  return null;
}
