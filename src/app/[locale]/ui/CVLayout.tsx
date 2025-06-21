'use client';

import useIntersectionObserver, {
    EntriesMap,
} from '@/components/base/useMultiIntersectionObserver';
import useScrollDown from '@/components/base/useScrollDown';
import { WithChildren } from '@/utils/components';
import useI18N from '@/utils/i18n';
import clsx from 'clsx';
import { ReactNode, useCallback, useEffect } from 'react';
import CVSortInput from './CVSortInput';
import scrollToSection from './scrollToSection';
import { TimelineHeader } from './Timeline';
import useCVState, { CV_SECTIONS, CVSection, SortOrder } from './useCVState';

export type CVLayoutProps = WithChildren<{
    header?: ReactNode;
    mainProps?: any;
}>;

const getLastScrolledOut = (entries: EntriesMap) => {
    const entriesArr = entries.values().toArray();

    const entry = CV_SECTIONS.map(s =>
        entriesArr.find(e => e.target.id === s),
    ).filter(e => !!e?.isIntersecting)[0];

    const section = entry?.target.id;
    return (section as CVSection) ?? 'skills';
};

export default function CVLayout({
    header,
    className,
    children,
    ...props
}: CVLayoutProps) {
    const t = useI18N();
    const [{ sorting, current }, { setSorting, setCurrent }] = useCVState();
    const scrollDown = useScrollDown();
    const [entries] = useIntersectionObserver();

    useEffect(() => {
        setCurrent(getLastScrolledOut(entries));
    }, [entries, setCurrent]);

    const handleSortChange = useCallback(
        (v: SortOrder) => {
            setSorting(current, v);
            scrollToSection(current);
        },
        [current, setSorting],
    );

    return (
        <div {...props} className={clsx('relative', className)}>
            {header && (
                <div
                    className={clsx(
                        'z-header shadow-500 fixed',
                        'h-full w-[25rem]',
                        'max-md:h-auto max-md:w-full',
                        'transition-[height]',
                        {
                            'max-md:min-h-[15.3rem]': !scrollDown,
                            'max-md:min-h-[7.9rem]': scrollDown,
                        },
                    )}
                >
                    {header}
                    {['experiences', 'education'].includes(current) && (
                        <div
                            className={clsx(
                                'fixed top-0',
                                'w-full max-w-[1024px] pl-[25rem]',
                                'max-md:static max-md:pl-0',
                            )}
                        >
                            <TimelineHeader
                                title={t(`timeline.section.${current}`)}
                                cta={
                                    <CVSortInput
                                        name={`header-sort-${current}`}
                                        value={sorting[current]}
                                        onChange={handleSortChange}
                                    />
                                }
                            />
                        </div>
                    )}
                </div>
            )}
            <main
                className={clsx({
                    'min-h-[100vh] pl-[25rem]': header,
                    'max-md:pl-[0]': header,
                    'max-md:pt-[15.3rem]': header,
                })}
            >
                {children}
            </main>
        </div>
    );
}
