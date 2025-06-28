'use client';

import FlagLink from '@/components/FlagLink';
import Switch from '@/components/Switch';
import Icon from '@/components/base/Icon';
import useTheme, { THEME } from '@/components/base/useTheme';
import { WithClassName } from '@/utils/components';
import { LOCALES } from '@/utils/i18n/config';
import clsx from 'clsx';
import { useParams } from 'next/navigation';

export type SettingsProps = WithClassName<object>;

export default function CVSettings({ className }: SettingsProps) {
    const { locale: currentLocale } = useParams();
    const [theme, setTheme] = useTheme();

    const themeIcon = theme === THEME.light ? 'sun' : 'moon';

    return (
        <div className={clsx('flex items-center gap-200', className)}>
            <div className="mr-auto">
                <Switch
                    checked={theme === THEME.dark}
                    onChange={dark => setTheme(dark ? THEME.dark : THEME.light)}
                    icon={<Icon type={themeIcon} className="h-full w-full" />}
                />
            </div>
            {LOCALES.filter(l => currentLocale !== l).map(locale => (
                <FlagLink
                    key={locale}
                    href={`/${locale}`}
                    type={`flag-${locale}`}
                />
            ))}
        </div>
    );
}
