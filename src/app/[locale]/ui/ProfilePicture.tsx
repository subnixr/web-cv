import StaticImage from '@/components/base/StaticImage';
import { WithClassName } from '@/utils/components';
import { Profile } from '@/utils/cv';
import clsx from 'clsx';

export type ProfilePictureProps = WithClassName<{
    profile: Profile;
    mdSmall?: boolean;
}>;

export default function ProfilePicture({
    profile,
    mdSmall = false,
    className,
}: ProfilePictureProps) {
    return (
        <StaticImage
            className={clsx(
                'border-primary mb-400 self-center rounded-full border-[.3rem]',
                'max-md:mb-0 max-md:max-h-[12rem] max-md:max-w-[12rem]',
                'transition-all',
                {
                    'max-md:h-[6.4rem] max-md:w-[6.4rem] max-md:border-[.2rem]':
                        mdSmall,
                    'max-md:h-[12rem] max-md:w-[12rem] max-md:border-[.3rem]':
                        !mdSmall,
                },
                className,
            )}
            pictureProps={{
                className: clsx('max-md:h-fit'),
            }}
            src={profile.image.desktop}
            alt="profile picture"
            width={1080}
            height={1080}
            breakPoints={{
                'max-md': { srcSet: profile.image.mobile },
            }}
        />
    );
}
