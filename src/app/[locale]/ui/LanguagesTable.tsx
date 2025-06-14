import Icon, { IconType } from '@/components/base/Icon';
import FlagLink from '@/components/FlagLink';
import { WithClassName } from '@/utils/components';
import { Language } from '@/utils/cv';
import clsx from 'clsx';

export type LanguagesProps = WithClassName<{
    languages: Language[];
    currentLanguage: string;
}>;

const cellCss = 'p-200 text-center';
const colGroupEndCss = 'border-r-[.1rem] border-border';
const rowGroupEndCss = 'border-b-[.1rem] border-border';
const iconCss = 'w-[2rem] h-[2rem] inline-block';

function LanguageRow({
    name,
    listen,
    speak,
    read,
    write,
    current,
    className,
    ...props
}: WithClassName<Language & { current?: boolean }>) {
    return (
        <tr
            {...props}
            className={clsx(
                {
                    'text-primary font-[700]': current,
                },
                className,
            )}
        >
            <td className={clsx(cellCss, colGroupEndCss)}>
                <FlagLink href={`/${name}`} type={`flag-${name}` as IconType} />
            </td>
            <td className={clsx(cellCss)}>{listen}</td>
            <td className={clsx(cellCss, colGroupEndCss)}>{speak}</td>
            <td className={clsx(cellCss)}>{read}</td>
            <td className={clsx(cellCss)}>{write}</td>
        </tr>
    );
}

export default function LanguagesTable({
    languages,
    currentLanguage,
    className,
    ...props
}: LanguagesProps) {
    const langIt = languages.find(lang => lang.name === 'it');
    const langs = languages.filter(lang => lang.name !== 'it');

    return (
        <table {...props} className={clsx('w-full', className)}>
            <thead>
                <tr className={clsx(rowGroupEndCss)}>
                    <th className={clsx(cellCss, colGroupEndCss)}></th>
                    <th className={clsx(cellCss)}>
                        <Icon className={iconCss} type="listen" />
                    </th>
                    <th className={clsx(cellCss, colGroupEndCss)}>
                        <Icon className={iconCss} type="speak" />
                    </th>
                    <th className={clsx(cellCss)}>
                        <Icon className={iconCss} type="read" />
                    </th>
                    <th className={clsx(cellCss)}>
                        <Icon className={iconCss} type="write" />
                    </th>
                </tr>
            </thead>
            <tbody>
                {langIt && (
                    <LanguageRow
                        className={rowGroupEndCss}
                        {...langIt}
                        current={currentLanguage === 'it'}
                    />
                )}
                {langs.map(lang => (
                    <LanguageRow
                        key={lang.name}
                        {...lang}
                        current={currentLanguage === lang.name}
                    />
                ))}
            </tbody>
        </table>
    );
}
