'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Scramble from '@/app/components/Scramble/scramble';

interface LinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
    isParentHovered?: boolean;
    colorChange?: string;
    linearColor?: string;
    color?: string; // New color prop
}

export const CustomLink: React.FC<LinkProps> = ({
    href,
    className,
    children,
    isParentHovered,
    colorChange,
    linearColor,
    color, // Destructure the new color prop
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const effectiveIsHovered = isParentHovered ?? isHovered;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const iconSrc = effectiveIsHovered && color ? `/icons/arrows/arrow-right-${color}.svg` : '/icons/arrows/arrow-right.svg';

    return (
        <Link
            href={href}
            className={`font-HK text-md inline-flex items-center ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span
                className={`
                    relative bg-[linear-gradient(transparent,transparent),${linearColor}] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-md text-foreground transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] ${effectiveIsHovered ? colorChange : ''}
                `}
            >
                <Scramble shouldScramble={effectiveIsHovered}>{children}</Scramble>
            </span>
            <Image
                src={iconSrc}
                alt=""
                width={18}
                height={18}
                className={`mt-0 transition-transform duration-300 
                    ${effectiveIsHovered ? 'rotate-[-45deg] fill-cyan-500' : ''}
                `}
            />
        </Link>
    );
};