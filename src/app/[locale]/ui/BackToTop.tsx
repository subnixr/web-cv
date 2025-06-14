'use client';

import Icon from '@/components/base/Icon';
import useI18N from '@/utils/i18n';
import clsx from 'clsx';

export default function BackToTop() {
    const t = useI18N();

    return (
        <button
            className={clsx(
                'appearance-none outline-none',
                'flex flex-col items-center gap-200',
                'bg-wallpaper2 text-fg text-200 font-mono',
                'mp-200 py-300',
                'cursor-pointer',
                'hover:text-primary focus:text-primary',
            )}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <Icon className="icon-400" type="arrow-up" />
            <span className="font-base text-fg">{t('timeline.backToTop')}</span>
        </button>
    );
}
