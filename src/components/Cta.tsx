import { WithChildren } from '@/utils/components';
import clsx from 'clsx';
import { HTMLProps } from 'react';
import Icon from './base/Icon';

export type CtaProps = HTMLProps<HTMLAnchorElement> &
    WithChildren<{
        href: string;
        noIcon?: boolean;
        type?: string;
    }>;

export default function Cta({
    href,
    type,
    noIcon,
    className,
    children,
    ...props
}: CtaProps) {
    const Component = href ? 'a' : 'button';
    return (
        // @ts-expect-error gotta love browsers' types
        <Component
            {...props}
            href={href || undefined}
            target={href ? '_blank' : ''}
            type={type as 'submit' | 'reset' | 'button'}
            className={clsx('cta', className)}
        >
            {children}
            {!noIcon && href && (
                <Icon
                    className="h-[1.6rem] w-[1.6rem] flex-[0_0_auto] outline-none"
                    type="external-link"
                />
            )}
        </Component>
    );
}
