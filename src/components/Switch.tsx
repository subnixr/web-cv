'use client';

import { WithClassName } from '@/utils/components';
import clsx from 'clsx';
import { ReactNode } from 'react';

export type SwitchProps = WithClassName<{
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    icon?: ReactNode;
    checkedClassName?: string;
}>;

export default function Switch({
    checked,
    onChange,
    icon,
    className,
    checkedClassName,
    ...props
}: SwitchProps) {
    return (
        <label
            {...props}
            className={clsx(
                'relative inline-block overflow-hidden',
                'h-[2.8rem] w-[5.6rem]',
                className,
            )}
        >
            <input
                className="h-0 w-0 opacity-0"
                type="checkbox"
                checked={checked}
                onChange={e => onChange?.(e.target.checked)}
            />
            <span
                className={clsx(
                    'absolute inset-0',
                    'cursor-pointer',
                    'bg-bg',
                    'rounded-full',
                    'transition',
                    'hover:border-fg focus:border-fg border-border border-[.2rem]',
                    {
                        [checkedClassName ?? '']: checked,
                    },
                )}
            >
                <span
                    className={clsx(
                        'absolute',
                        'inset-0',
                        'top-[.2rem] left-[.2rem]',
                        'h-[2rem] w-[2rem] p-[.2rem]',
                        'bg-primary text-fgAlt',
                        'rounded-full',
                        'flex items-center justify-center',
                        'transition',
                        {
                            'transform-[translateX(2.8rem)]': checked,
                        },
                    )}
                >
                    {icon}
                </span>
            </span>
        </label>
    );
}
