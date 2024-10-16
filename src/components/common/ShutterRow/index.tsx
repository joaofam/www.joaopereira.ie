import React, { useState, useRef, useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

import Scramble from '@/components/common/Scramble/index';
import { ShutterContainerProps } from '@/types/types';

// Animation Variants
const borderVariants = {
    hidden: { width: 0 },
    visible: { width: '100%', transition: { duration: 1 } },
};

const firstColumnVariants = {
    hidden: { opacity: 0, y: '100%' },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const slideInFromLeft = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { duration: 1 } },
};

const lastColumnVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.8 } },
};

// Helper Functions
const setupDefaultColumns = (columns: any[]) => {
    const defaultColumns = new Array(4).fill({ default: '', hover: '' });

    switch (columns.length) {
        case 1:
            defaultColumns[0] = columns[0];
            break;
        case 2:
            defaultColumns[0] = columns[0];
            defaultColumns[3] = columns[1];
            break;
        case 3:
            defaultColumns[0] = columns[0];
            defaultColumns[2] = columns[1];
            defaultColumns[3] = columns[2];
            break;
        default:
            for (let i = 0; i < columns.length && i < 4; i++) {
                defaultColumns[i] = columns[i];
            }
            break;
    }

    return defaultColumns;
};

// Motion Div Component
const MotionDiv = ({ column, index, isHovered, isSmallScreen }: any) => (
    <motion.div
        key={index}
        className={`flex-1 ${index === 3 ? 'text-right' : 'text-left'} whitespace-nowrap ${isSmallScreen && index !== 0 ? 'text-3xs' : ''}`}
        variants={
            index === 0
                ? firstColumnVariants
                : index === 3
                  ? lastColumnVariants
                  : slideInFromLeft
        }
    >
        <Scramble>{isHovered ? column.hover : column.default}</Scramble>
        {column.description && (
            <div className="mt-2 text-4xs tracking-wider sm:text-2xs">
                {isHovered ? "Expand ↗" : column.description}
            </div>
        )}
    </motion.div>
);

export const ShutterRow: React.FC<ShutterContainerProps> = ({
    href,
    columns = [],
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);
    const controls = useAnimation();
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                controls.start(entry.isIntersecting ? 'visible' : 'hidden');
            },
            { threshold: 0.75 }
        );

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [controls]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const defaultColumns = setupDefaultColumns(columns);

    const rowContent = (
        <motion.div
            ref={ref}
            className="group relative h-16 w-full overflow-hidden border-b-1 text-2xs uppercase tracking-wider transition-colors duration-300 hover:bg-foreground hover:text-white sm:text-xs 2xl:text-sm"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial="hidden"
            animate={controls}
            variants={borderVariants}
        >
            <div className="flex h-full w-full items-center justify-between px-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                {isSmallScreen ? (
                    <>
                        <MotionDiv
                            column={defaultColumns[0]}
                            index={0}
                            isHovered={isHovered}
                            isSmallScreen={isSmallScreen}
                        />
                        <motion.div
                            className="flex-1 whitespace-nowrap text-right"
                            variants={lastColumnVariants}
                        >
                            {defaultColumns.slice(1).map((column, index) => (
                                <div
                                    key={index}
                                    className={`text-3xs ${!isHovered ? 'mb-2' : ''}`}
                                >
                                    <Scramble>
                                        {isHovered
                                            ? column.hover
                                            : column.default}
                                    </Scramble>
                                    {column.description && (
                                        <div className="mt-2 text-3xs tracking-wider sm:text-2xs">
                                            {column.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </>
                ) : (
                    defaultColumns.map((column, index) => (
                        <MotionDiv
                            key={index}
                            column={column}
                            index={index}
                            isHovered={isHovered}
                            isSmallScreen={isSmallScreen}
                        />
                    ))
                )}
            </div>
            <div className="absolute inset-x-0 top-full flex h-full w-full items-center justify-between px-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                {isSmallScreen ? (
                    <>
                        <MotionDiv
                            column={defaultColumns[0]}
                            index={0}
                            isHovered={isHovered}
                            isSmallScreen={isSmallScreen}
                        />
                        <motion.div
                            className="flex-1 whitespace-nowrap text-right"
                            variants={lastColumnVariants}
                        >
                            {defaultColumns.slice(1).map((column, index) => (
                                <div
                                    key={index}
                                    className={`text-3xs ${!isHovered ? 'mb-2' : ''}`}
                                >
                                    <Scramble>
                                        {isHovered
                                            ? column.hover
                                            : column.default}
                                    </Scramble>
                                    {column.description && (
                                        <div className="mt-2 text-3xs tracking-wider sm:text-2xs">
                                            {column.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </>
                ) : (
                    defaultColumns.map((column, index) => (
                        <MotionDiv
                            key={index}
                            column={column}
                            index={index}
                            isHovered={isHovered}
                            isSmallScreen={isSmallScreen}
                        />
                    ))
                )}
            </div>
        </motion.div>
    );

    return (
        <div className={`w-full ${href ? 'cursor-pointer' : ''}`}>
            {href ? (
                <Link href={href} className="block" target="_blank">
                    {rowContent}
                </Link>
            ) : (
                rowContent
            )}
        </div>
    );
};
