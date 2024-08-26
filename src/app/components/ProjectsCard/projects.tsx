'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import Scramble from '@/app/components/Scramble/scramble';
import { Card, CardContent } from '@/app/components/ui/card';

interface ProjectListItemProps {
    name: string;
    area: string;
    date: string;
    imageSrc?: string;
}

const projects = [
    {
        name: 'Fileflo',
        area: 'Blockchain, Cryptography, Web Dev',
        date: '2024',
        imageSrc: '/projects/Fileflo.png',
    },
    { name: 'Venato', area: 'IOT, Mobile Development', date: '2023' },
    { name: 'joaopereira.ie', area: 'Web Design', date: '2024' },
];

const ProjectListItem: React.FC<ProjectListItemProps> = ({
    name,
    area,
    date,
    imageSrc,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="font-HK text-xs sm:text-sm md:text-sm tracking-widest grid cursor-pointer grid-cols-[2fr_3fr_1fr_1fr] grid-rows-1 justify-center gap-2 border-b px-2 py-4 transition-all duration-500 hover:bg-foreground hover:text-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && imageSrc && (
                <div className="pointer-events-none absolute z-10"></div>
            )}
            <div className="flex items-center">
                <Scramble shouldScramble={isHovered}>{name}</Scramble>
            </div>
            <div className="flex items-center">
                <Scramble shouldScramble={isHovered}>{area}</Scramble>
            </div>
            <div className="flex items-center justify-end pr-4">
                <div>
                    <Scramble shouldScramble={isHovered}>{date}</Scramble>
                </div>
            </div>
            <div className="flex items-center justify-end pr-12">
                <Image
                    src={isHovered ? '/icons/arrow-right-white.svg' : '/icons/arrow-right.svg'}
                    width={24}
                    height={24}
                    alt="expand"
                    className={`transform transition-transform duration-300 ease-in-out ${isHovered ? 'rotate-[-45deg]' : ''}`}
                />
            </div>
        </div>
    );
};

export default function Projects() {
    return (
        <div>
            <Card className="relative flex h-screen w-full items-center justify-center">
                <CardContent className="relative z-10 flex w-full flex-col items-center justify-center space-y-8">
                    <h1 className="flex justify-start self-start font-scrawler text-6xl font-bold text-foreground">
                        <span className="text-3xl mr-6">*</span><Scramble>PrOject$"</Scramble>
                    </h1>
                    <div className="grid w-full grid-cols-1 grid-rows-4">
                        <div className="grid grid-cols-[2fr_3fr_1fr_1fr] grid-rows-1 justify-center gap-2 border-b px-2 py-4">
                            <div className="font-HK text-xs tracking-widest text-[#b0b0b0] pt-4">
                                TITLE
                            </div>
                            <div className="font-HK text-xs tracking-widest text-[#b0b0b0] pt-4">
                                AREA
                            </div>
                            <div className="flex justify-end pr-4">
                                <div className="font-HK text-xs tracking-widest text-[#b0b0b0] pt-4">
                                    DATE
                                </div>
                            </div>
                            <div className="flex justify-end pr-12">
                                <div className="font-HK text-xs tracking-widest text-[#b0b0b0] pt-4">
                                    ICON
                                </div>
                            </div>
                        </div>
                        {projects.map(project => (
                            <ProjectListItem key={project.name} {...project} />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}