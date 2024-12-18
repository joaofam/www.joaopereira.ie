import React from 'react';

interface SearchBarProps {
    placeholder?: string;
    title?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search for item...", title = "search bar", onChange }) => {
    return (
        <div className="relative w-full">
            <label className="absolute -top-0.5 left-2 bg-white px-1 text-xs font-bold text-SpaceMono">{title}</label>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full p-2 border-1 border-foreground bg-white mt-2 hover:rounded-0 hover:border-1 hover:border-primary focus:border-primary"
                onChange={onChange}
            />
        </div>
    );
};
