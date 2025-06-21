'use client';

import { BREAKPOINTS } from '@/utils/breakpoints';

function waitForScrollEnd(target = window, timeout = 50): Promise<void> {
    return new Promise(resolve => {
        let scrollTimeout: any;

        function onScroll() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                target.removeEventListener('scroll', onScroll);
                resolve();
            }, timeout);
        }

        target.addEventListener('scroll', onScroll);
    });
}

export default function scrollToSection(section: string): Promise<void> {
    const isMobile = window.matchMedia(BREAKPOINTS['max-md']).matches;

    const sectionElem = document.querySelector<HTMLElement>(`#${section}`);
    const headerOffset = !isMobile
        ? 0
        : window.scrollY < (sectionElem?.offsetTop ?? 0)
          ? 83
          : 153;
    const top = (sectionElem?.offsetTop ?? 0) - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
    window.history.pushState({}, '', `#${section}`);

    return waitForScrollEnd();
}
