'use client';

import { WithClassName } from '@/utils/components';
import { Profile } from '@/utils/cv';
import clsx from 'clsx';

export type HeaderProps = WithClassName<{
    profile: Profile;
}>;

export default function CVHeader({
    className,
    profile,
    ...props
}: HeaderProps) {
    return (
        <header
            data-header
            {...props}
            className={clsx(
                'h-full w-full overflow-auto',
                'flex flex-col gap-200 p-200',
                'gap-100 p-100 max-md:flex-row',
                'border-l-primary bg-bg border-l-[.8rem]',
                'max-md:overflow-hidden',
                'max-md:border-b-primary max-md:border-b-[.3rem] max-md:border-l-0',
                className,
            )}
        >
            header
        </header>
    );
}
