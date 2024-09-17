import React, { useState, useEffect } from 'react';

import Image from 'next/image';

import Scramble from '@/app/components/common/Scramble/index';

export interface ITagProps {
    tag: string;
    hoverTag?: string;
    QRSrc?: string;
    shouldHover?: boolean;
}

export const Tag: React.FC<ITagProps> = ({
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

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full"
        >
            <div className="flex grid h-12 w-full grid-cols-5 grid-rows-1 gap-0 border-1 font-SpaceMono text-xs tracking-tight">
                <div className="col-span-4 flex items-center justify-center">
                    <span>
                        <Scramble
                            textHovered={isHovered}
                            className={`no-wrap transition-colors duration-300 ${isHovered ? 'text-primary' : ''}`}
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
