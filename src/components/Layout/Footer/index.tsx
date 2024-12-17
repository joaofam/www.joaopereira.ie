'use client';

import React from 'react';

import { CustomLink } from '@/components/Common/Link/index';
import Scramble from '@/components/Common/Scramble/index';

export const Footer = () => {
    return (
        <div
            className="relative h-40 bg-[#3B3B3B] font-SpaceMono text-3xs tracking-tight text-accent sm:h-56 sm:text-2xs md:h-52 md:text-xs lg:h-64 xl:h-72 2xl:h-96 2xl:text-sm"
            style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
        >
            <div className="h-full">
                {/* Two Rows */}
                <div className="grid h-full grid-cols-1 grid-rows-[2fr_auto_1fr] px-2 md:px-4 xl:px-12">
                    {/* Row 1 - Two Columns */}
                    <div className="row-start-1 grid cursor-default grid-cols-2 gap-4">
                        <div className="relative mb-16 flex items-center justify-start text-5xl uppercase sm:mb-0 sm:items-start sm:text-7xl md:mt-6 md:text-6xl lg:mb-8 lg:text-8xl xl:text-9xl 2xl:text-10xl">
                            <div className="relative">
                                <h1 className="absolute left-0 top-0 mt-2 -translate-x-0 transform font-ThrowUpShadow text-foreground">
                                    Joaopereira
                                </h1>
                                <h1 className="absolute left-0 top-0 -translate-x-0 transform font-ThrowUpFill text-[#8e8e8e]">
                                    Joaopereira
                                </h1>
                                <h1 className="absolute left-0 top-0 -translate-x-0 transform font-ThrowUpStroke text-foreground">
                                    Joaopereira
                                </h1>
                                <h1 className="absolute left-0 top-0 -translate-x-0 transform font-ThrowUpHighlight text-white">
                                    Joaopereira
                                </h1>
                            </div>
                        </div>

                        <div className="flex flex-col items-end justify-end text-4xs sm:text-2xs md:text-xs xl:mb-8 2xl:text-sm">
                            <div>
                                <Scramble>Connect with me</Scramble>
                            </div>
                            <Scramble>
                                © 2024 Developed and Designed by joao pereira
                            </Scramble>
                        </div>
                    </div>
                    {/* Divider Line */}
                    <hr className="row-start-2 my-2 w-full border-t border-gray-500" />
                    {/* Row 2 */}
                    <div className="row-start-3 h-full">
                        <div className="flex grid h-full grid-cols-2 grid-rows-1 gap-0 pb-2">
                            <div className="flex h-full items-end justify-start">
                                <div className="grid grid-cols-1 grid-rows-3 gap-2">
                                    <div className="flex w-full">
                                        {renderContactLink(
                                            'mailto:joaopereira2213@gmail.com',
                                            'joaopereira2213@gmail.com'
                                        )}
                                    </div>
                                    <div className="flex w-full justify-start">
                                        {renderContactLink(
                                            'https://github.com/joaofam',
                                            'github.com/joaofam'
                                        )}
                                    </div>
                                    <div className="flex w-full justify-start">
                                        {renderContactLink(
                                            'https://linkedin.com/in/joao-joao',
                                            'linkedin.com/in/joao-joao/'
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-full items-end justify-end">
                                <div className="grid grid-cols-2 grid-rows-1 gap-16 2xl:gap-32">
                                    <div>
                                        <CustomLink
                                            blank={true}
                                            href="https://github.com/joaofam/www.joaopereira.ie"
                                            white
                                            className="text-3xs text-[#8e8e8e] sm:text-2xs md:text-xs"
                                        >
                                            Src code
                                        </CustomLink>
                                    </div>
                                    <div>
                                        <CustomLink
                                            blank={true}
                                            href="#top"
                                            white
                                            className="text-3xs text-[#8e8e8e] sm:text-2xs md:text-xs"
                                        >
                                            Back2top
                                        </CustomLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper function for rendering contact links
const renderContactLink = (href: string, title: string) => (
    <CustomLink
        blank={true}
        href={href}
        white
        className="flex w-64 items-center justify-start text-3xs text-[#8e8e8e] sm:text-2xs md:text-xs"
    >
        {title}
    </CustomLink>
);
