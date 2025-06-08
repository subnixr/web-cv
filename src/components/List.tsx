import { WithChildren, WithClassName } from '@/utils/components';
import clsx from 'clsx';
import { ReactNode } from 'react';

export type ListProps = WithChildren<{
    ordered?: boolean;
}>;

export default function List({
    ordered = false,
    className,
    children,
    ...props
}: ListProps) {
    const Component = ordered ? 'ol' : 'ul';
    return (
        <Component {...props} className={clsx('', className)}>
            {children}
        </Component>
    );
}

export type ListItemProps = WithChildren<{
    marker?: ReactNode;
}>;

List.Item = function ListItem({
    marker = <List.Dot />,
    className,
    children,
    ...props
}: ListItemProps) {
    return (
        <li
            {...props}
            className={clsx('flex items-center', 'px-200 py-100', className)}
        >
            <span
                className={clsx(
                    'mr-200 inline-block',
                    'text-primary font-[700]',
                )}
            >
                {marker}
            </span>
            {children}
        </li>
    );
};

List.Dot = function ListDot({ className, ...props }: WithClassName<object>) {
    return (
        <div
            {...props}
            className={clsx(
                'bg-fg mt-[.5rem] h-[.6rem] w-[.6rem] rounded-full',
                className,
            )}
        />
    );
};
