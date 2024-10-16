import React, { useState, useEffect } from 'react';

import Image from 'next/image';

import Scramble from '@/components/common/Scramble/index';
import { TagProps } from '@/types/types';

export const Tag: React.FC<TagProps> = ({
    tag,
    QRSrc,
    hoverTag,
    shouldHover,
}) => {
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

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-full"
        >
            <div className="flex grid h-12 w-full grid-cols-5 grid-rows-1 gap-0 border-1 font-SpaceMono text-2xs tracking-tight sm:text-xs">
                <div className="col-span-4 flex items-center justify-center">
                    <span>
                        <Scramble
                            shouldScramble={isHovered}
                            className={`no-wrap uppercase transition-all duration-300 ease-in-out ${isHovered ? 'font-bold text-secondary' : ''}`}
                        >
                            {isHovered ? hoverTag : tag}
                        </Scramble>
                    </span>
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        src={`/QR/${QRSrc}.svg`}
                        alt="Tag"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
            <div className="flex grid h-4 w-full grid-cols-5 grid-rows-1 gap-0 border-1 border-t-0"></div>
        </div>
    );
};
