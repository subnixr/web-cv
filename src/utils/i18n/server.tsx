import fs from 'fs/promises';
import path from 'path';
import { Translations } from './common';

export { initI18N } from './common';

export async function readTranslations(langs: string[]): Promise<Translations> {
    const baseDir = path.resolve('src/langs');

    const readSection = async (lang: string, file: string) => {
        const sectionName = path.basename(file, '.json');
        const filePath = path.join(baseDir, lang, file);
        const content = await fs.readFile(filePath, 'utf-8');
        return [sectionName, JSON.parse(content)];
    };

    const readLang = async (lang: string) => {
        const langDir = path.join(baseDir, lang);
        const files = await fs.readdir(langDir);
        const jsonFiles = files.filter(file => file.endsWith('.json'));

        const sectionsEntries = await Promise.all(
            jsonFiles.map(file => readSection(lang, file)),
        );

        return [lang, Object.fromEntries(sectionsEntries)];
    };

    const langsEntries = await Promise.all(langs.map(readLang));
    return Object.fromEntries(langsEntries);
}
