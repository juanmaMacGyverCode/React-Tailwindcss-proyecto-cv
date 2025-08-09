import { useTranslation } from "react-i18next";
import Breadcrumbs from '../components/Breadcrumbs';

import pdfFile from "../assets/documents/pdf/sample-local-pdf.pdf";

export default function ResumePreview() {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen w-full flex flex-col items-center pt-8 px-4">
            <Breadcrumbs />
            <h1 className="text-4xl font-extrabold mb-6">{t('Preview Resume')}</h1>
            <div className="w-full h-screen bg-transparent">
                <iframe
                  src={pdfFile}
                  title={t('Resume PDF')}
                  className="w-full h-full border-0"
                />
            </div>
        </div>
    );
}
