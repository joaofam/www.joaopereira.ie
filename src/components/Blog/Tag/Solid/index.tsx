import React from 'react';

interface SolidTagProps {
    text: string;
}

export const SolidTag: React.FC<SolidTagProps> = ({ text }) => {
    return (
        <span className="px-4 text-accent text-xs border border-1 border-accent">
            {text}
        </span>
    );
};

