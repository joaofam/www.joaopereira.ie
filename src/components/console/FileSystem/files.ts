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
                        content: '# Tech Career Summary\n\nAs a software engineer with 4 years of Full Stack development (university and work), I have defined my skills in application and CLI development as well as infrastructure.\n\n I am particularly interested in Linux and Open Source technologies, though my interests span across various platforms and technologies (just not Haskell and Assembly). My approach combines technical proficiency with a keen eye for design, allowing me to create solutions that are not only functional but also visually appealing.'
                    },
                    'personal.md': {
                        name: 'personal.md',
                        type: 'file',
                        content: '## Personal Information\n\nThis is the _personal_ information.\n\n---\n\n'
                    }
                }
            },
            experience: {
                name: 'experience',
                type: 'directory',
                children: {
                    'experience.md': {
                        name: 'experience.md',
                        type: 'file',
                        content: '### Experience Information\n\nThis is the experience information.'
                    }
                }
            },
            projects: {
                name: 'projects',
                type: 'directory',
                children: {
                    'fileflo.md': {
                        name: 'fileflo.md',
                        type: 'file',
                        content: 'Details about the fileflo project.\n\n**Key feature**: simplicity and power.'
                    }
                }
            }
        }
    }
};

  