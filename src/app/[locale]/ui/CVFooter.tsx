'use client';

import Icon from '@/components/base/Icon';
import useI18N from '@/utils/i18n';
import clsx from 'clsx';
import scrollToSection from './scrollToSection';

export default function CVFooter() {
    const t = useI18N();

    return (
        <div
            className={clsx(
                'flex flex-col items-center gap-200',
                'bg-wallpaper2 text-fg text-300 font-mono',
                'mp-200 py-300',
            )}
        >
            <button
                className={clsx(
                    'fit-content appearance-none outline-none',
                    'cursor-pointer',
                    'hover:text-primary focus:text-primary',
                )}
                onClick={() => scrollToSection('skills')}
            >
                <Icon className="icon-400" type="arrow-up" />
            </button>
            <div className="font-base text-fg select-none">
                {t('timeline.footer.back')}
            </div>
            <div className="font-base text-fg rich-text mt-200">
                Made with{' '}
                <a href="https://nextjs.org/" target="_blank">
                    Next.js
                </a>
                , source available on{' '}
                <a href="https://github.com/subnixr/web-cv" target="_blank">
                    Github
                </a>
            </div>
        </div>
    );
}
