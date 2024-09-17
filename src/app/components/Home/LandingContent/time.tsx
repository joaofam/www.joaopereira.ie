import React, { useState, useEffect } from 'react';

import Scramble from '@/app/components/common/Scramble';

export const Time = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`transition-colors duration-300 ${isHovered ? 'text-blue-600' : ''}`}
        >
            <Scramble>{isHovered ? '[GMT+1]' : 'Dublin'}</Scramble> [{time}]
        </div>
    );
};
