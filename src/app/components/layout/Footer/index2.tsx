'use client';

import React from 'react';

import { CustomLink } from '@/app/components/common/Link/index';
import Scramble from '@/app/components/common/Scramble/index';

export const Footer = () => {
    return (
        <div
            className="relative h-28 bg-accent font-SpaceMono text-3xs tracking-tight text-foreground sm:h-40 sm:text-2xs md:h-52 md:text-xs lg:h-64 xl:h-72 2xl:h-96 2xl:text-sm"
            style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
        >
            <div className="fixed bottom-1 w-full bg-accent py-4">
                <div className="relative z-50 w-full bg-accent pt-2">
                    <div className="relative z-10 px-4 text-foreground sm:px-6 md:px-12">
                        <div className="grid w-full grid-cols-4 items-center">
                            {/* Title */}
                            <div className="col-span-3 flex items-center justify-start">
                                <h1 className="tracking-base mt-0 font-Nohemi text-4xl font-bold text-foreground transition sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl 2xl:text-12xl">
                                    Joaopereira
                                </h1>
                            </div>
                            {/* Contact Information */}
                            <div className="justify-end sm:mr-48 sm:justify-end xl:ml-20 2xl:mr-80">
                                <div className="ml-8 flex flex-col items-start sm:ml-0 sm:space-y-0 xl:space-y-2">
                                    {renderContactLink(
                                        'mailto:joaopereira2213@gmail.com',
                                        'Email'
                                    )}
                                    {renderContactLink(
                                        'https://github.com/joaofam',
                                        'GitHub'
                                    )}
                                    {renderContactLink(
                                        'https://linkedin.com/in/joao-joao',
                                        'LinkedIn'
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Footer bottom section */}
                        <div className="grid w-full grid-cols-1 gap-4 text-foreground sm:grid-cols-3">
                            <p className="col-span-1 flex w-full items-center justify-between whitespace-nowrap sm:justify-start">
                                <Scramble>
                                    © Developed by me [JOAO PEREIRA] in 2024
                                </Scramble>
                                <CustomLink
                                    href="https://github.com/joaopereira2.0"
                                    white
                                    className="text-3xs sm:hidden sm:text-2xs md:text-xs"
                                >
                                    Source Code
                                </CustomLink>
                            </p>
                            <div className="col-span-1 hidden w-full justify-end sm:flex">
                                <CustomLink
                                    className="text-3xs sm:text-2xs md:text-xs"
                                    href="https://github.com/joaopereira2.0"
                                    white
                                >
                                    Source Code
                                </CustomLink>
                            </div>
                            <div className="col-span-1 flex hidden w-full justify-end sm:flex">
                                <CustomLink
                                    href="#top"
                                    white
                                    className="text-3xs sm:text-2xs md:text-xs"
                                >
                                    Back to Top
                                </CustomLink>
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
        className="flex w-32 items-center justify-start text-3xs sm:text-2xs md:text-xs"
    >
        {title}
    </CustomLink>
);
