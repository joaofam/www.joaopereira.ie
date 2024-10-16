import { fileSystem, FileSystemItem } from '../FileSystem/files';

export const cd = (currentDir: string, targetDir: string) => {
    if (targetDir === '..') {
        const newPath = currentDir.split('/').slice(0, -1).join('/');
        return { newDir: newPath || '/', error: null };
    } else if (targetDir === '/') {
        return { newDir: '/', error: null };
    }

    const newPath = `${currentDir}/${targetDir}`.replace(/\/+/g, '/');
    const target = getDirectory(newPath);

    if (target?.type === 'directory') {
        return { newDir: newPath, error: null };
    } else {
        return {
            newDir: currentDir,
            error: `cd: ${targetDir}: No such directory`,
        };
    }
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
