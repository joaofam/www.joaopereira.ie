import React, { useState, useEffect } from 'react';

import Image from 'next/image';

const ScrambleButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isShrinking, setIsShrinking] = useState(false);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (isHovered) {
            timeout = setTimeout(() => {
                setIsShrinking(true);
            }, 300);
        } else {
            setIsShrinking(false);
        }
        return () => clearTimeout(timeout);
    }, [isHovered]);

    const handleTransitionEnd = () => {
        if (isHovered) {
            setIsAnimationComplete(true);
        } else if (isAnimationComplete) {
            setIsAnimationComplete(false);
            setIsShrinking(false);
        }
    };

    return (
        <div className="relative w-28 h-8 bg-background overflow-hidden">
            <div
                className={`absolute inset-y-0 bg-white transition-all duration-300 ease-in-out ${
                    isHovered
                        ? isShrinking
                            ? 'right-0 w-1/6'
                            : 'w-full'
                        : reverse && isAnimationComplete
                        ? 'right-0 w-full'
                        : 'left-0 w-1/6'
                }`}
                onTransitionEnd={handleTransitionEnd}
            />
            <button
                onMouseEnter={() => {
                    setReverse(false);
                    setIsHovered(true);
                    setIsAnimationComplete(false);
                }}
                onMouseLeave={() => {
                    setReverse(true);
                    setIsHovered(false);
                }}
                className={`relative z-10 w-full h-full flex items-center justify-center transition-colors duration-300 ease-in-out ${
                    isHovered || (reverse && isAnimationComplete) ? 'text-background' : 'text-foreground'
                }`}
            >
                Github
            </button>
            <Image
                className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-[2px]"
                src="/logos/Tools/Github-dark.svg"
                alt="github"
                width={22}
                height={22}
            />
        </div>
    );
};

export default ScrambleButton;