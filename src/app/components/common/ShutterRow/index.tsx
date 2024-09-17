import React, { useState, useRef, useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

import Scramble from '@/app/components/common/Scramble/index';

export interface ColumnData {
    default?: string;
    hover?: string;
    description?: string;
}

export interface TitleData {
    default?: string;
    hover?: string;
}

export interface ShutterContainerProps {
    href?: string;
    columns?: ColumnData[];
    titleColumn?: TitleData[];
}

export const ShutterRow: React.FC<ShutterContainerProps> = ({
    href,
    columns = [],
    titleColumn,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start('visible');
                } else {
                    controls.start('hidden');
                }
            },
            {
                threshold: 0.75,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [controls]);

    const DivHovered = () => {
        setIsHovered(true);
    };

    const DivNotHovered = () => {
        setIsHovered(false);
    };

    const defaultColumns = new Array(4).fill({ default: '', hover: '' });

    if (columns.length === 1) {
        defaultColumns[0] = columns[0];
    } else if (columns.length === 2) {
        defaultColumns[0] = columns[0];
        defaultColumns[3] = columns[1];
    } else if (columns.length === 3) {
        defaultColumns[0] = columns[0];
        defaultColumns[2] = columns[1];
        defaultColumns[3] = columns[2];
    } else {
        for (let i = 0; i < columns.length && i < 4; i++) {
            defaultColumns[i] = columns[i];
        }
    }

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

    const rowContent = (
        <>
            <motion.div
                ref={ref}
                className="group relative h-16 w-full overflow-hidden border-b-1 text-2xs uppercase tracking-wider transition-colors duration-300 hover:bg-foreground hover:text-white sm:text-xs"
                onMouseEnter={DivHovered}
                onMouseLeave={DivNotHovered}
                initial="hidden"
                animate={controls}
                variants={borderVariants}
            >
                <div className="flex h-full w-full items-center justify-between px-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                    {defaultColumns.map((column, index) => (
                        <motion.div
                            key={index}
                            className={`flex-1 ${index === defaultColumns.length - 1 ? 'text-right' : 'text-left'} whitespace-nowrap`}
                            variants={
                                index === 0
                                    ? firstColumnVariants
                                    : index === defaultColumns.length - 1
                                    ? lastColumnVariants
                                    : slideInFromLeft
                            }
                        >
                            <Scramble>
                                {isHovered ? column.hover : column.default}
                            </Scramble>
                                {column.description && (
                                    <div className="text-3xs text-gray-400 mt-2 tracking-wider">
                                        {column.description}
                                    </div>
                                )}
                        </motion.div>
                    ))}
                </div>
                <div className="absolute inset-x-0 top-full flex h-full w-full items-center justify-between px-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                    {defaultColumns.map((column, index) => (
                        <motion.div
                            key={index}
                            className={`flex-1 ${index === defaultColumns.length - 1 ? 'text-right' : 'text-left'} whitespace-nowrap`}
                            variants={
                                index === 0
                                    ? firstColumnVariants
                                    : index === defaultColumns.length - 1
                                    ? lastColumnVariants
                                    : slideInFromLeft
                            }
                        >
                            <Scramble>
                                {isHovered ? column.hover : column.default}
                            </Scramble>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    );

    return (
        <div className={`w-full ${href ? "cursor-pointer" : ""}`}>
            {href ? (
                <Link href={href} className="block">
                    {rowContent}
                </Link>
            ) : (
                rowContent
            )}
        </div>
    );
};