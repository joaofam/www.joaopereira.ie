import React, { useEffect, useRef } from 'react';

import { useScramble } from 'use-scramble';

interface ScrambleProps {
    children: React.ReactNode;
    shouldScramble?: boolean;
    textHovered?: boolean;
    className?: string;
}

const Scramble: React.FC<ScrambleProps> = ({
    children,
    shouldScramble,
    textHovered,
    className,
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

    return (
        <span ref={divRef} className={className}>
            <span ref={ref}>{children}</span>
        </span>
    );
};

export default Scramble;
