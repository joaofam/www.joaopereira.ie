import React from 'react';

import { CodeBlockProps } from '@/types/types';

const CodeBlock: React.FC<CodeBlockProps> = ({ name, children }) => {
    return (
        <div className="border border-accent bg-[#3b3b3b]">
            <div className="flex justify-between items-center border-b border-[#3b3b3b] bg-white p-2">
                <h3 className="text-foreground">{name}</h3>
            </div>
            <div className="p-4 overflow-x-auto">{children}</div>
        </div>
    );
};

export default CodeBlock;
