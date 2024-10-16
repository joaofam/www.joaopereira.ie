'use client';

import React from 'react';

import Button from '@/components/common/Button/index';
import { FieldSet } from '@/components/common/FieldSet/FieldSet/index';
import { Legend } from '@/components/common/FieldSet/Legend';
import { SectionHeader } from '@/components/common/FieldSet/SectionHeader/index';
import { ShutterRow } from '@/components/common/ShutterRow/index';

const projects = [
    {
        href: "https://github.com/joaofam/joaopereira.ie",
        columns: [
            {
                default: 'joaopereira.ie',
                hover: 'github.com/joaofam/joaopereira.ie',
                description: 'Personal Portfolio',
            },
            {
                default: 'Web Design',
                hover: 'NextJS TS TailwindCSS',
            },
            {
                default: '2024',
                hover: '2024',
            },
        ],
    },
    {
        href: "https://github.com/joaofam/FILEFLO",
        columns: [
            {
                default: 'Fileflo',
                hover: 'github.com/joaofam/FILEFLO',
                description: 'Blockchain File Storage/Sharing Platform',
            },
            {
                default: 'Blockchain, Crypto, Web Dev',
                hover: 'React AWS Python NodeJS Solidity Web3',
            },
            {
                default: '2023',
                hover: '2023',
            },
        ],
    },
    {
        href: "https://github.com/joaofam/Venato",
        columns: [
            {
                default: 'Venato',
                hover: 'github.com/joaofam/Venato',
                description: 'Android App for GRPS Tracking',
            },
            {
                default: 'IOT, Android Dev',
                hover: 'React Native AWS Android Studio Python',
            },
            {
                default: '2022',
                hover: '2022',
            },
        ],
    },
];

const ProjectList = () => (
    <FieldSet className="relative w-full border px-2 py-4 sm:py-8 md:px-8">
        <Legend 
            title="#######"
            className="tracking-wide text-secondary"
        />
        {projects.map((project, index) => (
            <ShutterRow key={index} href={project.href} columns={project.columns} />
        ))}
    </FieldSet>
);

export default function Projects() {
    return (
        <div className="sm:[25vh] relative flex h-[75vh] w-full items-center justify-center font-SpaceMono tracking-tight text-foreground md:h-[70vh] lg:h-[75vh] xl:h-[75vh] 2xl:h-[60vh]">
            <div className="relative w-full">
                <SectionHeader 
                    title="Projects" 
                    count={3}
                    className="cursor-default py-8 font-Nohemi text-4xl sm:text-4xl font-regular 2xl:text-6xl"
                />
                <ProjectList />
                <div className="pt-8 text-end">
                    <Button text="check my github" />
                </div>
            </div>
        </div>
    );
}