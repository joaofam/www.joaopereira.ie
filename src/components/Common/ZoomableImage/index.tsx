'use client';

import React, { useState, useRef } from 'react';

import Image from 'next/image';

import { ZoomableImageProps } from '@/types/types';

export const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt, className }) => {
    const [zoomPosition, setZoomPosition] = useState<{ x: number; y: number } | null>(null);
    const imageRef = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setZoomPosition({ x, y });
        }
    };

    const handleMouseLeave = () => setZoomPosition(null);

    return (
        <button
            className={`relative ${className} cursor-default`}
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                src={src}
                alt={alt}
                priority={true}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
            />
            {zoomPosition && (
                <div
                    className="absolute border border-secondary bg-white"
                    style={{
                        width: '100px',
                        height: '100px',
                        top: zoomPosition.y - 50,
                        left: zoomPosition.x - 50,
                        backgroundImage: `url(${src})`,
                        backgroundSize: `${imageRef.current ? imageRef.current.clientWidth * 1.5 : 0}px ${imageRef.current ? imageRef.current.clientHeight * 1.5 : 0}px`,
                        backgroundPosition: `-${zoomPosition.x * 1.5 - 50}px -${zoomPosition.y * 1.5 - 50}px`,
                        pointerEvents: 'none',
                    }}
                />
            )}
        </button>
    );
};


                // <Image
                //     src="/joao-sintra.png"
                //     alt="sintra"
                //     priority={true}
                //     fill
                //     sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                //     style={{ objectFit: 'contain' }}
                // />