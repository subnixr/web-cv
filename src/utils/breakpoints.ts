'use client';

// TODO: read tailwind config somehow
export const BREAKPOINTS = {
    'sm': '(min-width: 0rem)',
    'md': '(min-width: 48rem)',
    'lg': '(min-width: 64rem)',
    'xl': '(min-width: 80rem)',
    '2xl': '(min-width: 96rem)',

    'max-sm': '(max-width: 0rem)',
    'max-md': '(max-width: 48rem)',
    'max-lg': '(max-width: 64rem)',
    'max-xl': '(max-width: 80rem)',
    'max-2xl': '(max-width: 96rem)',
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

export default function matchMedia(bp: Breakpoint | string) {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(BREAKPOINTS[bp] ?? bp).matches;
}
