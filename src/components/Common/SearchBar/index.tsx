import React from 'react';

import { SearchBarProps } from '@/types/types';

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search for item...", title = "search bar", onChange }) => {
    return (
        <div className="relative w-full group">
            <label className="absolute -top-0.5 left-2 bg-white px-1 text-xs font-bold text-SpaceMono group-focus-within:text-primary">
                {title}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full p-2 border border-foreground bg-opacity-0 bg-white mt-2 rounded focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                onChange={onChange}
            />
        </div>
    );
};