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
        home: {
          name: 'home',
          type: 'directory',
          children: {
            user: {
              name: 'user',
              type: 'directory',
              children: {
                documents: {
                  name: 'documents',
                  type: 'directory',
                  children: {
                    'note.txt': {
                      name: 'note.txt',
                      type: 'file',
                      content: 'This is a sample note.'
                    }
                  }
                },
                'hello.txt': {
                  name: 'hello.txt',
                  type: 'file',
                  content: 'Hello, World!'
                }
              }
            }
          }
        }
      }
    }
  };
  