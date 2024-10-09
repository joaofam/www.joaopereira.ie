'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import DetailItem from '@/app/components/common/DetailItem';
import DualContainer from '@/app/components/common/DualContainer/index';
import { Tag } from '@/app/components/common/ImageTag/index';
import Scramble from '@/app/components/common/Scramble/index';
import { DetailProps } from '@/app/types/types';

const Details: DetailProps[] = [
    {
        title: 'name',
        content: 'Joao Pereira',
        hoveredTitle: 'pronunciation',
        hoveredContent: 'Jow Per-air-ah',
    },
    {
        title: 'location',
        content: 'Dublin, Ireland',
        hoveredTitle: 'nationality',
        hoveredContent: 'Lisbon, Portugal',
    },
    {
        title: 'os of choice',
        content: 'Debian | Nix',
        hoveredTitle: 'Primary OS',
        hoveredContent: 'Ubuntu',
    },
    {
        title: 'ide',
        content: 'vscode intellij',
        hoveredTitle: 'cli ide',
        hoveredContent: 'nvim',
    },
    {
        title: 'coffee order',
        content: 'espresso [double sometimes]',
        hoveredTitle: 'coffee snack',
        hoveredContent: 'cinnamon bun',
    },
    {
        title: 'favourite tech trends',
        content: 'AI ML IOT and Web3',
        hoveredTitle: 'favourite tech areas',
        hoveredContent: 'Open Source Linux CLI Web Dev DevOps Cloud IoT',
    },
];

interface DetailItemProps {
    index: number;
    onMouseEnter: (index: number) => void;
    onMouseLeave: () => void;
}

const PersonalEndeavours: React.FC<DetailItemProps> = ({
    index,
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
                    textHovered ? 'uppercase text-primary' : ''
                } 2xl:text-xs`}
            >
                <Scramble shouldScramble={textHovered}>
                    {textHovered ? 'personal endeavours' : 'personal'}
                </Scramble>
            </span>
            <span
                className="whitespace-pre-wrap text-xs tracking-tight 2xl:text-sm"
                style={{ lineHeight: '1.5' }}
            >
                <p className="text-left sm:text-left">
                    Usually week-by-week, within the job, I code for{' '}
                    <Scramble
                        shouldScramble={textHovered}
                        className={scrambleClass}
                    >
                        {textHovered ? '35' : '30'}
                    </Scramble>{' '}
                    hours a week and spend the rest either on a meeting or
                    eating lunch.
                    <br />
                    <br />
                    Other than that I like to{' '}
                    <Scramble
                        shouldScramble={textHovered}
                        className={scrambleClass}
                    >
                        {textHovered ? 'explore' : 'throw myself out into'}
                    </Scramble>{' '}
                    different hobbies and skillsets so I dont become the void of
                    a person. My interests lie primarily within{' '}
                    <Scramble
                        shouldScramble={textHovered}
                        className={scrambleClass}
                    >
                        {textHovered ? 'street' : '35/120m'}
                    </Scramble>{' '}
                    photography, fitness [football and gym], music and cycling
                    as well as the{' '}
                    <Scramble
                        shouldScramble={textHovered}
                        className={scrambleClass}
                    >
                        {textHovered ? 'wallet-draining' : 'expensive'}
                    </Scramble>{' '}
                    hobby of collecting Lego.
                    <br />
                    <br />I plan to utilise this space as a hub for myself in
                    regards to anything tech as well as{' '}
                    <Scramble
                        shouldScramble={textHovered}
                        className={scrambleClass}
                    >
                        {textHovered
                            ? 'sharing insights and experiences'
                            : '[possibly in the future] blogs of knowledge'}
                    </Scramble>{' '}
                    n things in life that interest me as mentioned.
                    <br />
                    <br />
                    Life is what happens while youre busy making other plans.
                    [John Lennon]
                </p>
            </span>
        </div>
    );
};

export default function AboutContent() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    const rightContent = (
        <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
                {Details.slice(0, 2).map((detail, index) => (
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
            <PersonalEndeavours
                index={2}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <div className="mt-4 grid grid-cols-2 gap-4">
                {Details.slice(2, 6).map((detail, index) => (
                    <DetailItem
                        key={index + 3}
                        detail={detail}
                        index={index + 3}
                        hoveredIndex={hoveredIndex}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                ))}
            </div>
        </div>
    );

    const leftContent = (
        <div className="relative flex flex-col items-center">
            <div className="relative h-80 w-80 xl:h-[26rem] xl:w-[26rem] 2xl:h-[28rem] 2xl:w-[28rem]">
            <Image
                src="/CD.png"
                alt="CD Case"
                priority={true}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
            />
            </div>
            <div className="w-80 xl:w-[26rem]">
                <Tag
                    tag="CD.png"
                    hoverTag="Insert CD into CD-ROM"
                    QRSrc="soft_dev"
                />
            </div>
        </div>
    );

    return (
        <DualContainer
            leftContent={leftContent}
            rightContent={rightContent}
            leftTitle="img"
            rightTitle="about"
        />
    );
}
