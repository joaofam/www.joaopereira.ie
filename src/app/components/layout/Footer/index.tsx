'use client';

import React from 'react';

import Image from 'next/image';

import { CustomLink } from '@/app/components/common/Link/index';
import Scramble from '@/app/components/common/Scramble/index';

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
                    <div className="row-start-1 grid grid-cols-2 gap-4">
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
                    <hr className="row-start-2 my-2 w-[85vw] border-t border-gray-500" />
                    {/* Row 2 */}
                    <div className="row-start-3 h-full">
                        <div className="flex h-full flex-col items-center">
                            <div className="flex w-full flex-col items-start justify-start gap-2">
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
                            <div className="mr-32 flex w-full items-end justify-end space-x-4 sm:mr-60 md:mr-80 xl:mr-64 xl:space-x-16 2xl:mr-80">
                                <CustomLink
                                    blank={true}
                                    href="https://github.com/joaopereira2.0"
                                    white
                                    className="text-3xs text-[#8e8e8e] sm:text-2xs md:text-xs"
                                >
                                    Src code
                                </CustomLink>
                                <CustomLink
                                    blank={true}
                                    href="#top"
                                    white
                                    className="text-3xs text-[#8e8e8e] sm:text-2xs md:text-xs"
                                >
                                    Back2top
                                </CustomLink>
                            </div>
                            <div className="absolute bottom-1 right-1 h-[5rem] w-[5rem] sm:h-[7.5rem] sm:w-[7.5rem] lg:w-[9.25rem] xl:h-[10rem] xl:w-[10rem]">
                                <Image
                                    src="/stamp.svg"
                                    alt="Stamp"
                                    fill
                                    sizes="(max-width: 1280px) 10rem, 26rem"
                                    style={{ objectFit: 'contain' }}
                                    loading="lazy"
                                />
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
