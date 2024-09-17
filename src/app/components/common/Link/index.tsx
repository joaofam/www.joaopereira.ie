'use client';

import { useState } from 'react';

import { Link } from 'next-transition-router';

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
    const [isLeaving, setIsLeaving] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsLeaving(false);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsLeaving(true);
    };

    return (
        <Link
            href={href}
            className={`inline-flex items-center text-sm uppercase tracking-wide sm:text-sm ${className} group font-SpaceMono font-light`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span
                className={`transition-all ${isHovered ? 'animate-glitchyHover' : ''} ${isLeaving ? 'animate-glitchyLeave' : ''} `}
            >
                {children}
            </span>
        </Link>
    );
};
