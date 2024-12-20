'use client';

import React, { useState } from 'react';

import { Highlight } from '@/components/Blog/Highlight';
import { SolidTag } from '@/components/Blog/Tag/Solid/index';
import { CustomLink } from '@/components/Common/Link';
import { BlogItemProps } from '@/types/types';

export const BlogItem: React.FC<BlogItemProps> = ({
    title,
    date,
    tags,
    description,
    link,
    searchTerm,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 100; // Maximum length of description before truncation

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    const truncatedDescription = description.length > maxLength
        ? description.substring(0, maxLength) + '...'
        : description;

    return (
        <div className="pt-6">
            <div className="grid grid-cols-3">
                <CustomLink
                    className="col-span-2 text-4xl"
                    href={link}
                    blank={false}
                >
                    <div className="col-span-2 text-2xl sm:text-4xl">
                        <Highlight text={title} highlight={searchTerm} />
                    </div>
                </CustomLink>
                {tags && (
                    <div className="hidden sm:block space-x-2 self-end text-right">
                        {tags.map(tag => (
                            <SolidTag key={tag} text={tag} />
                        ))}
                    </div>
                )}
            </div>
            {date && <p className='text-xs sm:text-sm'>{date}</p>}
            {tags && (
                <div className="block sm:hidden flex flex-wrap gap-2 pt-2">
                    {tags.map(tag => (
                        <SolidTag key={tag} text={tag} />
                    ))}
                </div>
            )}
            <p className="pt-2 text-2xs sm:text-xs">
                <Highlight text={isExpanded ? description : truncatedDescription} highlight={searchTerm} />
                {description.length > maxLength && (
                    <button
                        className="text-accent cursor-pointer"
                        onClick={handleExpandClick}
                    >
                        {isExpanded ? ' Show less' : ' Show more'}
                    </button>
                )}
            </p>
        </div>
    );
};