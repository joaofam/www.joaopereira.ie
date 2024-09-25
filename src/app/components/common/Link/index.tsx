import React, { useState } from 'react';

import { animate } from 'framer-motion';
import { Link } from 'next-transition-router';

import { LinkProps } from '@/app/types/types';

export const CustomLink: React.FC<LinkProps> = ({
    href,
    className,
    children,
    white = false,
    blank = false,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        if (href === '#top') {
            e.preventDefault();
            animate(window.scrollY, 0, {
                duration: 0.5,
                onUpdate: value => window.scrollTo(0, value),
            });
        }
    };

    const commonProps = {
        href,
        className: `inline-flex items-center uppercase tracking-wide text-2xs text-foreground sm:text-xs md:text-sm 2xl:text-sm ${className} group relative overflow-hidden`,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        onClick: handleClick,
    };

    const LinkComponent = blank ? 'a' : Link;

    return (
        <LinkComponent
            {...commonProps}
            {...(blank ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
            <span
                className="relative inline-block transform transition-all duration-300 ease-in-out"
                style={{
                    transform: isHovered ? 'rotateX(180deg)' : 'rotateX(0deg)',
                    transformOrigin: 'center',
                }}
            >
                <span
                    className="inline-block transition-all duration-300 ease-in-out"
                    style={{
                        opacity: isHovered ? 0 : 1,
                        transform: isHovered
                            ? 'translateY(-100%)'
                            : 'translateY(0)',
                    }}
                >
                    {children}
                </span>
                <span
                    className={`absolute inset-0 inline-block ${white ? 'text-white' : 'text-primary'} italic transition-all duration-300 ease-in-out`}
                    style={{
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered
                            ? 'translateY(0) rotateX(180deg)'
                            : 'translateY(100%) rotateX(180deg)',
                    }}
                >
                    {children}
                </span>
            </span>
        </LinkComponent>
    );
};
