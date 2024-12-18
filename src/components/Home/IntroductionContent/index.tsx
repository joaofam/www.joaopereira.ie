'use client';

import React, { useState } from 'react';

import Button from '@/components/Common/Button/index';
import DetailItem from '@/components/Common/DetailItem';
import DualContainer from '@/components/Common/DualContainer/index';
import { Legend } from '@/components/Common/FieldSet/Legend/index';
import { Tag } from '@/components/Common/ImageTag/index';
import Scramble from '@/components/Common/Scramble/index';
import { ZoomableImage } from '@/components/Common/ZoomableImage';
import { INTRODUCTION_DETAILS } from '@/consts/home';
import { DetailItemProps } from '@/types/types';

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
        <button
            className="relative cursor-default border border-foreground p-8"
            onMouseEnter={() => {
                onMouseEnter(index);
                setTextHovered(true);
            }}
            onMouseLeave={() => {
                onMouseLeave();
                setTextHovered(false);
            }}
        >
            <Legend title="Summary" className="text-primary" />
            <span
                className="whitespace-pre-wrap text-2xs text-xs tracking-tight sm:text-xs 2xl:text-sm"
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
        </button>
    );
};

export default function Intro() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    const rightContent = (
        <div>
            <TechSummary
                detail={INTRODUCTION_DETAILS[2]}
                index={2}
                hoveredIndex={hoveredIndex}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <div className="relative w-full pt-12">
                <div className="grid grid-cols-2 gap-4">
                    {INTRODUCTION_DETAILS.slice(0, 4).map((detail, index) => (
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
            <ZoomableImage
                src="/yu-gi-oh-card.png"
                alt="Profile Picture"
                className="h-[22rem] w-[20rem] sm:h-[25rem] sm:w-[25rem] xl:h-[26rem] xl:w-[26rem] 2xl:h-[30rem] 2xl:w-[30rem]"
            />
            <Tag tag="yu-gi-oh-card.png" hoverTag="24.10.24" QRSrc="soft_dev" />
        </div>
    );

    return (
        <div className="relative flex min-h-full w-full flex-col items-center justify-center p-4 font-SpaceMono text-2xs tracking-wide text-foreground sm:text-xs">
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
