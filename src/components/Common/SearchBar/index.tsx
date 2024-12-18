import React from 'react';

import { SearchBarProps } from '@/types/types';

export const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = 'Search for item...',
    title = 'search bar',
    onChange,
}) => {
    return (
        <div className="group relative w-full">
            <label className="text-SpaceMono absolute -top-0.5 left-2 text-accent bg-white px-1 text-xs font-bold group-focus-within:text-primary">
                {title}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                className="mt-2 w-full rounded-0 border border-accent bg-white bg-opacity-0 p-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                onChange={onChange}
            />
        </div>
    );
};
