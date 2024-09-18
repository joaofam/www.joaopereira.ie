'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import Button from '@/app/components/common/Button/index';
import { Tag } from '@/app/components/common/ImageTag/index';
import Scramble from '@/app/components/common/Scramble/index';

const Details = [
    {
        title: 'Frontend',
        content: 'React Nextjs TS JS Tailwind SCSS Framer Motion',
        hoveredTitle: 'Frontend',
        hoveredContent: 'React Nextjs TS JS Tailwind SCSS Framer Motion',
    },
    {
        title: 'Backend',
        content: 'Python Java Go Node.js REST SQL',
        hoveredTitle: 'Backend',
        hoveredContent: 'Python Java Go Node.js REST SQL',
    },
    {
        title: 'Tools',
        content: 'AWS Docker PTC Jenkins TestRail JIRA',
        hoveredTitle: 'Tools',
        hoveredContent: 'AWS Docker PTC Jenkins TestRail JIRA',
    },
];

export default function Intro() {
    const [textHovered, setTextHovered] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index?: number) => {
        if (index !== undefined) {
            setHoveredIndex(index);
        } else {
            setTextHovered(true);
        }
    };

    const handleMouseLeave = () => {
        setTextHovered(false);
        setHoveredIndex(null);
    };

    const scrambleClass = `no-wrap transition-colors duration-300 ${textHovered ? 'text-primary' : ''}`;

    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center font-SpaceMono text-2xs tracking-wide text-foreground sm:text-xs">
            <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2">
                <div className="relative z-10 flex h-[36rem] w-[36rem] flex-col items-center justify-center border-0 border-b-0 border-foreground">
                    <div className="relative h-[36rem] w-[36rem]">
                        <Image
                            src="/yu-gi-oh-card.png"
                            alt="Profile Picture"
                            priority={true}
                            layout="fill"
                            objectFit="contain"
                            className="p-4"
                        />
                    </div>
                    <div className="w-[36rem]">
                        <Tag
                            tag="Introduction"
                            hoverTag="yu-gi-oh-card.png"
                            QRSrc="soft_dev"
                        />
                    </div>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center">
                    <div className="border border-foreground p-12">
                        <div
                            onMouseEnter={() => handleMouseEnter()}
                            onMouseLeave={handleMouseLeave}
                            className="py-6"
                        >
                            <span className="absolute left-4 top-0 -translate-y-1/2 transform bg-white px-2 text-xs font-bold lowercase tracking-wide text-foreground">
                                Introduction
                            </span>
                            <p className="text-left sm:text-left">
                                I am a software engineer with{' '}
                                <Scramble
                                    shouldScramble={textHovered}
                                    className={scrambleClass}
                                >
                                    {textHovered ? '4' : '2'}
                                </Scramble>{' '}
                                years of{' '}
                                <Scramble
                                    shouldScramble={textHovered}
                                    className={scrambleClass}
                                >
                                    {textHovered
                                        ? 'Full Stack'
                                        : 'Backend and Frontend'}
                                </Scramble>{' '}
                                development. Throughout the years, my main
                                focuses have been with application development
                                and cloud infrastructure.
                                <br />
                                <br />I am a big{' '}
                                <Scramble
                                    shouldScramble={textHovered}
                                    className={scrambleClass}
                                >
                                    {textHovered ? 'fan' : 'feen'}
                                </Scramble>{' '}
                                for anything Linux or Open Source related.
                                However, that doesnt stop me from loving
                                everything else
                                <Scramble
                                    shouldScramble={textHovered}
                                    className={scrambleClass}
                                >
                                    {textHovered
                                        ? ' (apart from you Haskell and Assembly, you guys are my worst enemies)'
                                        : ''}
                                </Scramble>
                                . To distinguish myself from all the{' '}
                                <Scramble
                                    shouldScramble={textHovered}
                                    className={scrambleClass}
                                >
                                    {textHovered ? 'tech nerds' : 'rest'}
                                </Scramble>{' '}
                                I have a passion/edge for implementing my
                                designs and solutions with a{' '}
                                <Scramble
                                    shouldScramble={textHovered}
                                    className={scrambleClass}
                                >
                                    {textHovered ? 'hint' : 'touch'}
                                </Scramble>{' '}
                                of creativity and flair. Implementation is one
                                thing, but making it look{' '}
                                <Scramble
                                    shouldScramble={textHovered}
                                    className={scrambleClass}
                                >
                                    {textHovered ? 'cool' : 'aesthetic'}
                                </Scramble>{' '}
                                is another.
                                <br />
                                <br />
                            </p>
                        </div>
                        <div className="relative w-full pt-4">
                            <div className="relative w-full border p-8">
                                <span className="absolute left-4 top-0 -translate-y-1/2 transform bg-white px-2 text-2xs font-bold uppercase text-primary">
                                    Tech Stack
                                </span>
                                {Details.slice(0, 3).map((detail, index) => (
                                    <div
                                        key={index}
                                        className="relative space-y-8 p-4"
                                        onMouseEnter={() =>
                                            handleMouseEnter(index)
                                        }
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <span
                                            className={`absolute left-4 top-0 -translate-y-1/2 transform bg-white px-2 text-2xs font-bold ${
                                                hoveredIndex === index
                                                    ? 'uppercase text-primary'
                                                    : 'lowercase tracking-wider'
                                            }`}
                                        >
                                            <Scramble
                                                shouldScramble={
                                                    hoveredIndex === index
                                                }
                                            >
                                                {hoveredIndex === index
                                                    ? (detail.hoveredTitle ??
                                                      detail.title)
                                                    : detail.title}
                                            </Scramble>
                                        </span>
                                        <span
                                            className="whitespace-pre-wrap"
                                            style={{ lineHeight: '1.5' }}
                                        >
                                            <Scramble
                                                shouldScramble={
                                                    hoveredIndex === index
                                                }
                                            >
                                                {hoveredIndex === index
                                                    ? (detail.hoveredContent ??
                                                      detail.content)
                                                    : detail.content}
                                            </Scramble>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 self-end pt-4 font-HK text-sm">
                        <Button
                            text="Checkout my Resume"
                            href="/resume.pdf"
                            blank={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
