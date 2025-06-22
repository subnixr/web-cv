'use client';

import { WithClassName } from '@/utils/components';
import useI18N from '@/utils/i18n';
import clsx from 'clsx';
import { MouseEvent } from 'react';
import scrollToSection from './scrollToSection';
import useCVState, { CVSection } from './useCVState';

export type NavProps = WithClassName<{
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}>;

export default function CVNav({ className, onClick }: NavProps) {
    const t = useI18N();
    const [{ current }, { setCurrent }] = useCVState();

    return (
        <ol className={clsx('flex flex-col gap-300', className)}>
            {(['skills', 'experiences', 'education'] as CVSection[]).map(
                section => (
                    <li key={section}>
                        <a
                            href={`#${section}`}
                            className={clsx(
                                'flex items-center',
                                'font-alt text-500 uppercase',
                                'appearance-none outline-none',
                                'hover:font-bold',
                                'focus:font-bold',
                                {
                                    'font-bold': current === section,
                                },
                            )}
                            onClick={e => {
                                e.preventDefault();
                                onClick?.(e);
                                (e.target as HTMLElement).blur();
                                scrollToSection(section).then(() => {
                                    setCurrent(section);
                                });
                            }}
                        >
                            <span
                                className={clsx(
                                    'mb-[.4rem] block',
                                    'mr-200 h-200 w-200 rounded-full',
                                    {
                                        'bg-primary': current === section,
                                    },
                                )}
                            />
                            {t(`timeline.section.${section}`)}
                        </a>
                    </li>
                ),
            )}
        </ol>
    );
}
