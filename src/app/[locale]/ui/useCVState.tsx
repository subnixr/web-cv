'use client';

import { createContext, useCallback, useContext, useState } from 'react';

export const SORT_ORDER = {
    asc: 'asc',
    desc: 'desc',
} as const;

export type SortOrder = (typeof SORT_ORDER)[keyof typeof SORT_ORDER];

export const CV_SECTIONS = ['skills', 'experiences', 'education'] as const;

export type CVSection = 'skills' | 'experiences' | 'education';

export type CVState = {
    sorting: {
        experiences: SortOrder;
        education: SortOrder;
    };
    current: CVSection;
};

export type CVApi = {
    setSorting: (section: CVSection, value: SortOrder) => void;
    setCurrent: (section: CVSection) => void;
};

type CVContextType = CVState & CVApi;

const CVContext = createContext<CVContextType>({
    current: 'skills',
    sorting: {
        experiences: SORT_ORDER.desc,
        education: SORT_ORDER.desc,
    },
    setCurrent: () => {},
    setSorting: () => {},
});

export function CVContextProvider({ children }) {
    const [state, setState] = useState<CVState>({
        current: 'skills',
        sorting: {
            experiences: SORT_ORDER.desc,
            education: SORT_ORDER.desc,
        },
    });

    const setSorting = useCallback(
        (section: CVSection | null, value: SortOrder) => {
            if (!section) return;
            setState(s => ({
                ...s,
                sorting: { ...s.sorting, [section]: value },
            }));
        },
        [setState],
    );

    const setCurrent = useCallback(
        (current: CVSection) => {
            setState(s => ({ ...s, current }));
            window.history.pushState({}, '', `#${current}`);
        },
        [setState],
    );

    return (
        <CVContext.Provider value={{ ...state, setSorting, setCurrent }}>
            {children}
        </CVContext.Provider>
    );
}

export default function useCVState(): [CVState, CVApi] {
    const { sorting, current, setSorting, setCurrent } = useContext(CVContext);

    return [
        { sorting, current },
        { setSorting, setCurrent },
    ];
}
