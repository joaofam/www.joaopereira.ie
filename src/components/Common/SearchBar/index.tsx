import React from 'react';

import { SearchBarProps } from '@/types/types';

export const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = 'Search for item...',
    title = 'search bar',
    onChange,
}) => {
    return (
        <div className="group relative w-full">
            <label className="text-SpaceMono absolute -top-0.5 left-2 bg-white px-1 text-2xs font-bold text-accent group-focus-within:text-primary sm:text-xs">
                {title}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                className="rounded-0 mt-2 w-full border border-accent bg-white bg-opacity-0 p-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                onChange={onChange}
            />
        </div>
    );
};
