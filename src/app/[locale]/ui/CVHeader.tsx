'use client';

import Modal from '@/components/base/Modal';
import useScrollDown from '@/components/base/useScrollDown';
import { WithClassName } from '@/utils/components';
import { Profile } from '@/utils/cv';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import IconCta from '../../../components/IconCta';
import CVNav from './CVNav';
import CVSettings from './CVSettings';
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
    const [modalOpen, setModalOpen] = useState(false);
    useEffect(() => {
        window.addEventListener('resize', () => {
            setModalOpen(false);
        });
    }, []);

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
                            onClick={() => setModalOpen(true)}
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
                <CVSettings className="col-span-2 mt-400 max-md:hidden" />

                <Modal
                    className={clsx(
                        'h-[32rem] w-[32rem]',
                        'flex flex-col gap-200 p-300',
                    )}
                    backdropClassName="md:hidden"
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    footer={<CVSettings className="flex-1" />}
                >
                    <CVNav
                        className="flex-1 justify-center self-center pt-200"
                        onClick={() => setModalOpen(false)}
                    />
                </Modal>
            </div>
        </header>
    );
}
