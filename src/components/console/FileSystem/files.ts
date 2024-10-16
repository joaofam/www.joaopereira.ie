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
                        content: '# career Information\n\nThis is the **career** information.\n\n===Important Highlight===\n\n---\n\nMore details here...'
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

  