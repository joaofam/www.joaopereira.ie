'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Scramble from '@/app/components/Scramble/scramble';

interface LinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
    white?: boolean;
}

export const CustomLink: React.FC<LinkProps> = ({
    href,
    className,
    children,
    white = false,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const iconSrc = white ? "/icons/arrow-right-white.svg" : "/icons/arrow-right.svg";

    return (
        <Link
            href={href}
            className={`font-HK text-md inline-flex items-center ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span
                className={`
                    relative bg-[linear-gradient(transparent,transparent),bg-[linear-gradient(#383838,#383838) bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-md transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px]
                `}
            >
                <Scramble>{children}</Scramble>
            </span>
            <Image
                src={iconSrc}
                alt=""
                width={18}
                height={18}
                className={`mt-0 transition-transform duration-300 
                    ${isHovered ? 'rotate-[-45deg] fill-cyan-500' : ''}
                `}
            />
        </Link>
    );
};