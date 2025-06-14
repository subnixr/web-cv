import { Card } from '@/components/Card';
import Cta from '@/components/Cta';
import List from '@/components/List';
import { fileExists, readCV } from '@/utils/cv';
import { LOCALES } from '@/utils/i18n/config';
import { initI18N, readTranslations } from '@/utils/i18n/server';
import BackToTop from './ui/BackToTop';
import CVHeader from './ui/CVHeader';
import CVLayout from './ui/CVLayout';
import LanguagesTable from './ui/LanguagesTable';
import LastUpdated from './ui/LastUpdated';
import ListCard from './ui/ListCard';
import Timeline, { TimelineSection } from './ui/Timeline';

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
            <Timeline>
                <TimelineSection section="skills">
                    <div className="skills">
                        <ListCard
                            grid
                            label={t('timeline.hardSkills')}
                            className="skills__hard"
                        >
                            {cv.skills.hard.map(({ label, rank }) => (
                                <List.Item
                                    key={label}
                                    marker={rank}
                                    className="items-start"
                                >
                                    {label}
                                </List.Item>
                            ))}
                        </ListCard>
                        <Card
                            small
                            label={t('timeline.languages')}
                            className="skills__lang h-full"
                        >
                            <LanguagesTable
                                languages={cv.languages ?? []}
                                currentLanguage={locale}
                            />
                        </Card>
                        <ListCard
                            label={t('timeline.softSkills')}
                            className="skills__soft"
                        >
                            {cv.skills.soft.map(({ label }) => (
                                <List.Item key={label} className="items-start">
                                    {label}
                                </List.Item>
                            ))}
                        </ListCard>
                        <ListCard
                            label={t('timeline.hobbies')}
                            className="skills__proj"
                        >
                            {cv.skills.hobbies.map(({ label, url }) => (
                                <List.Item key={label} className="items-start">
                                    {!url ? (
                                        label
                                    ) : (
                                        <Cta href={url}>{label}</Cta>
                                    )}
                                </List.Item>
                            ))}
                        </ListCard>
                    </div>
                </TimelineSection>
                <LastUpdated
                    label={t('timeline.lastUpdate')}
                    date={new Date()}
                />
                <BackToTop />
            </Timeline>
        </CVLayout>
    );
}
