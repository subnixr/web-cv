import Icon from '@/components/base/Icon';
import { Card } from '@/components/Card';
import Cta from '@/components/Cta';
import FlagLink from '@/components/FlagLink';
import IconCta from '@/components/IconCta';
import List from '@/components/List';
import { fileExists, readCV } from '@/utils/cv';
import { LOCALES } from '@/utils/i18n/config';
import { initI18N, readTranslations } from '@/utils/i18n/server';
import CVHeader from './ui/CVHeader';
import CVLayout from './ui/CVLayout';

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
        <CVLayout
            className="bg-wallpaper2"
            header={<CVHeader profile={cv.profile} />}
        >
            <div>
                {t('common.helloWorld')}
                {cv.profile.name}
                <Icon type="sun" className="icon-300 inline-block" />
                <Card small label="label">
                    <List ordered>
                        <List.Item marker="A">
                            <Cta href="#">cta</Cta>
                        </List.Item>
                        <List.Item>
                            <Cta href="">cta (no link)</Cta>
                        </List.Item>
                        <List.Item>
                            <IconCta
                                iconClassName="icon-300"
                                href="#"
                                type="moon"
                            />
                        </List.Item>
                        <List.Item>
                            <FlagLink href="#" type="flag-it" />
                        </List.Item>
                    </List>
                </Card>
            </div>
        </CVLayout>
    );
}
