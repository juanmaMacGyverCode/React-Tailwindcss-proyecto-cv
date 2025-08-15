import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { EyeIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { localizedRoutes } from "../routes";

import pdfFile from "../assets/documents/pdf/sample-local-pdf.pdf"; // <-- IMPORT

export default function ResumeSection() {
    const { t } = useTranslation();

    const { lang = "es" } = useParams();
    const r = localizedRoutes[lang as keyof typeof localizedRoutes];

    return (
        <section className="bg-neutral-900 text-[var(--text)] py-20">
            <div className="mx-auto max-w-5xl px-4">

                <div className="text-center">
                    <h1 className="text-5xl font-extrabold tracking-tight">
                        {t("My Resume")}
                    </h1>
                    <div className="mt-3 h-1 w-24 mx-auto rounded-full bg-blue-500/80" />
                </div>

                <div className="mt-12 rounded-2xl bg-neutral-800/80 p-10 ring-1 ring-white/5 backdrop-blur
                                shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]">
                    <div className="text-center space-y-4">
                        <h3 className="text-2xl font-semibold">
                            {t("My Professional Resume")}
                        </h3>
                        <p className="text-lg text-neutral-300">
                            {t("Tech Professional at the Intersection of Software Engineering & Data Science")}
                        </p>

                        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                            <Link
                              to={r.resume} // ruta de previsualización
                              className="inline-flex items-center gap-2 rounded-xl bg-neutral-900/60
                                         px-6 py-3 text-sm font-semibold text-[var(--text)] ring-1 ring-white/10
                                         transition hover:bg-neutral-900/80 focus-visible:outline-none
                                         focus-visible:ring-2 focus-visible:ring-blue-500"
                            >
                                <EyeIcon className="size-4" />
                                {t("Preview Resume")}
                            </Link>

                            <a
                              href={pdfFile} // tu archivo
                              download
                              className="inline-flex items-center gap-2 rounded-xl bg-blue-600
                                         px-6 py-3 text-sm font-semibold text-[var(--text)] transition
                                         hover:bg-blue-500 focus-visible:outline-none
                                         focus-visible:ring-2 focus-visible:ring-blue-400"
                            >
                                <ArrowDownTrayIcon className="size-4" />
                                {t("Download PDF")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
