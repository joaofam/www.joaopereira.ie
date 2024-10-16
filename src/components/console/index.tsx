import { useState } from 'react';

import { Browser } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';
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
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const handleDrag = (e: DraggableEvent, data: DraggableData) => {
        if (!isExpanded) {
            setPosition({ x: data.x, y: data.y });
        }
    };

    const toggleExpand = () => {
        if (!isExpanded) {
            setPosition({ x: 0, y: window.innerHeight - 350 });
        }
        setIsExpanded(!isExpanded);
    };

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    return (
        <AnimatePresence>
            <Draggable
                handle=".handle"
                position={isExpanded ? { x: 0, y: 0 } : position}
                onDrag={handleDrag}
                disabled={isExpanded}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={`fixed z-50 flex flex-col border border-foreground bg-white text-foreground shadow-lg ${isExpanded ? 'bottom-0 left-0 right-0 w-full md:h-[400px]' : 'h-[200px] w-[300px] sm:h-[400px] sm:w-[600px]'} `}
                    style={{ transition: 'none' }}
                >
                    {/* Top Bar */}
                    <div className="handle flex h-8 cursor-move items-center justify-between border-b-1 border-foreground bg-white px-4">
                        <div className="flex items-center space-x-2">
                            {/* Icons container */}
                            <button
                                className="rotate-180 cursor-pointer hover:text-primary"
                                onClick={toggleExpand}
                                aria-label="Expand or collapse console"
                            >
                                <Browser size={12} />
                            </button>
                        </div>
                        <span className="flex-grow text-center text-2xs sm:text-xs 2xl:text-sm">
                            JTerm Console
                        </span>
                        <button
                            onClick={handleClose}
                            className="text-accent hover:text-foreground"
                        >
                            ×
                        </button>
                    </div>
                    {/* Terminal */}
                    <motion.div
                        initial={{ height: '400px' }}
                        animate={{
                            height: isExpanded ? 'calc(100vh - 32px)' : '400px',
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="flex-grow overflow-hidden rounded-md p-2"
                    >
                        <Terminal onClose={onClose} />
                    </motion.div>
                </motion.div>
            </Draggable>
        </AnimatePresence>
    );
}
