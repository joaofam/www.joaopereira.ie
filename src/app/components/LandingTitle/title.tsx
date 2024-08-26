'use client';

import Image from 'next/image';

import { CustomLink } from '@/app/components/Link/link';
import Scramble from '@/app/components/Scramble/scramble';

export default function Title() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center text-foreground">
            <div className="relative inline-block text-6xl sm:text-7xl md:text-9xl lg:text-10xl 2xl:text-11xl">
                <p className="relative z-10 text-right font-HK text-xs tracking-widest sm:text-sm">
                    [<span className="font-SpaceMono">2024</span> SS Ver]
                </p>
                <h1 className="relative z-10 mb-[-0.5em] font-Nohemi font-bold leading-none">
                    Software
                </h1>
                <div className="relative z-10 flex items-center">
                    <span className="z-0 font-SwompRegular tracking-tighter text-tertiary">
                        Dev
                    </span>
                    <span className="absolute z-10 font-SwompSloppy tracking-tighter text-foreground">
                        Dev
                    </span>
                    <span className="z-20 ml-1 mt-4 font-ladi text-foreground lg:mt-8">
                        ELOP
                    </span>
                    <span className="z-30 font-giga">ER</span>
                </div>
            </div>
            <footer className="relative z-10 flex w-full flex-row items-center justify-between py-6 font-HK text-xs font-light tracking-widest sm:text-sm">
                <div>
                    <Scramble>Dublin, Ireland</Scramble>
                </div>
                <div className="text-center">
                    <Scramble>A Dev of all [trades]</Scramble>
                </div>
                <CustomLink href="/">Github</CustomLink>
            </footer>
            <div className="pt-4 sm:hidden">
                <div className="z-10 flex items-center justify-start">
                    <Image
                        src="/yu-gi-oh-card-joao.png"
                        width={250}
                        height={600}
                        alt="Yu-Gi-Oh Card"
                        className="relative z-20"
                    />
                </div>
            </div>
        </div>
    );
}
