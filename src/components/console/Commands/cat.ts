import { parseMarkdown } from './mdParser';
import { fileSystem, FileSystemItem } from '../FileSystem/files';

export const cat = (currentDir: string, fileName: string): React.ReactNode[] => {
  const current = getDirectory(currentDir);
  if (current?.type === 'directory' && current.children && current.children[fileName]) {
    const file = current.children[fileName];
    if (file.type === 'file') {
      // Parse markdown content if it's a .md file
      return parseMarkdown(file.content || '');
    }
    return [`cat: ${fileName}: Is a directory`];
  }
  return [`cat: ${fileName}: No such file`];
};

const getDirectory = (path: string): FileSystemItem | null => {
  const parts = path.split('/').filter(Boolean);
  let current: FileSystemItem = fileSystem['/'];
  for (const part of parts) {
    if (current.type === 'directory' && current.children && current.children[part]) {
      current = current.children[part];
    } else {
      return null;
    }
  }
  return current;
};
