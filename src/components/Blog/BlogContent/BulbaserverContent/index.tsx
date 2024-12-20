'use client';

import React from 'react';

import { MDXProvider } from '@mdx-js/react';

import BulbaserverMDXContent from '@/components/Blog/BlogContent/BulbaserverContent/index.mdx';
import BlogContainer from '@/components/Common/BlogContainer/index';

export default function BulbaserverContent() {
    const rightContent = (
        <MDXProvider>
            <div className="space-y-8">
                <div className="text-left sm:text-left">
                    <BulbaserverMDXContent />
                </div>
            </div>
        </MDXProvider>
    );

    return (
        <div className="relative flex flex-col items-center justify-center font-SpaceMono text-2xs tracking-wide text-foreground sm:text-xs max-w-full px-4 overflow-x-hidden">
            <BlogContainer
                rightContent={rightContent}
                name="Bulbaserver"
                date="29.04.23"
                tags="Server, Guide, Tutorial"
                gitLink="https://github.com/joaofam/Bulbaserver"
                location="/blog/bulbaserver"
            />
        </div>
    );
}
