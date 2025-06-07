export type Translations = any;

export function initI18N(translations: Translations, lang: string) {
    return function t(path: string): string {
        const result = path.split('.').reduce((acc, key) => {
            if (acc && typeof acc === 'object' && key in acc) {
                return acc[key];
            }
            return null;
        }, translations[lang]);

        if (!result) {
            console.warn(`Path "${path}" not found in dictionary.`);
            return path;
        }

        if (typeof result !== 'string') {
            throw new Error(
                `Expected string at path "${path}", but found ${typeof result}.`,
            );
        }

        return result;
    };
}
