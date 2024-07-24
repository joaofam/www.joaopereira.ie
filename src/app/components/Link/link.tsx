'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface LinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
    iconSrc?: string;
}

export const CustomLink: React.FC<LinkProps> = ({
    href,
    className,
    children,
    iconSrc,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <Link
            href={href}
            className={`inline-flex items-center ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className="relative bg-[linear-gradient(#262626,#262626),linear-gradient(#006BFF,#006BFF)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-foreground transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] hover:text-[#3b82f6]">
                {children}
            </span>
            {iconSrc && (
                <Image
                    src={iconSrc}
                    alt=""
                    width={22}
                    height={22}
                    className={`mt-1 transition-transform duration-300 ${isHovered ? 'rotate-[-45deg] fill-cyan-500' : ''}`}
                />
            )}
        </Link>
    );
};
