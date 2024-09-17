import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import styles from './index.module.scss';

const anim = {
    initial: {
        opacity: 0,
    },
    open: (i: number) => ({
        opacity: 1,
        transition: { duration: 0, delay: 0.03 * i },
    }),
    closed: (i: number) => ({
        opacity: 0,
        transition: { duration: 0, delay: 0.03 * i },
    }),
};

interface CenteredPixelTransitionProps {
    isActive: boolean;
    dimensions: { width: number; height: number };
    onTransitionComplete: () => void;
}

const CenteredPixelTransition: React.FC<CenteredPixelTransitionProps> = ({
    isActive,
    dimensions,
    onTransitionComplete,
}) => {
    const { width, height } = dimensions;
    const [isTransitionComplete, setIsTransitionComplete] = useState(false);

    const shuffle = (a: any[]) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };

    const getBlocks = () => {
        const blockSize = width * 0.05;
        const nbOfBlocks = Math.ceil(height / blockSize);
        const shuffledIndexes = shuffle(
            [...Array(nbOfBlocks)].map((_, i) => i)
        );
        return shuffledIndexes.map((randomIndex, index) => (
            <motion.div
                key={index}
                className={styles.block}
                variants={anim}
                initial="initial"
                animate={isActive ? 'open' : 'closed'}
                custom={randomIndex}
                onAnimationComplete={() => {
                    if (index === shuffledIndexes.length - 1) {
                        setIsTransitionComplete(true);
                    }
                }}
            />
        ));
    };

    useEffect(() => {
        if (isTransitionComplete && isActive) {
            onTransitionComplete();
        }
    }, [isTransitionComplete, isActive, onTransitionComplete]);

    return (
        <div className={styles.pixelBackground}>
            {[...Array(20)].map((_, index) => (
                <div key={index} className={styles.column}>
                    {getBlocks()}
                </div>
            ))}
        </div>
    );
};

export default CenteredPixelTransition;
