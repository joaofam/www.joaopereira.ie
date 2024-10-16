import {
    careerContent,
    personalContent,
    experienceContent,
    filefloContent,
    venatoContent,
} from './content';

export type FileSystemItem = {
    name: string;
    type: 'file' | 'directory';
    content?: string;
    children?: Record<string, FileSystemItem>;
};

export const fileSystem: Record<string, FileSystemItem> = {
    '/': {
        name: '/',
        type: 'directory',
        children: {
            about: {
                name: 'about',
                type: 'directory',
                children: {
                    'career.md': {
                        name: 'career.md',
                        type: 'file',
                        content: careerContent,
                    },
                    'personal.md': {
                        name: 'personal.md',
                        type: 'file',
                        content: personalContent,
                    },
                },
            },
            experience: {
                name: 'experience',
                type: 'directory',
                children: {
                    'experience.md': {
                        name: 'experience.md',
                        type: 'file',
                        content: experienceContent,
                    },
                },
            },
            projects: {
                name: 'projects',
                type: 'directory',
                children: {
                    'fileflo.md': {
                        name: 'fileflo.md',
                        type: 'file',
                        content: filefloContent,
                    },
                    'venato.md': {
                        name: 'venato.md',
                        type: 'file',
                        content: venatoContent,
                    },
                },
            },
        },
    },
};
