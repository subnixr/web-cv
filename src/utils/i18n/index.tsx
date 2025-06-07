'use client';

import { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import { initI18N, Translations } from './common';

export type Translate = (key: string) => string;

type I18NContextType = {
    translations: Translations;
    t: Translate;
};

const I18NContext = createContext<I18NContextType>({
    translations: {},
    t: () => '',
});

export function I18NProvider({
    translations,
    lang,
    children,
}: PropsWithChildren<{
    translations: Translations;
    lang: string;
}>) {
    const t = useMemo(() => initI18N(translations, lang), [translations, lang]);

    return (
        <I18NContext.Provider value={{ translations, t }}>
            {children}
        </I18NContext.Provider>
    );
}

export default function useI18N() {
    const { t } = useContext(I18NContext);
    return t;
}
