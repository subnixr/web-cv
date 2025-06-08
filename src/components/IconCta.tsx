import Icon, { IconProps } from '@/components/base/Icon';
import Cta, { CtaProps } from '@/components/Cta';
import clsx from 'clsx';

type IconCtaProps = Omit<CtaProps, 'children'> &
    IconProps & {
        iconClassName?: string;
    };

export default function IconCta({
    href,
    className,
    type,
    iconClassName,
    ...props
}: IconCtaProps) {
    return (
        <Cta
            {...props}
            noIcon
            href={href}
            className={clsx(
                'block overflow-hidden rounded-full',
                'hover:text-primary focus:text-primary',
                'border-none hover:border-none focus:border-none',
                className,
            )}
        >
            <Icon type={type} className={iconClassName} />
        </Cta>
    );
}
