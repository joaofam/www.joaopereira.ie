'use client';

import React from 'react';

import { FieldSet } from '@/app/components/common/FieldSet/FieldSet/index';
import { Legend } from '@/app/components/common/FieldSet/Legend';
import { SectionHeader } from '@/app/components/common/FieldSet/SectionHeader/index';
import { ShutterRow } from '@/app/components/common/ShutterRow/index';

const experiences = [
    {
        columns: [
            {
                default: 'Concurrent Engineering',
                hover: 'Associate Applications Developer',
            },
            {
                default: '10/23 - Present [1 year]',
                hover: 'Java Python JS TS NextJS SQL PTC Agile',
            },
        ],
    },
    {
        columns: [
            {
                default: 'Klas Telecom',
                hover: 'Software Developer Intern',
            },
            {
                default: '03/23 - 08/23 [6 Months]',
                hover: 'Python React Ansible SQL TestRail Scrum',
            },
        ],
    },
];

const ExperienceList = () => (
    <FieldSet className="relative w-full border px-2 py-4 sm:py-8 md:px-8">
        <Legend 
            title="~~~~~~~"
            className="tracking-wide text-secondary"
        />
        {experiences.map((experience, index) => (
            <ShutterRow key={index} columns={experience.columns} />
        ))}
    </FieldSet>
);

export const Experience = () => {
    return (
        <div className="relative flex h-[75vh] w-full items-center justify-center font-SpaceMono tracking-tight text-foreground">
            <div className="relative w-full">
                <SectionHeader 
                    title="Experience" 
                    count={2}
                    className="cursor-default py-8 font-Nohemi text-4xl sm:text-4xl font-regular 2xl:text-6xl"
                />
                <ExperienceList />
            </div>
        </div>
    );
};