import { WithChildren } from '@/utils/components';
import clsx from 'clsx';
import { ReactNode } from 'react';

export type CardProps = WithChildren<{
    label?: ReactNode;
    small?: boolean;
}>;

export function Card({
    label,
    small = false,
    className,
    children,
    ...props
}: CardProps) {
    return (
        <div {...props} className={clsx({ 'pt-[1.8rem]': label }, className)}>
            <div
                className={clsx(
                    'relative h-full',
                    'bg-bg shadow-500',
                    'border-l-primary border-l-[.4rem]',
                    'pt-[1.8rem] pb-300',
                )}
            >
                {label && (
                    <div
                        className={clsx(
                            'absolute -top-[1.8rem] right-[0.8rem]',
                            'w-fit p-200',
                            'bg-primary text-fgAlt shadow-500',
                            'typo-eyelet',
                        )}
                    >
                        {label}
                    </div>
                )}
                <div className="overflow-auto">
                    <div
                        className={clsx('pt-200', {
                            'p-400': !small,
                            'p-200': small,
                        })}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
