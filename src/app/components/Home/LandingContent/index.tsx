'use client';

import React from 'react';

const SoftwareDeveloper = () => {
    return (
        <div className="relative flex flex-col items-center justify-center">
            {/* Software */}
            <h1 className="absolute left-1/2 top-[4.5rem] z-10 -translate-x-1/2 transform font-SpaceMono text-3xl font-bold text-foreground sm:top-[2rem] sm:text-6xl md:top-[1rem] md:text-7xl lg:top-[0.5rem] lg:text-8xl xl:top-[-3rem] xl:text-9xl 2xl:top-[-4rem] 2xl:text-10xl">
                Software
            </h1>
            {/* Developer ThrowUp */}
            <div className="relative top-[5.25rem] z-20 sm:top-[3.25rem] md:top-[2.75rem] lg:top-[2rem] xl:top-[-0.5rem] 2xl:top-[-0rem]">
                <h1 className="absolute left-1/2 z-10 mt-2 -translate-x-1/2 transform font-ThrowUpShadow text-4xl text-[#3b3b3b] sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl 2xl:text-11xl">
                    Developer
                </h1>
                <h1 className="absolute left-1/2 z-20 -translate-x-1/2 transform font-ThrowUpFill text-4xl text-background sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl 2xl:text-11xl">
                    Developer
                </h1>
                <h1 className="absolute left-1/2 z-30 -translate-x-1/2 transform font-ThrowUpStroke text-4xl text-foreground sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl 2xl:text-11xl">
                    Developer
                </h1>
                <h1 className="absolute left-1/2 z-30 -translate-x-1/2 transform font-ThrowUpHighlight text-4xl text-white sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl 2xl:text-11xl">
                    Develope<span className="text-primary">r</span>
                </h1>
            </div>
        </div>
    );
};

export default function Title() {
    return (
        <div className="flex h-[10vh] w-full cursor-default flex-col items-center justify-between font-SpaceMono text-foreground sm:h-[17.5vh] md:h-[20vh] lg:h-[22.5vh] xl:h-[40vh] 2xl:h-[40vh]">
            <div className="flex h-full w-full flex-grow flex-col items-center justify-center">
                {/* Landing Title */}
                <div className="flex h-full w-full items-center justify-center">
                    <SoftwareDeveloper />
                </div>
            </div>
        </div>
    );
}
