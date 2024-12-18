'use client';

import React, { useState } from 'react';

import { Filter } from '@/components/Blog/Tag/Filter/index';
import { SolidTag } from '@/components/Blog/Tag/Solid/index';
import { SectionHeader } from '@/components/Common/FieldSet/SectionHeader/index';
import { CustomLink } from '@/components/Common/Link';
import { SearchBar } from '@/components/Common/SearchBar/index';
import { BLOG_FILTERS, BLOG_ITEMS } from '@/consts/blog';
import { BlogItemProps } from '@/types/types';

const Highlight: React.FC<{ text: string; highlight: string }> = ({
    text,
    highlight,
}) => {
    if (!highlight.trim()) {
        return <>{text}</>;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return (
        <>
            {parts.map((part, index) =>
                regex.test(part) ? (
                    <mark key={index} className="bg-white text-primary">
                        {part}
                    </mark>
                ) : (
                    part
                )
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
            <CustomLink className="col-span-2 text-4xl" href={link} blank={false}>
                <div className="col-span-2 text-4xl">
                    <Highlight text={title} highlight={searchTerm} />
                </div>
            </CustomLink>
            {tags && (
                <div className="space-x-2 self-end text-right">
                    {tags.map(tag => (
                        <SolidTag key={tag} text={tag} />
                    ))}
                </div>
            )}
        </div>
        {date && <p>{date}</p>}
        <p className="text-xs pt-2">
            <Highlight text={description} highlight={searchTerm} />
        </p>
        <div className="mt-4 border-t border-accent"></div>
    </div>
);

export default function BlogContent() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilters, setActiveFilters] = useState<string[]>(['All']);

    // Handle filter clicks
    const handleFilterClick = (filter: string) => {
        if (filter === 'All') {
            setActiveFilters(['All']); // Reset to "All"
        } else {
            setActiveFilters(prevFilters => {
                if (prevFilters.includes('All')) {
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
        const matchesFilter =
            activeFilters.includes('All') ||
            item.tags?.some(tag => activeFilters.includes(tag));
        // Check if the search term matches the title, description, or tags
        const matchesSearch =
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags?.some(tag =>
                tag.toLowerCase().includes(searchTerm.toLowerCase())
            );
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="relative flex w-full items-center justify-center font-SpaceMono tracking-tight text-foreground">
            <div className="relative w-full">
                <SectionHeader
                    title="Blog"
                    count={filteredBlogItems.length}
                    className="cursor-default font-Nohemi text-4xl font-regular sm:text-6xl 2xl:text-6xl"
                />
                {/* User Query Section */}
                <div className="flex grid grid-cols-4 gap-4">
                    {/* Optional Tags */}
                    <div className="col-span-3 flex items-end">
                        <div className="flex flex-row flex-wrap space-x-4">
                            {BLOG_FILTERS.map(filter => (
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
                        <SearchBar
                            placeholder="Search for item..."
                            title="search bar"
                            onChange={e => setSearchTerm(e.target.value)}
                        />
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
                            link={item.link}
                            searchTerm={searchTerm}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
