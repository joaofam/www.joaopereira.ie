'use client';

import React from 'react';

import { MDXProvider } from '@mdx-js/react';

import FilefloMDXContent from '@/components/Blog/Projects/FilefloContent/index.mdx';
import BlogContainer from '@/components/Common/BlogContainer/index';
import Button from '@/components/Common/Button/index';

export default function FilefloContent() {
    const rightContent = (
        <MDXProvider>
            <div className="space-y-8">
                <div className="text-left sm:text-left">
                    <FilefloMDXContent />
                </div>
            </div>
        </MDXProvider>
    );

    return (
        <div className="relative flex flex-col items-center justify-center font-SpaceMono text-2xs tracking-wide text-foreground sm:text-xs 2xl:pt-24">
            <BlogContainer
                rightContent={rightContent}
                name="Fileflo"
                date="29.04.23"
                tags="IPFS, Blockchain, Encryption"
                gitLink="https://github.com/joaofam/fileflo"
                location="/projects/fileflo"
            />
            <div className="font-HK relative z-10 self-end pt-4 text-sm">
                <Button
                    text="Project Link"
                    href="https://github.com/joaofam/fileflo"
                    blank
                />
            </div>
        </div>
    );
}