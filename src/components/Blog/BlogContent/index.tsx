'use client';

import React, { useState } from 'react';

import { Filter } from '@/components/Blog/Tag/Filter/index';
import { SolidTag } from '@/components/Blog/Tag/Solid/index';
import { SectionHeader } from '@/components/Common/FieldSet/SectionHeader/index';
import { SearchBar } from '@/components/Common/SearchBar/index';

interface BlogItemProps {
    title: string;
    date?: string;
    tags?: string[];
    description: string;
    link?: string;
    searchTerm: string;
}

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

const blogItems = [
    {
        title: "Fileflo",
        date: "17.12.24",
        tags: ["Project", "Web Dev"],
        description: "Fileflo is a secure, decentralised file-sharing platform that uses IPFS for peer-to-peer sharing and the Ethereum blockchain for immutable file metadata. It ensures privacy with advanced encryption and offers an intuitive interface for seamless file sharing and collaboration."
    },
    {
        title: "Venato",
        date: "17.12.24",
        tags: ["Project", "Web Dev", "IoT"],
        description: "Venato is a GPS tracking app for cyclists that helps prevent bike theft by providing real-time location tracking. Users can create personalized accounts, view their bike’s location on a map, and access features like settings and help for enhanced security and peace of mind."
    }
    // Add more BlogItem objects as needed
];

export default function BlogContent() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredBlogItems = blogItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    );

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
                                    isClicked={false}
                                    isHovered={false}
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
