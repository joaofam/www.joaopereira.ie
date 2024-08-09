'use client';

import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
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

const skills: { [key: string]: string[] } = {
    Frontend: [
        'NextJS',
        'React',
        'TypeScript',
        'JavaScript',
        'Tailwind',
        'Framer Motion',
        'GSAP',
        'Figma',
    ],
    Backend: [
        'Python',
        'Java',
        'NodeJS',
        'GoLang',
        'Express',
        'Flask',
        'GraphQL',
        'REST',
    ],
    Tools: ['Linux', 'Git', 'AWS', 'PTC', 'Docker', 'Jenkins', 'JIRA', 'Azure'],
    Certifications: [
        'PTC ThingWorx Associate',
        'PTC ThingWorx Models',
        'PTC ThingWorx Mashups',
        'PTC Kepware Associate',
    ],
};

const logos = {
    Frontend: [
        {
            src: '/logos/Frontend/nextjs.svg',
            alt: 'NextJS',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Frontend/react.svg',
            alt: 'React',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Frontend/TypeScript.svg',
            colorSrc: '/logos/Frontend/TypeScript-color.svg',
            alt: 'TypeScript',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Frontend/javascript.svg',
            alt: 'JavaScript',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Frontend/tailwind.svg',
            alt: 'Tailwind',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Frontend/framer-motion.svg',
            alt: 'Framer Motion',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Frontend/GSAP.svg',
            colorSrc: '/logos/Frontend/GSAP-color.svg',
            alt: 'GSAP',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Frontend/figma.svg',
            alt: 'Figma',
            width: '32',
            height: '32',
        },
    ],
    Backend: [
        {
            src: '/logos/Backend/python.svg',
            alt: 'Python',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Backend/java.svg',
            alt: 'Java',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Backend/nodejs.svg',
            alt: 'NodeJS',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Backend/golang.svg',
            alt: 'GoLang',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Backend/express.svg',
            alt: 'Express',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Backend/flask.svg',
            alt: 'Flask',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Backend/graphql.svg',
            alt: 'GraphQL',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Backend/rest.svg',
            alt: 'REST',
            width: '32',
            height: '32',
        },
    ],
    Tools: [
        {
            src: '/logos/Tools/linux.svg',
            alt: 'Linux',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Tools/git.svg',
            alt: 'Git',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Tools/aws.svg',
            alt: 'AWS',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Tools/ptc.svg',
            alt: 'PTC',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Tools/docker.svg',
            alt: 'Docker',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Tools/jenkins.svg',
            alt: 'Jenkins',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Tools/jira.svg',
            alt: 'JIRA',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Tools/azure.svg',
            alt: 'Azure',
            width: '32',
            height: '32',
        },
    ],
    Certifications: [
        {
            src: '/logos/Tools/PTC.svg',
            alt: 'PTC ThingWorx Associate',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Tools/PTC.svg',
            alt: 'PTC ThingWorx Models',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Tools/PTC.svg',
            alt: 'PTC ThingWorx Mashups',
            width: '32',
            height: '32',
        },
        {
            src: '/logos/Tools/PTC.svg',
            alt: 'PTC Kepware Associate',
            width: '32',
            height: '32',
        },
    ],
};

const categories = ['Frontend', 'Backend', 'Tools', 'Certifications'];

export function SkillsCarousel() {
    const [currentCategory, setCurrentCategory] = useState(0);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const goToPrevious = () => {
        setCurrentCategory(prev =>
            prev === 0 ? categories.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setCurrentCategory(prev =>
            prev === categories.length - 1 ? 0 : prev + 1
        );
    };

    const currentSkills = skills[categories[currentCategory]];
    const currentLogos = logos[categories[currentCategory]] || [];

    return (
        <Card className="flex h-4/5 w-full items-center justify-center">
            <CardContent className="w-full">
                <div className="grid h-full grid-cols-3">
                    <div className="flex flex-col justify-between border-r-1">
                        <div className="pb-16 pt-16">
                            <h2 className="pt-4 text-center">
                                <Scramble>Tech Stack</Scramble>
                            </h2>
                            <div className="pl-16 pt-4">
                                {categories.map((category, index) => (
                                    <p
                                        key={category}
                                        className={`simple-p${index === currentCategory ? '' : '-heading'}`}
                                    >
                                        <Scramble>{category}</Scramble>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="mt-auto grid h-16 grid-cols-2 border-t-1">
                            <div
                                className="flex cursor-pointer items-center justify-center"
                                onClick={goToPrevious}
                            >
                                <Image
                                    src="/icons/pixel-left.svg"
                                    alt="arrow"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <div
                                className="flex cursor-pointer items-center justify-center"
                                onClick={goToNext}
                            >
                                <Image
                                    src="/icons/pixel-right.svg"
                                    alt="arrow"
                                    width={24}
                                    height={24}
                                    className="transition-all duration-300 ease-in-out hover:opacity-0"
                                />
                                <Image
                                    src="/icons/pixel-right-focus.svg"
                                    alt="arrow-focus"
                                    width={24}
                                    height={24}
                                    className="absolute opacity-0 transition-all duration-300 ease-in-out hover:opacity-100"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Skills columns */}
                    <div className="flex h-full flex-col justify-between">
                        <div className="flex flex-col justify-start pl-36 pt-24">
                            {currentSkills.slice(0, 4).map(skill => (
                                <p
                                    key={skill}
                                    className="simple-p hover:italic hover:text-tertiary"
                                    onMouseEnter={() => setHoveredSkill(skill)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                >
                                    <Scramble>{skill}</Scramble>
                                </p>
                            ))}
                        </div>
                        <div className="grid grid-cols-4 border-t">
                            {currentLogos.slice(0, 4).map((logo, index) => (
                                <div key={index} className="flex h-16 items-center justify-center">
                                    <Image
                                        src={hoveredSkill === currentSkills[index] ? logo.colorSrc : logo.src}
                                        alt={logo.alt}
                                        width={logo.width}
                                        height={logo.height}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex h-full flex-col justify-between">
                        <div className="flex flex-col justify-start pt-24">
                            {currentSkills.slice(4).map((skill, index) => (
                                <p
                                    key={skill}
                                    className="simple-p hover:italic hover:text-tertiary"
                                    onMouseEnter={() => setHoveredSkill(skill)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                >
                                    <Scramble>{skill}</Scramble>
                                </p>
                            ))}
                        </div>
                        <div className="grid grid-cols-4 border-t">
                            {currentLogos.slice(4).map((logo, index) => (
                                <div key={index} className="flex h-16 items-center justify-center">
                                    <Image
                                        src={hoveredSkill === currentSkills[index + 4] ? logo.colorSrc : logo.src}
                                        alt={logo.alt}
                                        width={logo.width}
                                        height={logo.height}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
