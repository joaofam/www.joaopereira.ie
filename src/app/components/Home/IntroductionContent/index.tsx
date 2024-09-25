'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import Button from '@/app/components/common/Button/index';
import DetailItem from '@/app/components/common/DetailItem';
import DualContainer from '@/app/components/common/DualContainer/index';
import { Tag } from '@/app/components/common/ImageTag/index';
import Scramble from '@/app/components/common/Scramble/index';
import { DetailProps } from '@/app/types/types';

const Details: DetailProps[] = [
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
    {
        title: 'Frontend',
        content: 'React Nextjs TS JS Tailwind SCSS Framer Motion',
        hoveredTitle: 'Frontend',
        hoveredContent: 'React Nextjs TS JS Tailwind SCSS Framer Motion',
    },
    {
        title: 'Areas of interest',
        content: 'Open Source Linux CLI DevOps Cloud IoT',
        hoveredTitle: 'Areas of interest',
        hoveredContent: 'Open Source Linux CLI Web Dev DevOps Cloud IoT',
    },
];

interface DetailItemProps {
    detail: DetailProps;
    index: number;
    hoveredIndex: number | null;
    onMouseEnter: (index: number) => void;
    onMouseLeave: () => void;
}

const TechSummary: React.FC<DetailItemProps> = ({
    detail,
    index,
    hoveredIndex,
    onMouseEnter,
    onMouseLeave,
}) => {
    const [textHovered, setTextHovered] = useState(false);
    const scrambleClass = `no-wrap transition-colors duration-300 ${textHovered ? 'text-primary italic' : ''}`;

    return (
        <div
            className="relative border border-foreground p-8"
            onMouseEnter={() => {
                onMouseEnter(index);
                setTextHovered(true);
            }}
            onMouseLeave={() => {
                onMouseLeave();
                setTextHovered(false);
            }}
        >
            <span
                className={`absolute left-4 top-0 -translate-y-1/2 transform bg-white px-2 text-2xs font-bold uppercase tracking-wider text-primary ${
                    hoveredIndex === index ? 'uppercase text-primary' : ''
                } 2xl:text-xs`}
            >
                <Scramble shouldScramble={hoveredIndex === index}>
                    {hoveredIndex === index
                        ? (detail.hoveredTitle ?? detail.title)
                        : detail.title}
                </Scramble>
            </span>
            <span
                className="whitespace-pre-wrap text-xs tracking-tight 2xl:text-sm"
                style={{ lineHeight: '1.5' }}
            >
                <p className="text-left sm:text-left">
                    As a software engineer with{' '}
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
                        {textHovered ? 'Full Stack' : 'Backend and Frontend'}
                    </Scramble>{' '}
                    development, I have defined my skills in application and CLI
                    development as well as infrastructure.
                    <br />
                    <br />I am particularly{' '}
                    <Scramble
                        shouldScramble={textHovered}
                        className={scrambleClass}
                    >
                        {textHovered ? 'interested in' : 'drawn to'}
                    </Scramble>{' '}
                    Linux and Open Source technologies, though my interests span
                    across various platforms and technologies
                    <Scramble
                        shouldScramble={textHovered}
                        className={scrambleClass}
                    >
                        {textHovered
                            ? ' (just not Haskell and Assembly).'
                            : '.'}
                    </Scramble>{' '}
                    My approach combines technical proficiency with a keen eye
                    for design, allowing me to create solutions that are not
                    only functional but also visually appealing.
                    <br />
                    <br />
                </p>
            </span>
        </div>
    );
};

export default function Intro() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    const rightContent = (
        <div>
            <TechSummary
                detail={Details[2]}
                index={2}
                hoveredIndex={hoveredIndex}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <div className="relative w-full pt-12">
                <div className="grid grid-cols-2 gap-4">
                    {Details.slice(0, 4).map((detail, index) => (
                        <DetailItem
                            key={index}
                            detail={detail}
                            index={index}
                            hoveredIndex={hoveredIndex}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

    const leftContent = (
        <div className="relative flex flex-col items-center">
            <div className="relative h-[22rem] w-[20rem] sm:h-[25rem] sm:w-[25rem] xl:h-[26rem] xl:w-[26rem]">
                <Image
                    src="/yu-gi-oh-card.png"
                    alt="Profile Picture"
                    priority={true}
                    fill
                    sizes="(max-width: 1280px) 10rem, 26rem"
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className="mt-4 w-80 xl:w-[26rem]">
                <Tag
                    tag="yu-gi-oh-card.png"
                    hoverTag="Insert yu-gi-oh card into deck"
                    QRSrc="soft_dev"
                />
            </div>
        </div>
    );

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 font-SpaceMono text-2xs tracking-wide text-foreground sm:text-xs">
            <DualContainer
                leftContent={leftContent}
                rightContent={rightContent}
                leftTitle="img"
                rightTitle="tech intro"
            />
            <div className="font-HK relative z-10 self-end pt-4 text-sm">
                <Button
                    text="Checkout my Resume"
                    href="/resume.pdf"
                    blank={true}
                />
            </div>
        </div>
    );
}
