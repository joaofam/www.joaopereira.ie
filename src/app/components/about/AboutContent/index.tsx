'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { Tag } from '@/app/components/common/ImageTag/index';
import Scramble from '@/app/components/common/Scramble/index';

interface DetailProps {
    title: string;
    content: string;
    hoveredTitle?: string;
    hoveredContent?: string;
}

const Details: DetailProps[] = [
    {
        title: 'name',
        content: 'Joao Pereira',
        hoveredTitle: 'pronunciation',
        hoveredContent: 'Jo-ow Pe-ray-ra',
    },
    {
        title: 'location',
        content: 'Dublin, Ireland',
        hoveredTitle: 'origin [nationality]',
        hoveredContent: 'Lisbon, Portugal',
    },
    {
        title: 'personal endeavours',
        content:
            'Usually week-by-week, within the job, i code for 30 hours a week and spend the rest either on a meeting or eating lunch.\n\nOther than that I like to throw myself out into different hobbies and skillsets so I dont become the void of a person. My interests lie primarily within 35/120m photosgraphy, fitness [football and gym], music and cycling as well as the expensive hobby of collecting Lego.\n\n I plan to utilise this space as a hub for myself in regards to anything tech as well as [possibly in the future] blogs of knowledge n things in life that interest me as mentioned.',
        hoveredTitle: 'personal endeavours [+]',
        hoveredContent: 'Hi',
    },
    {
        title: 'os of choice',
        content: 'Debian',
        hoveredTitle: 'Primary OS',
        hoveredContent: 'Ubuntu [for its stableness]',
    },
    {
        title: 'ide of choice',
        content: 'vscode intellij',
        hoveredTitle: 'ide of choice',
        hoveredContent: '[nvim when in the cli]',
    },
    {
        title: 'coffee order',
        content: 'espresso [double sometimes]',
        hoveredTitle: 'coffee order',
        hoveredContent: 'cinnamon bun',
    },
    {
        title: 'favourite tech trends',
        content: 'Dublin, Ireland',
        hoveredTitle: 'Favourite Tech Trends',
        hoveredContent: 'Portugal',
    },
];

interface DetailItemProps {
    detail: DetailProps;
    index: number;
    hoveredIndex: number | null;
    onMouseEnter: (index: number) => void;
    onMouseLeave: () => void;
}

const DetailItem: React.FC<DetailItemProps> = ({
    detail,
    index,
    hoveredIndex,
    onMouseEnter,
    onMouseLeave,
}) => (
    <div
        className="relative p-4"
        onMouseEnter={() => onMouseEnter(index)}
        onMouseLeave={onMouseLeave}
    >
        <span
            className={`absolute left-4 top-0 -translate-y-1/2 transform bg-white px-2 font-bold ${
                hoveredIndex === index ? 'uppercase text-blue-500' : ''
            }`}
        >
            <Scramble shouldScramble={hoveredIndex === index}>
                {hoveredIndex === index
                    ? (detail.hoveredTitle ?? detail.title)
                    : detail.title}
            </Scramble>
        </span>
        <span className="whitespace-pre-wrap" style={{ lineHeight: '1.5' }}>
            <Scramble shouldScramble={hoveredIndex === index}>
                {hoveredIndex === index
                    ? (detail.hoveredContent ?? detail.content)
                    : detail.content}
            </Scramble>
        </span>
    </div>
);

const PersonalEndeavours: React.FC<DetailItemProps> = ({
    detail,
    index,
    hoveredIndex,
    onMouseEnter,
    onMouseLeave,
}) => (
    <div
        className="relative border border-foreground p-8"
        onMouseEnter={() => onMouseEnter(index)}
        onMouseLeave={onMouseLeave}
    >
        <span
            className={`absolute left-4 top-0 -translate-y-1/2 transform bg-white px-2 text-2xs font-bold uppercase tracking-wider text-blue-500 ${
                hoveredIndex === index ? 'uppercase text-blue-500' : ''
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
            <Scramble shouldScramble={hoveredIndex === index}>
                {hoveredIndex === index
                    ? (detail.hoveredContent ?? detail.content)
                    : detail.content}
            </Scramble>
        </span>
    </div>
);

export default function AboutContent() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center font-SpaceMono text-xs text-foreground 2xl:text-sm">
            <div className="grid h-full w-full grid-cols-1 grid-rows-4 items-start gap-4 sm:grid-cols-5 sm:grid-rows-3">
                {/* About Content */}
                <div className="row-span-3 flex h-full flex-col justify-start space-y-8 sm:col-span-3">
                    <div className="relative h-full space-y-8 border border-foreground p-10">
                        <span className="absolute left-4 top-0 -translate-y-1/2 transform bg-white px-2 font-bold lowercase 2xl:text-sm">
                            About
                        </span>
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
                            detail={Details[2]}
                            index={2}
                            hoveredIndex={hoveredIndex}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                        <div className="mt-4 grid grid-cols-2 gap-4">
                            {Details.slice(3, 7).map((detail, index) => (
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
                </div>
                {/* About Image */}
                <div className="row-span-1 flex items-start justify-end sm:col-span-2">
                    <div className="relative flex flex-col items-center">
                        <div className="relative h-[26rem] w-[26rem] border-1 border-b-0 border">
                            <Image
                                src="/CD.png"
                                alt="CD Case"
                                priority={true}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className="w-[26rem]">
                            <Tag
                                tag="CD.png"
                                hoverTag="Insert CD into CD-ROM"
                                QRSrc="soft_dev"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
