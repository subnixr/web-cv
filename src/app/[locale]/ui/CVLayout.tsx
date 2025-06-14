'use client';

import useScrollDown from '@/components/base/useScrollDown';
import { WithChildren } from '@/utils/components';
import clsx from 'clsx';
import { ReactNode } from 'react';

export type CVLayoutProps = WithChildren<{
    header?: ReactNode;
    mainProps?: any;
}>;

export default function CVLayout({
    header,
    className,
    children,
    ...props
}: CVLayoutProps) {
    const scrollDown = useScrollDown();

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
