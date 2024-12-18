import React, { useState } from 'react';

interface TagProps {
    text: string;
    isClicked?: boolean;
    isHovered?: boolean;
}

const textToClassMap: { [key: string]: string } = {
    "All": "text-foreground bg-primary",
    "Projects": "text-foreground bg-[#21F38A]",
    "Tutorials": "text-foreground bg-[#F3A221]",
    "Reviews": "text-foreground bg-[#F321EF]",
    "Web Dev": "text-foreground bg-[#F32125]",
};

export const Filter: React.FC<TagProps> = ({ text, isClicked, isHovered }) => {
    const [hover, setHover] = useState(false);
    const [pressed, setPressed] = useState(false);
    const buttonClass = textToClassMap[text];
    const hoverClass = hover ? buttonClass : "";
    const clickedClass = pressed ? buttonClass : "";

    const handleClick = () => {
        setPressed(!pressed);
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