import React, { useState, useEffect } from 'react';

import Scramble from '@/components/Common/Scramble';

export const Time = () => {
    const [time, setTime] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    useEffect(() => {
        const updateTime = () => {
            setTime(new Date().toLocaleTimeString());
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`cursor-default transition-colors duration-300 ${isHovered ? 'text-primary' : ''}`}
        >
            <Scramble>{isHovered ? '[GMT+1]' : 'Dublin'}</Scramble> [{time}]
        </button>
    );
};
