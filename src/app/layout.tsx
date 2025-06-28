import '@/styles/global.css';

import { IconContainer } from '@/components/base/Icon';
import { ModalPortalRoot } from '@/components/base/Modal';
import { MultiIntersectionObserverProvider } from '@/components/base/useMultiIntersectionObserver';
import { ThemeProvider } from '@/components/base/useTheme';
import clsx from 'clsx';
import { Overpass } from 'next/font/google';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

const overpass = Overpass({
    subsets: ['latin'],
    variable: '--font-face-overpass',
    display: 'swap',
});

const hermit = localFont({
    src: [
        {
            path: '../fonts/Hermit/Hermit-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/Hermit/Hermit-RegularItalic.otf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../fonts/Hermit/Hermit-Light.otf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../fonts/Hermit/Hermit-LightItalic.otf',
            weight: '200',
            style: 'italic',
        },
        {
            path: '../fonts/Hermit/Hermit-Bold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../fonts/Hermit/Hermit-BoldItalic.otf',
            weight: '600',
            style: 'italic',
        },
    ],
    variable: '--font-face-hermit',
    display: 'swap',
});

export default async function Layout({ children }: { children: ReactNode }) {
    const theme = 'light';

    return (
        <html
            data-theme={theme}
            className={`${hermit.variable} ${overpass.variable}`}
        >
            <head>
                {/* prettier-ignore */}
                <script>
                    {/* debugger */}
                    {/* const saved = localStorage.getItem('theme');
                    const preferred = matchMedia('prefers-color-scheme:dark').matches ? 'dark' : 'light';
                    document.documentElement.dataset.theme = saved || preferred;
                    localStorage.setItem('theme', saved || preferred) */}
                </script>
            </head>
            <body
                className={clsx(
                    'bg-wallpaper text-fg typo-body',
                    'mx-auto max-w-[1024px]',
                    'shadow-500',
                    'relative',
                    'transition',
                )}
            >
                <MultiIntersectionObserverProvider
                    options={{ rootMargin: '0px 0px 0px 0px' }}
                >
                    <ThemeProvider>{children}</ThemeProvider>
                </MultiIntersectionObserverProvider>
                <IconContainer />
                <ModalPortalRoot />
                <script async src="/easteregg.js" />
                {/* <script>debugger</script> */}
            </body>
        </html>
    );
}
