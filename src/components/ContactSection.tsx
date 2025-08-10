import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

// serializa como application/x-www-form-urlencoded
function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

declare global {
  interface Window {
    grecaptcha?: { reset: () => void };
  }
}

export default function ContactSection() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language.startsWith("es") ? "es" : "en") as "es" | "en";
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error" | "captcha">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const form = new FormData(formRef.current);

    // honeypot
    if ((form.get("company") as string)?.length) return;

    // token de reCAPTCHA (lo inyecta Google al resolver el widget)
    const recaptcha = (form.get("g-recaptcha-response") as string) || "";
    if (!recaptcha) {
      setStatus("captcha"); // pide resolver
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/?no-cache=1", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          from_name: String(form.get("from_name") || ""),
          from_email: String(form.get("from_email") || ""),
          subject: String(form.get("subject") || ""),     // ← añadido
          message: String(form.get("message") || ""),
          company: String(form.get("company") || ""),
          "g-recaptcha-response": recaptcha,
        }),
      });

      if (res.ok) {
        setStatus("ok");
        formRef.current.reset();
        // reset del widget (opcional)
        window.grecaptcha?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          {lang === "es" ? "Contacto" : "Contact"}
        </h2>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          name="contact"
          data-netlify="true"
          netlify-honeypot="company"
          className="space-y-4 bg-gray-800/70 ring-1 ring-white/5 rounded-2xl p-6"
        >
          <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="form-name" value="contact" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                {lang === "es" ? "Nombre" : "Name"}
              </label>
              <input
                name="from_name"
                required
                className="w-full rounded-lg bg-gray-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={lang === "es" ? "Tu nombre" : "Your name"}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full rounded-lg bg-gray-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@email.com"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              {lang === "es" ? "Asunto" : "Subject"}
            </label>
            <input
              name="subject"
              required
              className="w-full rounded-lg bg-gray-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={lang === "es" ? "Motivo del mensaje" : "Subject of your message"}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              {lang === "es" ? "Mensaje" : "Message"}
            </label>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full rounded-lg bg-gray-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={lang === "es" ? "Cuéntame en qué puedo ayudarte..." : "Tell me how I can help..."}
            />
          </div>

          <div data-netlify-recaptcha="true" className="mt-2" />

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 px-5 py-2.5 font-medium disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending"
              ? (lang === "es" ? "Enviando..." : "Sending...")
              : (lang === "es" ? "Enviar" : "Send")}
          </button>
        </form>


        <p className="mt-4 text-xs text-gray-400 text-center">
          {lang === "es" ? "Protegido con Netlify Forms + reCAPTCHA." : "Protected with Netlify Forms + reCAPTCHA."}
        </p>
      </div>
    </section>
  );
}
