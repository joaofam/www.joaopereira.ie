'use client';

import { useState } from 'react';

import { Browser, TerminalWindow } from '@phosphor-icons/react';
import Draggable, { DraggableEvent, DraggableData } from 'react-draggable';

import Terminal from '@/components/console/Terminal/index';

interface ConsoleProps {
    readonly onClose: () => void;
}

export default function Console({ onClose }: ConsoleProps) {
    const [position, setPosition] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });

    const handleDrag = (e: DraggableEvent, data: DraggableData) => {
        setPosition({ x: data.x, y: data.y });
    };

    return (
        <Draggable
            handle=".handle"
            defaultPosition={position}
            onDrag={handleDrag}
        >
            <div className="fixed z-50 flex h-[400px] w-[600px] flex-col border border-foreground bg-white text-foreground shadow-lg">
                {/* Top Bar */}
                <div className="handle flex h-8 cursor-move items-center justify-between border-b-1 border-foreground bg-white px-4">
                    <div className="flex items-center space-x-2">
                        {/* Icons container */}
                        <Browser size={12} />
                        <TerminalWindow size={12} />
                    </div>
                    <span className="flex-grow text-center text-2xs sm:text-xs 2xl:text-sm">
                        JTerm Console
                    </span>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-black"
                    >
                        ×
                    </button>
                </div>
                {/* Terminal */}
                <div className="flex-grow overflow-hidden rounded-md p-2">
                    <Terminal onClose={onClose} />
                </div>
            </div>
        </Draggable>
    );
}
