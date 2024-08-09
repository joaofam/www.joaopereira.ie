'use client';

import React, { useState } from 'react';

import { motion, useMotionValue, useSpring } from 'framer-motion';
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
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const imageX = useSpring(mouseX, springConfig);
    const imageY = useSpring(mouseY, springConfig);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const imageSize = 200;
        mouseX.set(event.clientX - rect.left - imageSize / 2);
        mouseY.set(event.clientY - rect.top - imageSize / 2);
    };

    const iconSrc = isHovered
        ? `/icons/arrows/arrow-right-tertiary.svg`
        : '/icons/arrows/arrow-right.svg';

    return (
        <motion.div
            className="grid cursor-pointer grid-cols-[2fr_3fr_1fr_1fr] grid-rows-1 justify-center gap-4 border-b py-8 hover:border-b-tertiary hover:font-bold hover:italic hover:text-tertiary transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
        >
            {isHovered && imageSrc && (
                <motion.div
                    className="pointer-events-none absolute z-10"
                    style={{
                        x: imageX,
                        y: imageY,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                >
                    <Image
                        src={imageSrc}
                        width={200}
                        height={200}
                        alt={name}
                        className="rounded-md object-cover"
                    />
                </motion.div>
            )}
            <div className="simple-p-projects">
                <Scramble shouldScramble={isHovered}>{name}</Scramble>
            </div>
            <div className="simple-p-projects">
                <Scramble shouldScramble={isHovered}>{area}</Scramble>
            </div>
            <div className="flex justify-end pr-4">
                <div className="simple-p-heading">
                    <Scramble shouldScramble={isHovered}>{date}</Scramble>
                </div>
            </div>
            <div className="flex justify-end pr-12">
                <Image
                    src={iconSrc}
                    width={24}
                    height={24}
                    alt="expand"
                    className={`transform transition-transform duration-300 ease-in-out ${isHovered ? 'rotate-[-45deg]' : ''}`}
                />
            </div>
        </motion.div>
    );
};

export default function Projects() {
    return (
        <div>
            <Card className="relative flex h-4/5 w-full items-center justify-center px-32 py-16 pb-28">
                <CardContent className="relative z-10 flex w-full flex-col items-center justify-center space-y-8">
                    <h1 className="transition duration-500 hover:text-tertiary">
                        <Scramble>Project Showcase</Scramble>
                    </h1>
                    <div className="grid w-full grid-cols-1 grid-rows-4">
                        {/* Header */}
                        <div className="grid w-full grid-cols-[2fr_3fr_1fr_1fr] grid-rows-1 items-end gap-4 border-b pb-2">
                            <div className="simple-p-heading">Name</div>
                            <div className="simple-p-heading">Area</div>
                            <div className="flex justify-end pr-4">
                                <div className="simple-p-heading">Date</div>
                            </div>
                            <div className="flex justify-end pr-4">
                                <div className="simple-p-heading">Expand</div>
                            </div>
                        </div>
                        {/* Project List Items */}
                        {projects.map(project => (
                            <ProjectListItem key={project.name} {...project} />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
