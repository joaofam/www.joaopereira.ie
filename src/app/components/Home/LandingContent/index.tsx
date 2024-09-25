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
        <div className="flex h-[50vh] w-full flex-col items-center justify-between font-SpaceMono text-foreground sm:h-[75vh] md:h-[87.5vh] lg:h-screen">
            <div className="flex h-full w-full flex-grow flex-col items-center justify-center">
                {/* Landing Title */}
                <div className="flex h-full w-full items-center justify-center">
                    <div className="relative flex flex-col items-center justify-center">
                        {/* Software */}
                        <h1 className="absolute left-1/2 z-10 -translate-x-1/2 transform font-SpaceMono text-5xl font-bold text-foreground sm:text-8xl md:text-9xl lg:text-10xl xl:text-12xl 2xl:text-13xl">
                            Software
                        </h1>
                        {/* Developer ThrowUp */}
                        <div className="relative z-20 mt-[-1.75rem] uppercase tracking-tighter sm:mt-[-5rem] md:mt-[-6rem] xl:mt-[-7rem]">
                            <h1 className="absolute left-1/2 z-10 mt-2 -translate-x-1/2 transform font-ThrowUpShadow text-6xl text-[#3b3b3b] sm:mr-4 sm:mt-4 sm:text-9xl md:text-10xl lg:text-11xl xl:text-13xl 2xl:text-15xl">
                                Developer
                            </h1>
                            <h1 className="absolute left-1/2 z-20 -translate-x-1/2 transform font-ThrowUpFill text-6xl text-background sm:text-9xl md:text-10xl lg:text-11xl xl:text-13xl 2xl:text-15xl">
                                Developer
                            </h1>
                            <h1 className="absolute left-1/2 z-30 -translate-x-1/2 transform font-ThrowUpStroke text-6xl text-foreground sm:text-9xl md:text-10xl lg:text-11xl xl:text-13xl 2xl:text-15xl">
                                Developer
                            </h1>
                            <h1 className="absolute left-1/2 z-30 -translate-x-1/2 transform font-ThrowUpHighlight text-6xl text-white sm:text-9xl md:text-10xl lg:text-11xl xl:text-13xl 2xl:text-15xl">
                                Develope<span className="text-primary">r</span>
                            </h1>
                        </div>
                    </div>
                </div>
                {/* Landing Info */}
                <div className="relative z-40 grid w-full grid-cols-3 gap-0 px-6 text-2xs uppercase tracking-tight text-foreground sm:mb-16 sm:px-12 sm:text-xs md:mb-20 md:text-sm lg:mb-24 xl:mb-28 xl:px-24 2xl:mb-44 2xl:px-32 2xl:text-sm">
                    <div className="flex items-start justify-start">
                        <div
                            className="w-64"
                            onMouseEnter={handlePortfolioMouseEnter}
                            onMouseLeave={handlePortfolioMouseLeave}
                        >
                            <Scramble
                                className="transition-colors duration-300 hover:text-primary"
                                textHovered={portfolioHovered}
                            >
                                {portfolioHovered
                                    ? 'Personal Readme'
                                    : 'Personal Portfolio'}
                            </Scramble>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">~</div>
                    {/* Dublin Time */}
                    <div className="flex items-end justify-end justify-self-end">
                        <Image
                            src="/marker.gif"
                            alt="Software Developer"
                            width={30}
                            height={30}
                            className="mb-[-0.2rem] hidden sm:flex"
                        />
                        <Time />
                    </div>
                </div>
            </div>
        </div>
    );
}
