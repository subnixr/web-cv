'use client';

import { WithClassName } from '@/utils/components';
import { Experience as ExperienceType } from '@/utils/cv';
import clsx from 'clsx';
import { parse } from 'date-fns';
import _ from 'lodash';
import { ReactNode, useMemo } from 'react';
import CVSortInput from './CVSortInput';
import ExperienceCard from './ExperienceCard';
import scrollToSection from './scrollToSection';
import { TimelineSection } from './Timeline';
import useCVState, { CVSection, SortOrder } from './useCVState';

const parseDate = (datestr: string) =>
    parse(datestr, datestr.length === 4 ? 'yyyy' : 'yyyy-mm', new Date());

export type ExperienceProps = WithClassName<{
    experiences: ExperienceType[];
    section: CVSection;
    title?: ReactNode;
}>;

export default function CVExperiences({
    experiences,
    section,
    title,
    className,
    ...props
}: ExperienceProps) {
    const [{ sorting }, { setSorting, setCurrent }] = useCVState();

    const sorted = useMemo(
        () =>
            _.orderBy(
                experiences,
                exp => parseDate(exp.startDate),
                sorting[section],
            ),
        [experiences, section, sorting],
    );

    const handleSortChange = (v: SortOrder) => {
        setSorting(section, v);
        scrollToSection(section ?? '').then(() => setCurrent(section));
    };

    return (
        <TimelineSection
            section={section}
            title={title}
            cta={
                <CVSortInput
                    name={`sort-${section}`}
                    value={sorting[section]}
                    onChange={handleSortChange}
                />
            }
        >
            <div
                {...props}
                className={clsx('flex flex-col gap-400', className)}
            >
                {sorted.map(exp => (
                    <ExperienceCard
                        key={`${exp.startDate}-${exp.endDate}`}
                        {...exp}
                    />
                ))}
            </div>
        </TimelineSection>
    );
}
