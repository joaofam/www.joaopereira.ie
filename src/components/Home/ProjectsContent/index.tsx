'use client';

import React from 'react';

import Button from '@/components/Common/Button/index';
import { FieldSet } from '@/components/Common/FieldSet/FieldSet/index';
import { Legend } from '@/components/Common/FieldSet/Legend';
import { SectionHeader } from '@/components/Common/FieldSet/SectionHeader/index';
import { ShutterRow } from '@/components/Common/ShutterRow/index';
import { PROJECTS } from '@/consts/home';


const ProjectList = () => (
    <FieldSet className="relative w-full border px-2 py-4 sm:py-8 md:px-8">
        <Legend title="Hover/Click" className="tracking-wide text-secondary" />
        {PROJECTS.map((project, index) => (
            <ShutterRow
                key={index}
                href={project.href}
                columns={project.columns}
            />
        ))}
    </FieldSet>
);

export default function Projects() {
    return (
        <div className="relative flex w-full items-center justify-center font-SpaceMono tracking-tight text-foreground">
            <div className="relative w-full">
                <SectionHeader
                    title="Projects"
                    count={3}
                    className="cursor-default py-8 font-Nohemi text-4xl font-regular sm:text-4xl 2xl:text-6xl"
                />
                <ProjectList />
                <div className="pt-8 text-end">
                    <Button 
                        text="check my github"
                        href='https://github.com/joaofam'
                        blank
                    />
                </div>
            </div>
        </div>
    );
}
