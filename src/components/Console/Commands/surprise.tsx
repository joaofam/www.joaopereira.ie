import React, { useEffect, useRef } from 'react';

interface SurprisePopupProps {
    onClose: () => void;
}

export const Surprise: React.FC<SurprisePopupProps> = ({ onClose }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 1;
            videoRef.current.play().catch(error => {
                console.error('Error attempting to play video:', error);
            });
        }
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="flex h-[200px] w-[300px] flex-col rounded-lg border-b-1 border-t-1 border-foreground bg-white sm:h-[400px] sm:w-[600px]">
                {/* Top Bar */}
                <div className="handle flex h-8 cursor-move items-center justify-between border-b-1 border-foreground bg-white px-4">
                    <span className="flex-grow text-center text-2xs sm:text-xs 2xl:text-sm">
                        Get Rick Rolled
                    </span>
                    <button
                        onClick={onClose}
                        className="text-accent hover:text-foreground"
                    >
                        ×
                    </button>
                </div>
                {/* Content */}
                <div className="flex-grow">
                    <div className="h-full p-4">
                        <video
                            ref={videoRef}
                            className="h-full w-full object-contain"
                            loop
                        >
                            <source src="/rick-roll.mp4" type="video/mp4" />
                            <track
                                kind="captions"
                                srcLang="en"
                                src="/rick-roll-captions.vtt"
                                default
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};
