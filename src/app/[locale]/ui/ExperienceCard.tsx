'use client';

import RichTextContent from '@/components/base/RichTextContent';
import StaticImage from '@/components/base/StaticImage';
import { Card } from '@/components/Card';
import Cta from '@/components/Cta';
import { WithClassName } from '@/utils/components';
import { Experience } from '@/utils/cv';
import useI18N from '@/utils/i18n';
import clsx from 'clsx';
import IconCta from '../../../components/IconCta';

export type ExperienceCardProps = WithClassName<Experience>;

export default function ExperienceCard({
    role,
    startDate,
    endDate,
    description,

    entity,
    location,
    url,
    linkedin,
    thumbnail,
    thumbnailAlt,

    className,
    ...props
}: ExperienceCardProps) {
    const t = useI18N();

    const fmtDate = date => (date === 'now' ? t('timeline.now') : date);

    const labelStr =
        startDate === endDate || !endDate
            ? fmtDate(startDate)
            : `${fmtDate(startDate)} ~ ${fmtDate(endDate)}`;

    return (
        <Card {...props} className={clsx('', className)} label={labelStr} small>
            <div
                className={clsx(
                    'flex flex-row gap-200',
                    'mb-200 pb-200',
                    'border-b-border border-b-[.1rem]',
                )}
            >
                {thumbnail && (
                    <StaticImage
                        className={clsx(
                            'flex-[0_0_auto]',
                            'h-[8rem] w-[8rem]',
                            'border-border rounded-full border-[.1rem]',
                        )}
                        src={thumbnail}
                        alt={thumbnailAlt ?? entity ?? 'entity-logo'}
                        width={200}
                        height={200}
                    />
                )}
                {(linkedin || entity || location) && (
                    <div className="flex-1 gap-100">
                        {(linkedin || entity) && (
                            <div className="mb-300 flex flex-row items-start gap-200">
                                {linkedin && (
                                    <IconCta
                                        className="icon-300 flex-[0_0_auto]"
                                        href={linkedin}
                                        type="linkedin"
                                    />
                                )}
                                {entity && (
                                    <Cta className="mr-auto" href={url ?? ''}>
                                        <span className="typo-title text-left">
                                            {entity}
                                        </span>
                                    </Cta>
                                )}
                            </div>
                        )}
                        <div className="typo-subtitle mb-200">{role}</div>
                        {location && (
                            <div className="typo-hint">{location}</div>
                        )}
                    </div>
                )}
            </div>
            <RichTextContent className={clsx('px-400 pt-200 max-md:px-200')}>
                {description}
            </RichTextContent>
        </Card>
    );
}
