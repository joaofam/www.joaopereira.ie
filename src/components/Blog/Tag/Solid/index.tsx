import React from 'react';

import { SolidTagProps } from '@/types/types';

export const SolidTag: React.FC<SolidTagProps> = ({ text }) => {
    return (
        <span className="border border-1 border-accent bg-gray-200 px-4 text-2xs text-foreground">
            {text}
        </span>
    );
};
