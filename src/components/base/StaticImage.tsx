import { Breakpoint, BREAKPOINTS } from '@/utils/breakpoints';
import { WithClassName } from '@/utils/components';
import clsx from 'clsx';
import { ReactNode } from 'react';

export type Source = {
    srcSet: string;
    type?: string;
    media?: string;
};

export type BreakpointsSources = {
    [bp in Breakpoint]?: Source;
};

export type StaticImageProps = WithClassName<{
    pictureProps?: any;
    src: string;
    alt: string;
    width: number;
    height: number;
    sources?: Source[];
    breakPoints?: BreakpointsSources;
}>;

export default function StaticImage({
    className,
    pictureProps,
    src,
    alt,
    width,
    height,
    sources = [],
    breakPoints = {},
    ...props
}: StaticImageProps) {
    return (
        <picture
            {...pictureProps}
            className={clsx('', pictureProps?.className)}
        >
            {Object.keys(BREAKPOINTS).reduce((r, bpname) => {
                if (!breakPoints[bpname]) return r;
                return [
                    ...r,
                    <source
                        key={bpname}
                        {...breakPoints[bpname]}
                        media={BREAKPOINTS[bpname]}
                    />,
                ];
            }, [] as ReactNode[])}
            {sources.map((src, index) => (
                <source key={`${index}-${src.srcSet}`} {...src} />
            ))}
            <img
                className={clsx('', className)}
                loading="lazy"
                {...props}
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </picture>
    );
}
