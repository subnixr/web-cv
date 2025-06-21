import { WithClassName } from '@/utils/components';
import useI18N from '@/utils/i18n';
import clsx from 'clsx';
import { ChangeEventHandler } from 'react';
import { SORT_ORDER, SortOrder } from './useCVState';

export type CVSortInputProps = WithClassName<{
    name: string;
    value: SortOrder;
    onChange: (e: SortOrder) => void;
}>;

export default function CVSortInput({
    name,
    value,
    onChange,
    className,
    ...props
}: CVSortInputProps) {
    const t = useI18N();

    const optionCss = clsx('text-fg bg-bg');

    const handleChange: ChangeEventHandler<HTMLSelectElement> = e => {
        onChange(e.target.value as SortOrder);
    };

    return (
        <select
            {...props}
            name={name}
            value={value.toString()}
            onChange={handleChange}
            className={clsx(
                'bg-transparent',
                'outline-none',
                'p-100',
                'border-focus rounded-[.4rem] border-transparent',
                'hover:border-focus hover:border-fgAlt',
                'focus:border-focus focus:border-fgAlt',
                className,
            )}
        >
            <option value={SORT_ORDER.desc.toString()} className={optionCss}>
                {t('timeline.mostRecent')}
            </option>
            <option value={SORT_ORDER.asc.toString()} className={optionCss}>
                {t('timeline.leastRecent')}
            </option>
        </select>
    );
}
