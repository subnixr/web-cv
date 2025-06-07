import { WithClassName } from '@/utils/components';
import clsx from 'clsx';

export const ICONS = {
    EXTERNAL_LINK: 'external-link',
    ARROW_UP: 'arrow-up',
    MENU: 'menu',
    CLOSE: 'close',
    CHEVRON_DOWN: 'chevron-down',

    SUN: 'sun',
    MOON: 'moon',

    LISTEN: 'listen',
    SPEAK: 'speak',
    READ: 'read',
    WRITE: 'write',

    FLAG_ES: 'flag-es',
    FLAG_EN: 'flag-en',
    FLAG_IT: 'flag-it',

    GITHUB: 'github',
    LINKEDIN: 'linkedin',
} as const;

export type IconType = (typeof ICONS)[keyof typeof ICONS];

export type IconProps = WithClassName<{
    type: IconType;
}>;

export default function Icon({ className, type, ...props }: IconProps) {
    return (
        <svg {...props} className={clsx('', className)}>
            <use href={`#icon-${type}`} />
        </svg>
    );
}

export function IconContainer({ ...props }) {
    return (
        <svg {...props} style={{ display: 'none' }}>
            <defs
                dangerouslySetInnerHTML={{
                    __html: [
                        `<symbol id="icon-external-link" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <line x1="7" x2="17" y1="17" y2="7"/>
                            <polyline points="7 7 17 7 17 17"/>
                        </symbol>`,
                        `<symbol id="icon-arrow-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <line x1="12" x2="12" y1="19.071068" y2="4.9289322" id="line1" />
                            <polyline points="7 7 17 7 17 17" id="polyline1" transform="rotate(-45,12,12)" />
                        </symbol>`,
                        `<symbol id="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <line x1="3" x2="21" y1="12" y2="12"/>
                            <line x1="3" x2="21" y1="6" y2="6"/>
                            <line x1="3" x2="21" y1="18" y2="18"/>
                        </symbol>`,
                        `<symbol id="icon-close" vsrc/langs/i18n.csviewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <line x1="18" x2="6" y1="6" y2="18"/>
                            <line x1="6" x2="18" y1="6" y2="18"/>
                        </symbol>`,
                        `<symbol id="icon-chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"/>
                        </symbol>`,

                        `<symbol id="icon-sun" viewBox="0 0 256 256">
                            <circle cx="128" cy="128" fill="none" r="60" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="128" x2="128" y1="36" y2="16"/>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="62.9" x2="48.8" y1="62.9" y2="48.8"/>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="36" x2="16" y1="128" y2="128"/>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="62.9" x2="48.8" y1="193.1" y2="207.2"/>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="128" x2="128" y1="220" y2="240"/>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="193.1" x2="207.2" y1="193.1" y2="207.2"/>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="220" x2="240" y1="128" y2="128"/>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="193.1" x2="207.2" y1="62.9" y2="48.8"/>
                        </symbol>`,
                        `<symbol id="icon-moon" viewBox="0 0 256 256">
                            <path d="M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                        </symbol>`,

                        `<symbol id="icon-listen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" >
                            <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                        </symbol>`,
                        `<symbol id="icon-speak" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                            <line x1="12" x2="12" y1="19" y2="23"/>
                            <line x1="8" x2="16" y1="23" y2="23"/>
                        </symbol>`,
                        `<symbol id="icon-read" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                        </symbol>`,
                        `<symbol id="icon-write" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M12 20h9"/>
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                        </symbol>`,

                        `<symbol id="icon-flag-es" viewBox="0 0 512 512">
                            <path fill="#AA151B" d="M0 0h512v512H0z"/>
                            <path fill="#F1BF00" d="M0 128h512v256H0z"/>
                        </symbol>`,
                        `<symbol id="icon-flag-en" viewBox="0 0 512 512">
                            <path fill="#012169" d="M0 0h512v512H0z"/>
                            <path fill="#FFF" d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"/>
                            <path fill="#C8102E" d="m184 324 11 34L42 512H0v-3zm124-12 54 8 150 147v45zM512 0 320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z"/>
                            <path fill="#FFF" d="M176 0v512h160V0zM0 176v160h512V176z"/>
                            <path fill="#C8102E" d="M0 208v96h512v-96zM208 0v512h96V0z"/>
                        </symbol>`,
                        `<symbol id="icon-flag-it" viewBox="0 0 512 512">
                            <g fill-rule="evenodd" stroke-width="1pt">
                                <path fill="#fff" d="M0 0h512v512H0z"/>
                                <path fill="#009246" d="M0 0h170.7v512H0z"/>
                                <path fill="#ce2b37" d="M341.3 0H512v512H341.3z"/>
                            </g>
                        </symbol>`,

                        `<symbol id="icon-github" viewBox="0 0 128 128">
                            <rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128" width="128"/>
                            <path clip-rule="evenodd" d="M63.996,1.333C28.656,1.333,0,30.099,0,65.591 c0,28.384,18.336,52.467,43.772,60.965c3.2,0.59,4.368-1.394,4.368-3.096c0-1.526-0.056-5.566-0.088-10.927 c-17.804,3.883-21.56-8.614-21.56-8.614c-2.908-7.421-7.104-9.397-7.104-9.397c-5.812-3.988,0.44-3.907,0.44-3.907 c6.42,0.454,9.8,6.622,9.8,6.622c5.712,9.819,14.98,6.984,18.628,5.337c0.58-4.152,2.236-6.984,4.064-8.59 c-14.212-1.622-29.152-7.132-29.152-31.753c0-7.016,2.492-12.75,6.588-17.244c-0.66-1.626-2.856-8.156,0.624-17.003 c0,0,5.376-1.727,17.6,6.586c5.108-1.426,10.58-2.136,16.024-2.165c5.436,0.028,10.912,0.739,16.024,2.165 c12.216-8.313,17.58-6.586,17.58-6.586c3.492,8.847,1.296,15.377,0.636,17.003c4.104,4.494,6.58,10.228,6.58,17.244 c0,24.681-14.964,30.115-29.22,31.705c2.296,1.984,4.344,5.903,4.344,11.899c0,8.59-0.08,15.517-0.08,17.626 c0,1.719,1.152,3.719,4.4,3.088C109.68,118.034,128,93.967,128,65.591C128,30.099,99.344,1.333,63.996,1.333" fill="currentColor" fill-rule="evenodd"/>
                        </symbol>`,
                        `<symbol id="icon-linkedin" viewBox="0 0 512 512" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                            <path fill="currentColor" d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z"/>
                        </symbol>`,
                    ],
                }}
            />
        </svg>
    );
}
