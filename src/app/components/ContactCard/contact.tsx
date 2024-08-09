'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { CustomLink } from '@/app/components/Link/link';
import Scramble from '@/app/components/Scramble/scramble';
import { Card, CardContent } from '@/app/components/ui/card';

interface ContactSectionProps {
    icon: string;
    width: number;
    title: string;
    content: string;
    linkText: string;
    href: string;
    colorChange: string;
    brand: string;
}

const brandBackgrounds = {
    'bg-calendly':
        'linear-gradient(to top right, #006BFF, #0A0A0A, #0A0A0A, #0A0A0A, #0A0A0A)',
    'bg-github':
        'linear-gradient(to top right, #24292E, #0A0A0A, #0A0A0A, #0A0A0A, #0A0A0A)',
    'bg-resend':
        'linear-gradient(to top right, #FFD700, #0A0A0A, #0A0A0A, #0A0A0A, #0A0A0A)',
};

const ContactSection: React.FC<ContactSectionProps> = ({
    icon,
    width,
    title,
    content,
    linkText,
    href,
    colorChange,
    brand,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`bg-1/2 relative col-span-1 flex h-full w-full cursor-pointer flex-col space-y-4 border-r-1 px-8 py-12 transition duration-500 hover:opacity-100 ${brand}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex w-full flex-col items-start space-y-4">
                <h3>
                    <Scramble shouldScramble={isHovered}>{title}</Scramble>
                </h3>
                <p className="simple-p">{content}</p>
            </div>
            <div className="flex w-full items-center justify-between">
                <div
                    className={`absolute bottom-8 transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image src={icon} alt="" width={width} height={0} />
                </div>
                <div className="flex-grow"></div>
                <div className="flex items-center justify-end">
                    <CustomLink
                        isParentHovered={isHovered}
                        colorChange={colorChange}
                        href={href}
                        iconSrc="/icons/arrow-right.svg"
                    >
                        {linkText}
                    </CustomLink>
                </div>
            </div>
        </div>
    );
};

const contactSections = [
    {
        icon: '/logos/Contact/Calendly.svg',
        width: 125,
        title: 'Schedule Meeting',
        content:
            'Click the link below to schedule a quick talk on whatever you require',
        linkText: 'Calendly',
        href: '/',
        color: '#006BFF',
        brand: 'hover:bg-calendly',
        colorChange: "text-blueColor",
    },
    {
        icon: '/logos/Contact/Github.svg',
        width: 32,
        title: 'Check my work',
        content:
            'Click the link below to schedule a quick talk on whatever you require',
        linkText: 'Github',
        href: '/',
        color: '#c7c7c7',
        brand: 'hover:bg-github',
        colorChange: 'text-[#c7c7c7]',
    },
    {
        icon: '/logos/Contact/Resend.svg',
        width: 90,
        title: 'Contact me here',
        content:
            'Click the link below to schedule a quick talk on whatever you require',
        linkText: 'Email',
        href: '/',
        color: '#c7c7c7',
        brand: 'hover:bg-resend',
        colorChange: 'text-[#c7c7c7]',
    },
];

export default function Contact() {
    return (
        <Card className="relative w-full">
            <CardContent className="relative z-10">
                <div className="grid grid-cols-3">
                    {contactSections.map(section => (
                        <ContactSection key={section.title} {...section} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
