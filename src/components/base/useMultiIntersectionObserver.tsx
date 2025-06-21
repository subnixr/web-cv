'use client';

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';

export type EntriesMap = Map<Element, IntersectionObserverEntry>;

export type MultiIntersectionObserverApi = {
    observe: (elem?: Element) => void;
    unobserve: (elem?: Element) => void;
};

type MultiIntersectionObserverContextType = MultiIntersectionObserverApi & {
    entries: EntriesMap;
};

const MultiIntersectionObserverContext =
    createContext<MultiIntersectionObserverContextType>({
        entries: new Map(),
        observe: () => {},
        unobserve: () => {},
    });

export function MultiIntersectionObserverProvider({ options, children }) {
    const observerRef = useRef<IntersectionObserver>(null);
    const entriesRef = useRef<EntriesMap>(new Map()); // prevents unnecessary useEffect setups
    const [entries, setEntries] = useState<EntriesMap>(entriesRef.current);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(es => {
            const nextMap = new Map([...entriesRef.current]);
            es.forEach(e => {
                if (e.target === undefined) debugger;
                if (e.target) nextMap.set(e.target, e);
            });
            entriesRef.current = nextMap;
            setEntries(entriesRef.current);
        }, options);

        return () => {
            observerRef?.current?.disconnect();
            observerRef.current = null;
        };
    }, [observerRef, entriesRef, options]);

    const observe = useCallback(
        (elem?: Element) => {
            if (!!observerRef.current && !!elem)
                observerRef.current.observe(elem);
        },
        [observerRef],
    );

    const unobserve = useCallback(
        (elem?: Element) => {
            if (!!observerRef.current && !!elem)
                observerRef.current.unobserve(elem);
        },
        [observerRef],
    );

    return (
        <MultiIntersectionObserverContext.Provider
            value={{
                entries,
                observe,
                unobserve,
            }}
        >
            {children}
        </MultiIntersectionObserverContext.Provider>
    );
}

export default function useMultiIntersectionObserver(): [
    EntriesMap,
    MultiIntersectionObserverApi,
] {
    const { entries, observe, unobserve } = useContext(
        MultiIntersectionObserverContext,
    );

    return [entries, { observe, unobserve }];
}
