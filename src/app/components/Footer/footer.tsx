'use client';

import React, { useState } from 'react';

import { useScramble } from 'use-scramble';

import { CustomLink } from '@/app/components/Link/link';
import GridPattern from '@/app/components/magicui/grid-pattern';
import { Card, CardContent } from '@/app/components/ui/card';
import { cn } from '@/lib/utils';
interface FooterSectionProps {
    title: string;
    links: {
        href: string;
        label: string;
        colorChange: string;
        linearColor: string;
        color?: string;
    }[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
    <div className="grid grid-cols-1 grid-rows-4 items-end gap-px">
        <p className="simple-p-heading">{title}</p>
        {links.map(({ href, label, colorChange, linearColor, color }) => (
            <div key={label}>
                <CustomLink
                    key={label}
                    href={href}
                    className="text-right"
                    colorChange={colorChange}
                    linearColor={linearColor}
                    color={color}
                >
                    {label}
                </CustomLink>
            </div>
        ))}
    </div>
);

export const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);
    const { ref, replay } = useScramble({
        text: isHovered ? 'A Super Long Fooooooooooter' : 'Joao Pereira',
    });

    const sections = [
        {
            href: '/',
            label: 'Landing',
            colorChange: 'text-orange',
            linearColor: 'linear-gradient(#ffb697,#ffb697)',
            color: 'orange',
        },
        {
            href: '/',
            label: 'About',
            colorChange: 'text-yellow',
            linearColor: 'linear-gradient(#FFF597,#FFF597)',
            color: 'yellow',
        },
        {
            href: '/',
            label: 'Skills',
            colorChange: 'text-teal',
            linearColor: 'linear-gradient(#97fff3,#97fff3)',
            color: 'teal',
        },
        {
            href: '/',
            label: 'Projects',
            colorChange: 'text-pink',
            linearColor: 'linear-gradient(#d797ff,#d797ff)',
            color: 'pink',
        },
    ];

    const contacts = [
        {
            href: '/',
            label: 'LinkedIn',
            colorChange: 'text-royal',
            linearColor: 'linear-gradient(#346FE3,#346FE3)',
            color: 'royal',
        },
        {
            href: '/',
            label: 'Github',
            colorChange: 'text-foreground',
            linearColor: 'linear-gradient(#ffffff,#ffffff)',
        },
        {
            href: '/',
            label: 'Mail',
            colorChange: 'text-red',
            linearColor: 'linear-gradient(#FF9797,#FF9797)',
            color: 'red',
        },
        {
            href: '/',
            label: 'WhatsApp',
            colorChange: 'text-tertiary',
            linearColor: 'linear-gradient(#A8FF97,#A8FF97)',
            color: 'tertiary',
        },
    ];

    return (
        <Card className="relative flex h-1/2 w-full border-l-0 border-r-0 px-32">
            <CardContent className="relative z-10 h-full w-full">
                <div className="flex h-full flex-col">
                    <div className="grid flex-grow grid-cols-3">
                        <div className="col-span-2 py-16">
                            <h1
                                ref={ref}
                                onMouseOver={() => {
                                    setIsHovered(true);
                                    replay();
                                }}
                                onMouseLeave={() => {
                                    setIsHovered(false);
                                    replay();
                                }}
                                onFocus={() => replay()}
                                onBlur={() => replay()}
                                className="text-9xl font-bold transition hover:font-black hover:text-tertiary"
                            ></h1>
                        </div>
                        <div className="col-span-1 flex h-full items-center justify-end space-x-32">
                            <FooterSection title="Sections" links={sections} />
                            <FooterSection
                                title="Checkout my Socials"
                                links={contacts}
                            />
                        </div>
                    </div>
                </div>
            </CardContent>
            <div className="absolute bottom-0 left-0 px-4 py-2 text-white">
                <span>Copyright product of Joao Pereira</span>
            </div>
            <div className="absolute bottom-0 right-0 flex flex-col px-4 py-2 text-white">
                <p className="simple-p-heading">Checkout my socials</p>
                <div className="flex space-x-4">
                    <CustomLink href="/">Github</CustomLink>
                    <CustomLink href="/">Linkedin</CustomLink>
                    <CustomLink href="/">WhatsApp</CustomLink>
                </div>
            </div>
            <GridPattern
                width={20}
                height={20}
                x={-1}
                y={-1}
                className={cn(
                    '[mask-image:linear-gradient(to_top_left,white,transparent,transparent)]'
                )}
            />
        </Card>
    );
};
