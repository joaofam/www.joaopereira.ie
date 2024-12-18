'use client';

import React from 'react';

import { MDXProvider } from '@mdx-js/react';

import VenatoMDXContent from '@/components/Blog/BlogContent/VenatoContent/index.mdx';
import BlogContainer from '@/components/Common/BlogContainer/index';

export default function VenatoContent() {
    const rightContent = (
        <MDXProvider>
            <div className="space-y-8">
                <div className="text-left sm:text-left">
                    <VenatoMDXContent />
                </div>
            </div>
        </MDXProvider>
    );

    return (
        <div className="relative flex flex-col items-center justify-center font-SpaceMono text-2xs tracking-wide text-foreground sm:text-xs 2xl:pt-24">
            <BlogContainer
                rightContent={rightContent}
                name="Venato"
                date="29.04.23"
                tags="IPFS, Blockchain, Encryption"
                gitLink="https://github.com/joaofam/Venato"
                location="/blog/Venato"
            />
        </div>
    );
}
