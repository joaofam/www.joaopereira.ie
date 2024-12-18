import React, { useState } from 'react';

import { TEXT_TO_CLASS_MAP } from '@/consts/blog';
import { FilterTagProps } from '@/types/types';

export const Filter: React.FC<FilterTagProps> = ({ text, isClicked, isHovered, onClick }) => {
    const [hover, setHover] = useState(false);

    const buttonClass = TEXT_TO_CLASS_MAP[text];
    const hoverClass = hover ? buttonClass : "";
    const clickedClass = isClicked ? buttonClass : "";

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            className={`px-4 rounded-sm text-accent border border-accent transition-all duration-300 ${hoverClass} ${clickedClass}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};
