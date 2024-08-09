import React, { useEffect } from 'react';

import { useScramble } from 'use-scramble';

interface ScrambleProps {
    children: React.ReactNode;
    shouldScramble?: boolean;
}

const Scramble: React.FC<ScrambleProps> = ({ children, shouldScramble }) => {
    const text = typeof children === 'string' ? children : '';

    const { ref, replay } = useScramble({
        text: text,
        playOnMount: false,
    });

    useEffect(() => {
        if (shouldScramble) {
            replay();
        }
    }, [shouldScramble, replay]);

    return (
        <div
            ref={ref}
            onMouseOver={shouldScramble ? replay : replay}
            onFocus={shouldScramble ? replay : replay}
        >
            {children}
        </div>
    );
};

export default Scramble;
