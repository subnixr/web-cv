import Icon from '@/components/base/Icon';
import { LOCALES } from '@/utils/i18n/config';
import { initI18N, readTranslations } from '@/utils/i18n/server';

export async function generateStaticParams() {
    return LOCALES.map(locale => ({ locale }));
}

export async function generateMetadata({ params }) {
    const { locale } = await params;
    return { lang: locale };
}

type Params = { locale: string };

export type PageProps = Readonly<{
    params: Promise<Params>;
}>;

export default async function Page({ params }: PageProps) {
    const { locale } = await params;

    const translations = await readTranslations([...LOCALES]);

    const t = initI18N(translations, locale);

    return (
        <div>
            {t('common.helloWorld')}
            <Icon type="sun" className="icon-300 inline-block" />
        </div>
    );
}
