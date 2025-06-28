'use client';

import {
    createContext,
    useCallback,
    useContext,
    useLayoutEffect,
    useState,
} from 'react';

export const THEME = {
    light: 'light',
    dark: 'dark',
} as const;

export type Theme = (typeof THEME)[keyof typeof THEME];

export type ThemeApi = {
    setTheme: (theme: Theme) => void;
};

type ThemeContextType = { theme: Theme } & ThemeApi;

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    setTheme: () => {},
});

export function ThemeProvider({ children }) {
    const [theme, _setTheme] = useState<Theme>(THEME.light);

    // const [theme, _setTheme] = useState<Theme>(() => {
    //     let t: Theme = THEME.light;
    //     if (typeof window !== 'undefined') {
    //         t = localStorage.getItem('theme') as Theme;
    //     }
    //     return t;
    // });

    const setTheme = useCallback(
        (theme: Theme) => {
            document.documentElement.dataset.theme = theme;
            localStorage.setItem('theme', theme);
            console.log('wrote theme', theme);
            _setTheme(theme);
        },
        [_setTheme],
    );

    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme') as Theme | undefined;
            const preferred = window.matchMedia('prefers-color-scheme:dark')
                .matches
                ? THEME.dark
                : THEME.light;
            setTheme(saved ?? preferred);
        }
    }, [setTheme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default function useTheme(): [Theme, (theme: Theme) => void] {
    const { theme, setTheme } = useContext(ThemeContext);
    return [theme, setTheme];
}
