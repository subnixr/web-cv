import { I18NProvider } from '@/utils/i18n';
import { LOCALES } from '@/utils/i18n/config';
import { readTranslations } from '@/utils/i18n/server';
import { ReactNode } from 'react';
import { CVContextProvider } from './ui/useCVState';

export default async function Layout({
    children,
    params,
}: Readonly<{
    children: ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;

    const translations = await readTranslations([...LOCALES]);

    return (
        <>
            <I18NProvider translations={translations} lang={locale}>
                <CVContextProvider>{children}</CVContextProvider>
            </I18NProvider>
        </>
    );
}
