'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { Card, CardContent } from '@/app/components/ui/card';

interface ProjectListItemProps {
    name: string;
    area: string;
    date: string;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({
    name,
    area,
    date,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="grid cursor-pointer grid-cols-[2fr_3fr_1fr_1fr] grid-rows-1 justify-center gap-4 border-b py-8 hover:font-bold hover:italic"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="simple-p">{name}</div>
            <div className="simple-p">{area}</div>
            <div className="flex justify-end pr-4">
                <div className="simple-p-heading">{date}</div>
            </div>
            <div className="flex justify-end pr-12">
                <Image
                    src="/icons/arrow-right.svg"
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
    const projects = [
        {
            name: 'Fileflo',
            area: 'Blockchain, Cryptography, Web Dev',
            date: '2024',
        },
        { name: 'Venato', area: 'IOT, Mobile Development', date: '2023' },
        { name: 'joaopereira.ie', area: 'Web Design', date: '2024' },
    ];

    return (
        <div>
            <Card className="relative flex h-4/5 w-full items-center justify-center px-32 py-16 pb-28">
                <CardContent className="relative z-10 flex w-full flex-col items-center justify-center space-y-8">
                    <h1>Project Showcase</h1>
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
