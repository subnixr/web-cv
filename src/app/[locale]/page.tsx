import Icon from '@/components/base/Icon';
import { fileExists, readCV } from '@/utils/cv';
import { LOCALES } from '@/utils/i18n/config';
import { initI18N, readTranslations } from '@/utils/i18n/server';

export async function generateStaticParams() {
    const res = await Promise.all(
        ([...LOCALES] as string[]).map(async locale => {
            const exists = await fileExists(
                `src/app/[locale]/data/${locale}.yml`,
            );
            return !exists ? null : { locale };
        }),
    );
    return res.filter(Boolean);
}

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const data = await readCV(`src/app/[locale]/data/${locale}.yml`);
    return {
        ...data.seo,
        lang: locale,
    };
}

type Params = { locale: string };

export type PageProps = Readonly<{
    params: Promise<Params>;
}>;

export default async function Page({ params }: PageProps) {
    const { locale } = await params;

    const [translations, cv] = await Promise.all([
        readTranslations([...LOCALES]),
        readCV(`src/app/[locale]/data/${locale}.yml`),
    ]);

    const t = initI18N(translations, locale);

    return (
        <div>
            {t('common.helloWorld')}
            {cv.profile.name}
            <Icon type="sun" className="icon-300 inline-block" />
        </div>
    );
}
