'use client';

import Image from 'next/image';

import { FlickeringGridRounded } from '@/app/components/AnimatedPixels/pixels';
import { Experience } from '@/app/components/Experience/experience';
import { CustomLink } from '@/app/components/Link/link';
import Scramble from '@/app/components/Scramble/scramble';

export default function Intro() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center px-0 font-HK text-sm tracking-widest text-foreground">
            {/* <FlickeringGridRounded /> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-1">
                <div className="relative z-10 flex items-center justify-center sm:justify-start hidden sm:block">
                    <Image
                        src="/yu-gi-oh-card-joao.png"
                        width={400}
                        height={700}
                        alt="Yu-Gi-Oh Card"
                        className="relative z-20"
                    />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center font-HK text-xs sm:text-sm">
                    <h1 className="flex justify-center sm:justify-start self-start bg-gradient-to-br from-foreground to-[#5d5d5d] bg-clip-text font-magik text-8xl font-semibold tracking-wide text-transparent">
                        <Scramble>Introduction</Scramble>
                    </h1>
                    <p className="text-left sm:text-left">
                        Welcome to my software developer portfolio, where
                        creativity meets code and innovation drives results.
                        With a strong foundation in full-stack development, I
                        specialize in crafting scalable, efficient, and
                        user-friendly solutions. My experience spans a diverse
                        array of projects, from dynamic web applications to
                        complex backend systems, all driven by a passion for
                        clean code and continuous learning. Whether it’s
                        bringing an idea to life or optimizing existing
                        technologies, I’m dedicated to delivering high-quality,
                        impactful work that pushes the boundaries of whats
                        possible in software development.
                        <br />
                        <br />
                    </p>
                    <p className="font-hk self-start text-xs tracking-widest text-[#b0b0b0]">
                        Areas
                    </p>
                    <div className="flex grid w-full grid-cols-3 grid-rows-1 gap-4 border-b-1 py-4">
                        <div>
                            <span className="text-xs">
                                [<span className="font-SpaceMono">01</span>]
                            </span>{' '}
                            Front-End
                        </div>
                        <div className='text-center'>
                            <span className="text-xs">
                                [<span className="font-SpaceMono">02</span>]
                            </span>{' '}
                            Backend
                        </div>
                        <div className='text-right'>
                            <span className="text-xs">
                                [<span className="font-SpaceMono">03</span>]
                            </span>{' '}
                            DevOps
                        </div>
                    </div>
                    <div className="relative z-10 self-start pt-10 font-HK text-sm">
                        <CustomLink href="/">Resume</CustomLink>
                    </div>
                </div>
            </div>
        </div>
    );
}