import React, { useState } from 'react';

const RotationButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative w-28 h-8 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button className="relative z-10 w-full h-full flex items-center justify-center text-black transition-colors duration-300 ease-in-out">
                <span className={`${isHovered ? 'text-white' : 'text-white'}`}>
                    Text
                </span>
            </button>
            <div 
                className={`
                    absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-sm
                    transform -translate-y-1/2 -translate-x-1/2 rotate-45 origin-center
                    transition-all duration-300 ease-in-out
                    ${isHovered ? 'w-[200%] h-[200%] rotate-0 -translate-y-1/4 -translate-x-1/4' : ''}
                `}
            ></div>
        </div>
    );
};

export default RotationButton;