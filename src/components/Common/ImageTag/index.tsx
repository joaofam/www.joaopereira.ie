import React, { useState, useEffect } from 'react';

import Scramble from '@/components/Common/Scramble/index';
import { TagProps } from '@/types/types';

export const Tag: React.FC<TagProps> = ({ tag, hoverTag, shouldHover }) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (shouldHover !== undefined) {
            setIsHovered(shouldHover);
        }
    }, [shouldHover]);

    const handleMouseEnter = () => {
        if (shouldHover === undefined) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (shouldHover === undefined) {
            setIsHovered(false);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            setIsHovered(!isHovered);
        }
    };

    return (
        <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onKeyDown={handleKeyDown}
            className="mt-4 flex w-full cursor-default items-center justify-center"
        >
            <div className="flex h-8 w-full items-center justify-center font-SpaceMono text-3xs tracking-tight sm:text-2xs">
                <div className="flex items-center justify-center">
                    <span
                        className={`mr-2 text-3xs ${isHovered ? 'text-primary' : 'text-accent'}`}
                    >
                        ■
                    </span>
                    <span>
                        [
                        <Scramble
                            shouldScramble={isHovered}
                            className={`no-wrap uppercase transition-all duration-300 ease-in-out ${isHovered ? 'text-primary' : ''}`}
                        >
                            {isHovered ? hoverTag : tag}
                        </Scramble>
                        ]
                    </span>
                </div>
            </div>
        </button>
    );
};
