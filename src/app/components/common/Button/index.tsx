import React, { useState, useEffect, useCallback } from 'react';

import { useRouter } from 'next/navigation';

interface Pixel {
    id: string;
    x: number;
    y: number;
    size: number;
    isWhite: boolean;
    changeTime: number;
}

interface ButtonProps {
    text: string;
    href?: string;
    blank?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, href, blank }) => {
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);
    const [pixels, setPixels] = useState<Pixel[]>([]);
    const [isReversing, setIsReversing] = useState(false);

    const initializePixels = useCallback(() => {
        const size = 5;
        const cols = Math.ceil(300 / size);
        const rows = Math.ceil(100 / size);
        const newPixels: Pixel[] = [];

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                newPixels.push({
                    id: `${x}-${y}`,
                    x: x * size,
                    y: y * size,
                    size: size,
                    isWhite: false,
                    changeTime: Math.random() * 500,
                });
            }
        }

        setPixels(newPixels);
    }, []);

    const updatePixels = useCallback(
        (elapsedTime: number) => {
            setPixels(currentPixels =>
                currentPixels.map(pixel => ({
                    ...pixel,
                    isWhite: isHovered
                        ? elapsedTime >= pixel.changeTime
                        : elapsedTime < 500 - pixel.changeTime,
                }))
            );
        },
        [isHovered]
    );

    const startAnimation = useCallback(() => {
        const startTime = Date.now();
        const animationInterval: ReturnType<typeof setInterval> = setInterval(
            () => {
                const elapsedTime = Date.now() - startTime;
                updatePixels(elapsedTime);

                if (elapsedTime >= 500) {
                    clearInterval(animationInterval);
                    if (isReversing) {
                        setIsReversing(false);
                    }
                }
            },
            16
        );

        return animationInterval;
    }, [isReversing, updatePixels]);

    useEffect(() => {
        initializePixels();
    }, [initializePixels]);

    useEffect(() => {
        let animationInterval: ReturnType<typeof setInterval> | undefined;

        if (isHovered || isReversing) {
            animationInterval = startAnimation();
        }

        return () => {
            if (animationInterval) {
                clearInterval(animationInterval);
            }
        };
    }, [isHovered, isReversing, startAnimation]);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsReversing(false);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsReversing(true);
    };

    const handleClick = (e: React.MouseEvent) => {
        if (href) {
            e.preventDefault();
            if (blank) {
                window.open(href, '_blank');
            } else {
                router.push(href);
            }
        }
    };

    return (
        <button
            className="relative cursor-pointer overflow-hidden border-none bg-blue-600 px-4 py-2 font-SpaceMono text-xs uppercase text-white transition-colors duration-300 ease-in-out hover:text-primary sm:text-sm"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <span className="relative z-10">{text}</span>
            <div className="pointer-events-none absolute inset-0 z-0">
                {pixels.map((pixel: Pixel) => (
                    <div
                        key={pixel.id}
                        className={`absolute transition-colors duration-75 ${pixel.isWhite ? 'bg-white' : 'bg-[#3461D6]'}`}
                        style={{
                            top: `${pixel.y}px`,
                            left: `${pixel.x}px`,
                            width: `${pixel.size}px`,
                            height: `${pixel.size}px`,
                        }}
                    />
                ))}
            </div>
        </button>
    );
};

export default Button;
