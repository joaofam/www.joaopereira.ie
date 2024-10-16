import React, { useEffect, useRef } from 'react';

import { useScramble } from 'use-scramble';

import { ScrambleProps } from '@/types/types';

const Scramble: React.FC<ScrambleProps> = ({
    children,
    shouldScramble,
    textHovered,
    className,
    loop
}) => {
    const text = typeof children === 'string' ? children : '';
    const { ref, replay } = useScramble({
        text: text,
        playOnMount: false,
        speed: 1,
    });

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (shouldScramble || textHovered !== undefined) {
            replay();
        }
    }, [shouldScramble, textHovered, replay]);

    useEffect(() => {
        const handleMouseEnter = () => {
            replay();
        };

        const divElement = divRef.current;
        if (divElement) {
            divElement.addEventListener('mouseenter', handleMouseEnter);
        }

        return () => {
            if (divElement) {
                divElement.removeEventListener('mouseenter', handleMouseEnter);
            }
        };
    }, [replay]);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (loop) {
            interval = setInterval(() => {
                replay();
            }, 100); // Adjust the interval time as needed
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [loop, replay]);

    return (
        <span ref={divRef} className={className}>
            <span ref={ref}>{children}</span>
        </span>
    );
};

export default Scramble;