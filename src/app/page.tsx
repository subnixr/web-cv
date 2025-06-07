'use client';

import { DEFAULTLOCALE, LOCALES } from '@/utils/i18n/config';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// i18n redirect workaround, since middlewares don't run on SSG exports
export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        const storedLocale = localStorage.getItem('locale');
        const browserLocale = navigator.language.split('-')[0];
        const requested = storedLocale ?? browserLocale;
        const locale = (LOCALES as readonly string[]).includes(requested)
            ? requested
            : DEFAULTLOCALE;

        router.replace(`/${locale}`);
    }, [router]);

    return (
        <div
            className={clsx(
                'bg-wallpaper2',
                'typo-title text-800 font-sans',
                'flex items-center justify-center',
                'h-[100vh]',
            )}
        >
            Redirecting...
        </div>
    );
}
