'use client';

import useScrollDown from '@/components/base/useScrollDown';
import { WithClassName } from '@/utils/components';
import { Profile } from '@/utils/cv';
import clsx from 'clsx';
import IconCta from '../../../components/IconCta';
import CVNav from './CVNav';
import ProfilePicture from './ProfilePicture';

export type HeaderProps = WithClassName<{
    profile: Profile;
}>;

export default function CVHeader({
    className,
    profile,
    ...props
}: HeaderProps) {
    const scrollDown = useScrollDown();

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
            <ProfilePicture profile={profile} mdSmall={scrollDown} />
            <div
                className={clsx(
                    'grid flex-1 grid-cols-[auto_minmax(auto,_1fr)] grid-rows-[auto_minmax(0,1fr)_auto] gap-200',
                    'gap-100 max-md:grid-cols-1 max-md:grid-rows-[auto_minmax(auto,_1fr)]',
                )}
            >
                <div
                    className={clsx(
                        'flex flex-col flex-nowrap gap-200',
                        'max-md:flex-row',
                    )}
                >
                    <IconCta
                        href={profile.linkedin}
                        iconClassName="icon-400 max-md:icon-350"
                        type="linkedin"
                    />
                    <IconCta
                        href={profile.linkedin}
                        iconClassName="icon-400 max-md:icon-350"
                        type="github"
                    />
                    <div className="ml-auto hidden max-md:flex">
                        <IconCta
                            href=""
                            className="cta"
                            iconClassName="icon-400 max-md:icon-350"
                            type="menu"
                            onClick={() => {}}
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-800 max-md:text-500 typo-title">
                        {profile.name}
                    </h1>
                    <h2
                        className={clsx(
                            'mt-200',
                            'text-500 max-md:text-400 typo-subtitle overflow-hidden',
                            'transition-[height]',
                            {
                                'max-md:mt-0 max-md:h-0': scrollDown,
                                'max-md:h-[2em]': !scrollDown,
                            },
                        )}
                    >
                        {profile.title}
                    </h2>
                    <div
                        className={clsx(
                            'mt-200',
                            'font-base typo-hint overflow-hidden',
                            'transition-[height]',
                            {
                                'max-md:mt-0 max-md:h-0': scrollDown,
                                'max-md:h-[2em]': !scrollDown,
                            },
                        )}
                    >
                        {profile.address}
                    </div>
                </div>

                <CVNav className="col-start-2 mt-400 max-md:hidden" />
            </div>
        </header>
    );
}
