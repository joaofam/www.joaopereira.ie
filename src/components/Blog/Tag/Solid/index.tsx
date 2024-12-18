import React from 'react';

import { SolidTagProps } from '@/types/types';

export const SolidTag: React.FC<SolidTagProps> = ({ text }) => {
    return (
        <span className="px-4 text-foreground bg-gray-200 text-2xs border border-1 border-accent">
            {text}
        </span>
    );
};
