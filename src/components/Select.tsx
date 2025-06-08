'use client';

import { WithChildren } from '@/utils/components';
import clsx from 'clsx';
import Icon from './base/Icon';

type SelectProps = WithChildren<{
    label?: string;
    name?: string;
    inputProps?: any;
    value?: string;
    onChange?: (value: string) => void;
}>;

export default function Select({
    label,
    name,
    value,
    onChange,
    className,
    children,
    inputProps,
    ...props
}: SelectProps) {
    return (
        <label {...props} className={clsx('select', className)}>
            {label && <span className="select__label">{label}</span>}
            <span className="select__input-wrapper">
                <select
                    {...inputProps}
                    name={name}
                    value={value}
                    onChange={evt => onChange?.(evt.target.value)}
                >
                    {children}
                </select>
                <Icon className="select__icon" type="chevron-down" />
            </span>
        </label>
    );
}
