'use client';

import React from 'react';

import { MDXProvider } from '@mdx-js/react';

import FilefloMDXContent from '@/components/Blog/BlogContent/FilefloContent/index.mdx';
import BlogContainer from '@/components/Common/BlogContainer/index';

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
        <div className="font-baskervville relative flex flex-col items-center justify-center font-SpaceMono text-2xs tracking-wide text-foreground sm:text-xs 2xl:pt-24">
            <BlogContainer
                rightContent={rightContent}
                name="Fileflo"
                date="29.04.23"
                tags="IPFS, Blockchain, Encryption"
                gitLink="https://github.com/joaofam/fileflo"
                location="/blog/fileflo"
            />
        </div>
    );
}
