'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { Tag } from '@/app/components/common/ImageTag/index';
import Scramble from '@/app/components/common/Scramble';
import { Time } from '@/app/components/Home/LandingContent/time';

export default function Title() {
    const [hovered, setHovered] = useState(false);
    const [portfolioHovered, setPortfolioHovered] = useState(false);

    const handlePortfolioMouseEnter = () => {
        setPortfolioHovered(true);
    };

    const handlePortfolioMouseLeave = () => {
        setPortfolioHovered(false);
    };

    return (
        <div className="flex h-screen w-full flex-col items-center justify-between font-SpaceMono text-foreground">
            <div className="flex h-full w-full flex-grow flex-col items-center justify-center">
                {/* Landing Title */}
                <div className="flex h-full w-full items-center justify-center">
                    <div className="relative flex flex-col items-center justify-center">
                        {/* Software */}
                        <h1 className="absolute left-1/2 z-10 -translate-x-1/2 transform font-SpaceMono text-5xl font-bold uppercase text-foreground sm:text-7xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl">
                            Software
                        </h1>
                        {/* Developer ThrowUp */}
                        <div className="relative z-20 mt-[-6rem] uppercase tracking-tighter">
                            <h1 className="absolute left-1/2 z-10 mr-4 mt-4 -translate-x-1/2 transform font-ThrowUpShadow text-5xl text-[#8E8E8E] sm:text-7xl md:text-9xl lg:text-10xl xl:text-12xl 2xl:text-14xl">
                                Developer
                            </h1>
                            <h1 className="absolute left-1/2 z-20 -translate-x-1/2 transform font-ThrowUpFill text-5xl text-background sm:text-7xl md:text-9xl lg:text-10xl xl:text-12xl 2xl:text-14xl">
                                Developer
                            </h1>
                            <h1 className="absolute left-1/2 z-30 -translate-x-1/2 transform font-ThrowUpStroke text-5xl text-foreground sm:text-7xl md:text-9xl lg:text-10xl xl:text-12xl 2xl:text-14xl">
                                Developer
                            </h1>
                        </div>
                    </div>
                </div>
                {/* Landing Info */}
                <div className="mb-16 grid w-full grid-cols-3 gap-0 uppercase tracking-tight">
                    <div
                        className="flex items-start justify-start"
                        onMouseEnter={handlePortfolioMouseEnter}
                        onMouseLeave={handlePortfolioMouseLeave}
                    >
                        <Scramble>
                            {portfolioHovered
                                ? 'Personal Readme'
                                : 'Personal Portfolio'}
                        </Scramble>
                    </div>
                    <div className="flex items-center justify-center">
                        <Tag
                            tag="Software Developer"
                            hoverTag="Backend and Frontend Engineer"
                            QRSrc="soft_dev"
                        />
                    </div>
                    <div className="flex items-start justify-end">
                        <Image
                            src="/marker.gif"
                            alt="Software Developer"
                            width={50}
                            height={50}
                            className="mr-[-0.5rem] mt-[-1rem]"
                        />
                        <Time />
                    </div>
                </div>
            </div>
        </div>
    );
}
