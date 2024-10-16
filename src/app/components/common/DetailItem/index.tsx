import React from 'react';

import Scramble from '@/app/components/common/Scramble/index';
import { DetailProps } from '@/app/types/types';

interface DetailItemProps {
    detail: DetailProps;
    index: number;
    hoveredIndex: number | null;
    onMouseEnter: (index: number) => void;
    onMouseLeave: () => void;
    className?: string;
}

const DetailItem: React.FC<DetailItemProps> = ({
    detail,
    index,
    hoveredIndex,
    onMouseEnter,
    onMouseLeave,
    className,
}) => (
    <div
        className={`relative p-4 ${className} cursor-default`}
        onMouseEnter={() => onMouseEnter(index)}
        onMouseLeave={onMouseLeave}
    >
        <span
            className={`capitalize absolute left-4 top-0 -translate-y-1/2 transform px-2 font-bold ${
                hoveredIndex === index ? 'capitalize text-primary' : ''
            }`}
        >
            <Scramble shouldScramble={hoveredIndex === index}>
                {hoveredIndex === index
                    ? (detail.hoveredTitle ?? detail.title)
                    : detail.title}
            </Scramble>
        </span>
        <span className="whitespace-pre-wrap" style={{ lineHeight: '1.5' }}>
            <Scramble shouldScramble={hoveredIndex === index}>
                {hoveredIndex === index
                    ? (detail.hoveredContent ?? detail.content)
                    : detail.content}
            </Scramble>
        </span>
    </div>
);

export default DetailItem;
