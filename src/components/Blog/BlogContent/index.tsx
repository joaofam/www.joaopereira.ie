'use client';

import React, { useState } from 'react';

import { BlogItem } from '@/components/Blog/BlogItem/index';
import { Filter } from '@/components/Blog/Tag/Filter/index';
import { SectionHeader } from '@/components/Common/FieldSet/SectionHeader/index';
import { SearchBar } from '@/components/Common/SearchBar/index';
import { BLOG_FILTERS, BLOG_ITEMS } from '@/consts/blog';
import filterBlogItems from '@/utils/filter-blog-items';

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

    const filteredBlogItems = filterBlogItems(
        BLOG_ITEMS,
        activeFilters,
        searchTerm
    );

    return (
        <div className="relative flex w-full items-center justify-center font-SpaceMono tracking-tight text-foreground">
            <div className="relative w-full">
                <SectionHeader
                    title="Blog"
                    count={filteredBlogItems.length}
                    className="cursor-default font-Nohemi text-4xl font-regular sm:text-6xl 2xl:text-6xl"
                />
                {/* User Query Section */}
                <div className="flex flex-col gap-4 sm:grid sm:grid-cols-4">
                    {/* Optional Tags */}
                    <div className="flex w-full items-end sm:col-span-3">
                        <div className="flex w-full flex-row flex-wrap gap-2">
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
                    <div className="flex w-full items-center sm:col-span-1">
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
