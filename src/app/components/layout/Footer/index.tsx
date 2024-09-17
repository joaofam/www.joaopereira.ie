'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { Tag } from '@/app/components/common/ImageTag/index';
import { CustomLink } from '@/app/components/common/Link/index';
import Scramble from '@/app/components/common/Scramble/index';

export const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative h-[60vh]"
            style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
        >
            <div className="fixed bottom-1 w-full bg-[#F7F4F3] py-4">
                <div className="relative z-50 w-full bg-[#F7F4F3] pt-2">
                    <div className="relative z-10 flex flex-col items-center justify-center border-t px-12 text-foreground">
                        <span className="absolute left-32 top-0 -translate-y-1/2 transform bg-[#F7F4F3] px-2 font-SpaceMono text-xs font-bold lowercase">
                            footer
                        </span>
                        <div className="grid w-full grid-cols-4 gap-4">
                            <div className="col-span-2 flex items-center">
                                <h1 className="pt-8 font-ThrowUp text-7xl text-foreground transition sm:text-10xl">
                                    Joao Pereira
                                </h1>
                            </div>
                            {/* Contact Information */}
                            <div className="relative col-span-2 mt-9 flex flex-col items-end justify-center font-SpaceMono text-xs">
                                <div className="grid grid-cols-2 gap-4">
                                    {renderContactInfo(
                                        'linkedin',
                                        'linkedin.com/in/joao-joao'
                                    )}
                                    {renderContactInfo(
                                        'github',
                                        'github.com/joaofam'
                                    )}
                                    {renderContactInfo(
                                        'mail',
                                        'joao@example.com'
                                    )}
                                    {renderContactInfo(
                                        'Last Commit',
                                        'github.com/joaofam'
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Footer bottom section */}
                        <div className="grid w-full grid-cols-1 gap-4 font-SpaceMono text-xs tracking-tight text-foreground sm:grid-cols-3">
                            <p className="self-left col-span-1 w-full">
                                <Scramble>
                                    © Developed and design by me [Joao Pereira]
                                    in 2024
                                </Scramble>
                            </p>
                            <div className="self-left col-span-1 flex w-full justify-start">
                                <CustomLink href="/">Source Code</CustomLink>
                            </div>
                            <div className="self-right col-span-1 flex w-full justify-end">
                                <CustomLink href="/">Back to Top</CustomLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper function for rendering contact info blocks
const renderContactInfo = (label: string, link: string) => (
    <div className="relative mb-4 w-56 p-4 lowercase">
        <span className="absolute left-4 top-0 -translate-y-1/2 transform bg-[#F7F4F3] px-2 text-2xs font-bold">
            {label}
        </span>
        <p>{link}</p>
    </div>
);