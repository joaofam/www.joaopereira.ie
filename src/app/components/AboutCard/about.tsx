'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { Experience } from '@/app/components/Experience/experience';
import Scramble from '@/app/components/Scramble/scramble';

interface DetailProps {
    title: string;
    content: string;
    hoveredTitle?: string;
    hoveredContent?: string;
}

const Details: DetailProps[] = [
    {
        title: 'Name',
        content: 'Joao Pereira',
        hoveredTitle: 'Pronounciation',
        hoveredContent: 'Jo-ow Pe-ray-ra',
    },
    {
        title: 'Location',
        content: 'Dublin, Ireland',
        hoveredTitle: 'Origin',
        hoveredContent: 'Portugal',
    },
    {
        title: 'About Me',
        content:
            'I like to consider myself full (if not too, too full of) of enthusiasm within the world I live in.\n\nI am quite passionate for many things and hobbies including music, gym, hiking/camping (scary stuff...), football as well as cycling a fixie and above all 35/125mm film photography.\n\nOther than that I like to think I am a pretty cool sociable guy who likes to take life on the chill side and eat food.',
        hoveredTitle: 'Insert Title',
        hoveredContent:
            'Hi',
    },
];

export default function About() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center px-0 font-HK text-sm tracking-widest text-foreground">
            <h1 className="self-start font-rapscript text-4xl sm:text-5xl font-bold leading-none">
                <Scramble>{"About Me<-"}</Scramble>
            </h1>
            <div className="grid w-full grid-cols-1 sm:grid-cols-5 grid-rows-2 sm:grid-rows-1 items-center gap-1">
    <div className="row-span-1 sm:col-span-3 space-y-8">
        {Details.map((detail, index) => (
            <div
                key={index}
                className="grid grid-cols-5 gap-4"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
            >
                <span className="col-span-1 w-20">
                    <Scramble>
                        {hoveredIndex === index
                            ? detail.hoveredTitle || detail.title
                            : detail.title}
                    </Scramble>
                </span>
                <span
                    className="col-span-4 whitespace-pre-wrap"
                    style={{ lineHeight: '1.5' }}
                >
                    <Scramble shouldScramble={false}>
                        {hoveredIndex === index
                            ? detail.hoveredContent || detail.content
                            : detail.content}
                    </Scramble>
                </span>
            </div>
        ))}
    </div>
    <div className="row-span-1 sm:col-span-2 flex items-center justify-center">
        <Image
            width={500}
            height={500}
            src="/CD-case.png"
            alt="Profile Picture"
        />
    </div>
</div>
            <div className="w-full pt-4">
                <p className="font-hk pl-2 text-xs tracking-widest text-[#b0b0b0]">
                    Experience
                </p>
                <Experience
                    companyName="Concurrent Engineering"
                    period="10/23 - Present"
                    role="Associate Applications Developer"
                    technologies="Java, JS, NextJS, SQL, PTC"
                />
                <Experience
                    companyName="Klas Telecom"
                    period="03/23 - 08/23"
                    role="Software Developer Intern"
                    technologies="Python, React, Ansible, SQL"
                />
            </div>
        </div>
    );
}