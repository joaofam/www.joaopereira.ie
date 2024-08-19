'use client';

import Image from 'next/image';

import { Experience } from '@/app/components/Experience/experience';
import { CustomLink } from '@/app/components/Link/link';
import Scramble from '@/app/components/Scramble/scramble';

const Details = [
    {
        title: 'Name',
        content: 'Joao Pereira',
    },
    {
        title: 'Location',
        content: 'Dublin, Ireland',
    },
    {
        title: 'Nationality',
        content: 'Portugal',
    },
    {
        title: 'About Me',
        content:
            'Hi, I am Joao. I like to consider myself full (if not too, too full of) of enthusiasm within the world I live in. I am quite passionate for many things and hobbies including music, gym, hiking/camping (scary stuff...), football as well as cycling a fixie and above all 35/125mm film photography. Other than that I like to think I am a pretty cool sociable guy who likes to take life on the chill side and eat food.',
    },
];

export default function About() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center px-0 font-HK text-sm tracking-widest text-foreground">
            <h1 className="self-start pb-4 font-Nohemi text-5xl font-bold leading-none">
                Personal Ditt
                <span className="absolute z-10 mb-1 font-SwompSloppy tracking-tighter text-foreground">
                    O
                </span>
            </h1>
            <div className="grid w-full grid-cols-3 grid-rows-1 items-center gap-1">
                <div className="col-span-2 space-y-8">
                    {Details.map((detail, index) => (
                        <div key={index} className="grid grid-cols-5 gap-4">
                            <span className="col-span-1 w-20">
                                {detail.title}:
                            </span>
                            <span className="col-span-4">{detail.content}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        width={300}
                        height={300}
                        src="/profile.svg"
                        alt="Profile Picture"
                    />
                </div>
            </div>
            <div className="w-full pt-12">
                <p className="pl-2 font-hk text-xs tracking-widest text-[#b0b0b0]">Experience</p>
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
