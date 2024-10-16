'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import DetailItem from '@/components/Common/DetailItem';
import DualContainer from '@/components/Common/DualContainer/index';
import { Legend } from '@/components/Common/FieldSet/Legend/index';
import { Tag } from '@/components/Common/ImageTag/index';
import Scramble from '@/components/Common/Scramble/index';
import { DetailProps } from '@/types/types';

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
            <Legend title="endeavours" className="text-primary" />
            <span
                className="whitespace-pre-wrap text-2xs text-xs tracking-tight sm:text-xs 2xl:text-sm"
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
                    hours a week and spend the rest either in a meeting or
                    eating lunch.
                    <br />
                    <br />
                    Other than that, I like to{' '}
                    <Scramble
                        shouldScramble={textHovered}
                        className={scrambleClass}
                    >
                        {textHovered ? 'explore' : 'throw myself into'}
                    </Scramble>{' '}
                    different hobbies and skillsets so life doesnt become too
                    stale. Some of my hobbies include{' '}
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
                            ? 'sharing insights and experiences.'
                            : '[possibly in the future] blogs of knowledge.'}
                    </Scramble>{' '}
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
