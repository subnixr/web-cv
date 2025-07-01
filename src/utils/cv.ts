import fs from 'fs/promises';
import yaml from 'js-yaml';
import path from 'path';

export type Profile = {
    name: string;
    title: string;
    address: string;
    image: {
        desktop: string;
        mobile: string;
    };
    imageAlt: string;
    linkedin: string;
    github: string;
};

export type SEO = {
    author: string;
    description: string;
    keywords: string[];
    openGraph: {
        title: string;
        type: string;
        image: string;
    };
};

export type Skill = {
    label: string;
    rank?: string;
    url?: string;
};

export type Language = {
    name: string;
    listen: string;
    speak: string;
    read: string;
    write: string;
};

export type Experience = {
    role: string;
    startDate: string;
    endDate: string;
    description: string;

    entity?: string;
    location?: string;
    url?: string;
    linkedin?: string;
    thumbnail?: string;
    thumbnailAlt?: string;
};

export type Curriculum = {
    profile: Profile;
    skills: {
        hard: Skill[];
        soft: Skill[];
        hobbies: Skill[];
    };
    languages: Language[];
    seo: SEO;
    experiences: Experience[];
    education: Experience[];
};

export async function readCV(filepath: string): Promise<Curriculum> {
    const p = path.join(process.cwd(), filepath);
    const content = await fs.readFile(p, 'utf-8');
    return yaml.load(content) as Curriculum;
}

export async function fileExists(filepath: string): Promise<boolean> {
    const p = path.join(process.cwd(), filepath);
    try {
        await fs.access(p);
        return true;
    } catch {
        return false;
    }
}
