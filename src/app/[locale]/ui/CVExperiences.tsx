'use client';

import { WithClassName } from '@/utils/components';
import { Experience as ExperienceType } from '@/utils/cv';
import clsx from 'clsx';
import { ReactNode } from 'react';
import ExperienceCard from './ExperienceCard';
import { TimelineSection } from './Timeline';

export type ExperienceProps = WithClassName<{
    experiences: ExperienceType[];
    section: string;
    title?: ReactNode;
}>;

export default function CVExperiences({
    experiences,
    section,
    title,
    className,
    ...props
}: ExperienceProps) {
    return (
        <TimelineSection section={section} title={title}>
            <div
                {...props}
                className={clsx('flex flex-col gap-400', className)}
            >
                {experiences.map(exp => (
                    <ExperienceCard
                        key={`${exp.startDate}-${exp.endDate}`}
                        {...exp}
                    />
                ))}
            </div>
        </TimelineSection>
    );
}
