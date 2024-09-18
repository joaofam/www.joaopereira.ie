'use client';

import React from 'react';

import { CustomLink } from '@/app/components/common/Link/index';
import Scramble from '@/app/components/common/Scramble/index';

export const Footer = () => {
    return (
        <div
            className="relative h-72 bg-accent"
            style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
        >
            <div className="fixed bottom-1 w-full bg-accent py-4">
                <div className="relative z-50 w-full bg-accent pt-2">
                    <div className="relative z-10 flex flex-col px-12 text-foreground">
                        <div className="w-full flex items-center justify-between pt-12">
                            {/* Title */}
                            <h1 className="font-Nohemi text-3xl text-foreground transition font-black tracking-base mt-4 sm:text-[8.5rem]">
                                JOAO PEREIRA
                            </h1>
                            {/* Contact Information */}
                            <div className="flex flex-col items-start justify-center font-SpaceMono text-xs mr-48">
                                <div className="flex flex-col items-start space-y-1">
                                    {renderContactLink('mailto:joaopereira2213@gmail.com', 'Email')}
                                    {renderContactLink('https://github.com/joaofam', 'GitHub')}
                                    {renderContactLink('https://linkedin.com/in/joao-joao', 'LinkedIn')}
                                    {renderContactLink('https://twitter.com/joaopereira', 'Twitter')}
                                </div>
                            </div>
                        </div>
                        {/* Footer bottom section */}
                        <div className="grid w-full grid-cols-1 gap-4 font-SpaceMono text-sm tracking-tight text-foreground sm:grid-cols-3">
                            <p className="self-left col-span-1 w-full">
                                <Scramble>
                                    © Developed and design by me [Joao Pereira]
                                    in 2024
                                </Scramble>
                            </p>
                            <div className="col-span-1 flex w-full justify-end">
                                <CustomLink href="https://github.com/joaopereira2.0" white>Source Code</CustomLink>
                            </div>
                            <div className="col-span-1 flex w-full justify-end">
                                <CustomLink href="#top" white>Back to Top</CustomLink>
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
    <CustomLink href={href} white>
        {title}
    </CustomLink>
);