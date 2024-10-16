'use client';

import { useState } from 'react';

import Draggable, { DraggableEvent, DraggableData } from 'react-draggable';

import Terminal from '@/components/console/Terminal/index';

interface ConsoleProps {
    readonly onClose: () => void;
}

export default function Console({ onClose }: ConsoleProps) {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const handleDrag = (e: DraggableEvent, data: DraggableData) => {
        setPosition({ x: data.x, y: data.y });
    };

    return (
        <Draggable
            handle=".handle"
            defaultPosition={position}
            onDrag={handleDrag}
        >
            <div className="fixed z-50 w-[600px] h-[400px] bg-white text-foreground shadow-lg border border-foreground flex flex-col">
                {/* Top Bar */}
                <div className="handle h-8 bg-white border-b-1 border-foreground cursor-move flex items-center justify-between px-4">
                    <span className='text-2xs sm:text-xs 2xl:text-sm'>JTerm Console</span>
                    <button onClick={onClose} className="text-gray-400 hover:text-black">
                        ×
                    </button>
                </div>
                {/* Terminal */}
                <div className="flex-grow overflow-hidden p-2 rounded-md">
                    <Terminal onClose={onClose} />
                </div>
            </div>
        </Draggable>
    );
}