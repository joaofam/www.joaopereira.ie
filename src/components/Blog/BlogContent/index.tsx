'use client';

import React, { useState } from 'react';

import { Filter } from '@/components/Blog/Tag/Filter/index';
import { SolidTag } from '@/components/Blog/Tag/Solid/index';
import { SectionHeader } from '@/components/Common/FieldSet/SectionHeader/index';
import { SearchBar } from '@/components/Common/SearchBar/index';
import { BLOG_ITEMS } from '@/consts/blog';
import { BlogItemProps } from '@/types/types';

const Highlight: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
    if (!highlight.trim()) {
        return <>{text}</>;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return (
        <>
            {parts.map((part, index) =>
                regex.test(part) ? <mark key={index} className="text-primary bg-white">{part}</mark> : part
            )}
        </>
    );
};

const BlogItem: React.FC<BlogItemProps> = ({
    title,
    date,
    tags,
    description,
    link,
    searchTerm,
}) => (
    <div className="pt-6">
        <div className="grid grid-cols-3">
            <h2 className="col-span-2 text-4xl">
                <Highlight text={title} highlight={searchTerm} />
            </h2>
            {tags && (
                <div className="self-end text-right space-x-2">
                    {tags.map(tag => (
                        <SolidTag key={tag} text={tag} />
                    ))}
                </div>
            )}
        </div>
        {date && <p>{date}</p>}
        <p className="text-xs">
            <Highlight text={description} highlight={searchTerm} />
        </p>
        <div className="mt-4 border-t border-accent"></div>
    </div>
);

const filters = ['All', 'Projects', 'Tutorials', 'Reviews', 'Web Dev'];



export default function BlogContent() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilters, setActiveFilters] = useState<string[]>(["All"]);

    // Handle filter clicks
    const handleFilterClick = (filter: string) => {
        if (filter === "All") {
            setActiveFilters(["All"]); // Reset to "All"
        } else {
            setActiveFilters(prevFilters => {
                if (prevFilters.includes("All")) {
                    // Remove "All" if another filter is selected
                    return [filter];
                }
                // Toggle the clicked filter
                return prevFilters.includes(filter)
                    ? prevFilters.filter(f => f !== filter)
                    : [...prevFilters, filter];
            });
        }
    };

    // Filter blog items based on active filters and search term
    const filteredBlogItems = BLOG_ITEMS.filter(item => {
        // Check if the item's tags match the active filters or "All" is selected
        const matchesFilter = activeFilters.includes("All") || item.tags?.some(tag => activeFilters.includes(tag));
        // Check if the search term matches the title, description, or tags
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="relative flex w-full items-center justify-center font-SpaceMono tracking-tight text-foreground">
            <div className="relative w-full">
                <SectionHeader
                    title="Blog"
                    count={1}
                    className="cursor-default py-8 font-Nohemi text-4xl font-regular sm:text-4xl 2xl:text-6xl"
                />
                {/* User Query Section */}
                <div className="flex grid grid-cols-4 gap-4">
                    {/* Optional Tags */}
                    <div className="col-span-3 flex items-end">
                        <div className="flex flex-row space-x-4">
                            {filters.map(filter => (
                                <Filter
                                    key={filter}
                                    text={filter}
                                    isClicked={activeFilters.includes(filter)}
                                    isHovered={false}
                                    onClick={() => handleFilterClick(filter)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1 flex items-center">
                        {/* Search Bar */}
                        <SearchBar placeholder="Search for item..." title="search bar" onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                </div>
                {/* Divider */}
                <div className="mt-4 border-t border-accent"></div>
                {/* Blog Items */}
                <div>
                    {filteredBlogItems.map(item => (
                        <BlogItem
                            key={item.title}
                            title={item.title}
                            date={item.date}
                            tags={item.tags}
                            description={item.description}
                            searchTerm={searchTerm}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

