'use client';

import { useEffect, useRef, useState } from 'react';

export default function useScrollDown() {
    const lastScroll = useRef(0);
    const [scrollDown, setScrollDown] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            setScrollDown(window.scrollY > lastScroll.current);
            lastScroll.current = window.scrollY;
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return scrollDown;
}
