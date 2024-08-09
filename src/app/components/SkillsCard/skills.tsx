'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import Scramble from '@/app/components/Scramble/scramble';
import { Card, CardContent } from '@/app/components/ui/card';

const areasOfInterest = [
    'Full Stack',
    'Backend',
    'Frontend',
    'Devops',
    'Design',
];

const frontendStack = [
    'NextJS',
    'React',
    'Figma',
    'TypeScript',
    'JavaScript',
    'Tailwind',
    'Framer Motion',
    'GSAP',
    'SCSS',
];

const backendStack = [
    'Python',
    'Java',
    'NodeJS',
    'GoLang',
    'Express',
    'Flask',
    'GraphQL',
    'REST',
    'SQL',
];

const toolsStack = [
    'Linux',
    'Git',
    'AWS',
    'PTC',
    'Docker',
    'Jenkins',
    'JIRA',
    'Azure',
    'Linear',
];

const certifications = [
    'PTC ThingWorx Associate',
    'PTC ThingWorx Models',
    'PTC ThingWorx Mashups',
    'PTC Kepware Associate',
];

const logos = [
    { src: '/logos/Frontend/NextJS.svg', alt: 'nextjs', width: 36, height: 36 },
    { src: '/logos/Frontend/React.svg', alt: 'react', width: 36, height: 36 },
    { src: '/logos/Frontend/Figma.svg', alt: 'figma', width: 24, height: 28 },
    {
        src: '/logos/Frontend/TypeScript.svg',
        alt: 'typescript',
        width: 32,
        height: 32,
    },
    {
        src: '/logos/Frontend/JavaScript.svg',
        alt: 'javascript',
        width: 32,
        height: 32,
    },
    {
        src: '/logos/Frontend/Tailwind.svg',
        alt: 'tailwind',
        width: 32,
        height: 32,
    },
    {
        src: '/logos/Frontend/FramerMotion.svg',
        alt: 'framer motion',
        width: 32,
        height: 32,
    },
    { src: '/logos/Frontend/GSAP.svg', alt: 'gsap', width: 32, height: 32 },
    { src: '/logos/Frontend/SCSS.svg', alt: 'scss', width: 32, height: 32 },
    { src: '/logos/Backend/Python.svg', alt: 'python', width: 32, height: 32 },
    { src: '/logos/Backend/Java.svg', alt: 'java', width: 32, height: 32 },
    { src: '/logos/Backend/NodeJS.svg', alt: 'nodejs', width: 32, height: 32 },
    { src: '/logos/Backend/GoLang.svg', alt: 'golang', width: 32, height: 32 },
    {
        src: '/logos/Backend/Express.svg',
        alt: 'express',
        width: 32,
        height: 32,
    },
    { src: '/logos/Backend/Flask.svg', alt: 'flask', width: 32, height: 32 },
    {
        src: '/logos/Backend/GraphQL.svg',
        alt: 'graphql',
        width: 32,
        height: 32,
    },
    { src: '/logos/Tools/Linux.svg', alt: 'linux', width: 32, height: 32 },
    { src: '/logos/Tools/Git.svg', alt: 'git', width: 32, height: 32 },
    { src: '/logos/Tools/AWS.svg', alt: 'aws', width: 32, height: 32 },
    { src: '/logos/Tools/PTC.svg', alt: 'ptc', width: 32, height: 32 },
    { src: '/logos/Tools/Docker.svg', alt: 'docker', width: 32, height: 32 },
    { src: '/logos/Tools/Jenkins.svg', alt: 'jenkins', width: 32, height: 32 },
    { src: '/logos/Tools/JIRA.svg', alt: 'jira', width: 32, height: 32 },
    { src: '/logos/Tools/Linear.svg', alt: 'linear', width: 32, height: 32 },
];

export default function Skills() {
    const columns = 12;
    const rows = Math.ceil(logos.length / columns);

    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <div>
            <Card className="relative flex h-full items-center justify-between px-12 py-8">
                <h1 className="text-left">Stack</h1>{' '}
                <div>
                    <p className="simple-p-heading text-left">
                        Areas of interst
                    </p>
                    <div className="flex space-x-5">
                        {areasOfInterest.map((area, index) => (
                            <p key={index} className="simple-p">
                                {area}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="absolute left-1/3 top-0 h-full w-px bg-secondary"></div>
            </Card>

            <Card className="relative flex h-4/5 w-full items-center justify-center border-b-0 py-16">
                <CardContent className="relative z-10">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="flex h-full flex-col px-4">
                            <p className="simple-p-heading text-left">
                                Front End
                            </p>
                            {frontendStack.map((frontendItem, index) => (
                                <p
                                    key={index}
                                    className="simple-p hover:italic hover:text-tertiary"
                                    onMouseEnter={() =>
                                        setHoveredSkill(frontendItem)
                                    }
                                    onMouseLeave={() => setHoveredSkill(null)}
                                >
                                    <Scramble>{frontendItem}</Scramble>
                                </p>
                            ))}
                        </div>
                        <div className="flex h-full flex-col px-4">
                            <p className="simple-p-heading text-left">
                                Back End
                            </p>
                            {backendStack.map((backendItem, index) => (
                                <p
                                    key={index}
                                    className="simple-p hover:italic hover:text-tertiary"
                                >
                                    <Scramble>{backendItem}</Scramble>
                                </p>
                            ))}
                        </div>
                        <div className="flex h-full flex-col px-4">
                            <p className="simple-p-heading text-left">Tools</p>
                            {toolsStack.map((toolsItem, index) => (
                                <p
                                    key={index}
                                    className="simple-p hover:italic hover:text-tertiary"
                                >
                                    <Scramble>{toolsItem}</Scramble>
                                </p>
                            ))}
                        </div>
                        <div className="flex h-full flex-col px-4">
                            <p className="simple-p-heading text-left">
                                Certifications
                            </p>
                            {certifications.map((certification, index) => (
                                <p
                                    key={index}
                                    className="simple-p hover:italic hover:text-tertiary"
                                >
                                    <Scramble>{certification}</Scramble>
                                </p>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className="relative flex h-48 h-full w-full items-center">
                <div className="border-backgrund grid h-48 w-full grid-cols-12 grid-rows-2">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className={`border-backgrund relative flex items-center justify-center p-1 ${
                                (index + 1) % columns !== 0
                                    ? 'border-r-backgrund border-r'
                                    : ''
                            } ${
                                index < columns * (rows - 1)
                                    ? 'border-b-backgrund border-b'
                                    : ''
                            } ${
                                index % columns === 0
                                    ? 'border-l-backgrund border-l'
                                    : ''
                            } ${
                                index < columns
                                    ? 'border-t-backgrund border-t'
                                    : ''
                            }`}
                        >
                            {/* Default Logo */}
                            <Image
                                src={logo.src}
                                alt={`${logo.alt} default`}
                                width={logo.width}
                                height={logo.height}
                                className={`absolute inset-0 m-auto transition-opacity duration-300 ease-in-out ${hoveredSkill && hoveredSkill.toLowerCase() === logo.alt ? 'opacity-0' : 'opacity-100'}`}
                            />
                            {/* Colored Logo */}
                            <Image
                                src={logo.src.replace('.svg', '-color.svg')}
                                alt={`${logo.alt} colored`}
                                width={logo.width}
                                height={logo.height}
                                className={`absolute inset-0 m-auto transition-opacity duration-300 ease-in-out ${hoveredSkill && hoveredSkill.toLowerCase() === logo.alt ? 'opacity-100' : 'opacity-0'}`}
                            />
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
