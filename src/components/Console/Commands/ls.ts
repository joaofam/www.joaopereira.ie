import { fileSystem, FileSystemItem } from '../FileSystem/files';

export const ls = (currentPath: string): string => {
    const currentDir = getDirectory(currentPath);
    if (currentDir?.type === 'directory' && currentDir.children) {
        return Object.keys(currentDir.children).join('  ');
    }
    return 'ls: No such directory';
};

const getDirectory = (path: string): FileSystemItem | null => {
    const parts = path.split('/').filter(Boolean);
    let current: FileSystemItem = fileSystem['/'];
    for (const part of parts) {
        if (
            current.type === 'directory' &&
            current.children &&
            current.children[part]
        ) {
            current = current.children[part];
        } else {
            return null;
        }
    }
    return current;
};
