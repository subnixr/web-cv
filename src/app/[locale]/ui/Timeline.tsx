'use client';

import useMultiIntersectionObserver from '@/components/base/useMultiIntersectionObserver';
import { WithChildren, WithClassName } from '@/utils/components';
import clsx from 'clsx';
import { ReactNode } from 'react';

export type TimelineHeaderProps = WithClassName<{
    id?: string;
    title?: ReactNode;
    cta?: ReactNode;
}>;

export function TimelineHeader({
    title,
    cta,
    className,
    ...props
}: TimelineHeaderProps) {
    return (
        <h1
            {...props}
            className={clsx(
                'flex items-baseline gap-300',
                'typo-eyelet bg-primary text-fgAlt',
                'px-300 py-200',
                className,
            )}
        >
            <span className="flex-1">{title}</span>
            {cta && <span className="ml-auto">{cta}</span>}
        </h1>
    );
}

export type TimelineSectionProps = WithChildren<{
    section?: string;
    title?: ReactNode;
    cta?: ReactNode;
}>;

export function TimelineSection({
    section,
    title,
    cta,
    className,
    children,
    ...props
}: TimelineSectionProps) {
    const [, { observe }] = useMultiIntersectionObserver();
    return (
        <section
            {...props}
            ref={elem => observe(elem as Element)}
            className={clsx('max-md:scroll-margin-top', className)}
            id={section}
        >
            {title && <TimelineHeader title={title} cta={cta} />}
            <div className={clsx('p-400', 'max-md:px-200')}>{children}</div>
        </section>
    );
}

export type TimelineProps = WithChildren<object>;

export default function Timeline({
    className,
    children,
    ...props
}: TimelineProps) {
    return (
        <div
            {...props}
            className={clsx('flex flex-col flex-nowrap', className)}
        >
            {children}
        </div>
    );
}
