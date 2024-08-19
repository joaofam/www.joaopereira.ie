import React, { useState } from 'react';

import Scramble from '@/app/components/Scramble/scramble';

export interface ExperienceProps {
    companyName: string;
    period: string;
    role: string;
    technologies: string;
}

export const Experience: React.FC<ExperienceProps> = ({
    companyName,
    period,
    role,
    technologies,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex h-12 w-full items-center border-b-1 transition-colors duration-300 hover:bg-foreground hover:text-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex w-full justify-between px-2">
                <div className="flex-1 text-left">
                    <Scramble>{isHovered ? role : companyName}</Scramble>
                </div>
                <div className="flex-1 text-right">
                    <Scramble>{isHovered ? technologies : period}</Scramble>
                </div>
            </div>
        </div>
    );
};
