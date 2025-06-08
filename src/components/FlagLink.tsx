import Icon, { IconProps } from '@/components/base/Icon';
import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';

type FlagLinkProps = Omit<LinkProps, 'children'> &
    IconProps & {
        iconClassName?: string;
    };

export default function FlagLink({
    href,
    className,
    type,
    iconClassName,
    ...props
}: FlagLinkProps) {
    return (
        <Link
            {...props}
            href={href}
            className={clsx(
                'inline-block overflow-hidden outline-none',
                'border-border rounded-full border-[.2rem]',
                'hover:border-fg',
                'focus:border-fg',
                className,
            )}
        >
            <Icon type={type} className={clsx('icon-300', iconClassName)} />
        </Link>
    );
}
