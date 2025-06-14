import { Card } from '@/components/Card';
import List from '@/components/List';
import { WithChildren } from '@/utils/components';
import clsx from 'clsx';
import { ReactNode } from 'react';

export type ListCardProps = WithChildren<{
    label?: ReactNode;
    grid?: boolean;
}>;

export default function ListCard({
    label,
    grid = false,
    className,
    children,
    ...props
}: ListCardProps) {
    return (
        <Card
            {...props}
            small
            label={label}
            className={clsx('h-full', className)}
        >
            <List
                className={clsx('gap-100', {
                    'col-count-2': !grid,
                    'grid grid-cols-2': grid,
                })}
            >
                {children}
            </List>
        </Card>
    );
}
