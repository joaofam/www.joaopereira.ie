import React from 'react';

import { CodeBlockProps } from '@/types/types';

const CodeBlock: React.FC<CodeBlockProps> = ({ name, children }) => {
    return (
        <div className="border border-accent bg-[#3b3b3b]">
            <div className="flex items-center justify-between border-b border-[#3b3b3b] bg-white p-2">
                <h3 className="text-foreground">{name}</h3>
            </div>
            <div className="overflow-x-auto p-4">{children}</div>
        </div>
    );
};

export default CodeBlock;
