import '@/styles/global.css';
import clsx from 'clsx';

import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    `${geistSans.variable} ${geistMono.variable}`,
                    'bg-wallpaper text-fg typo-body',
                    'mx-auto max-w-[1024px]',
                    'shadow-500',
                    'relative',
                    'transition',
                )}
            >
                {children}
                <script async src="/easteregg.js" />
            </body>
        </html>
    );
}
