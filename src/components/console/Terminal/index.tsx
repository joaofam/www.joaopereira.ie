import React, { useState, useRef, useEffect } from 'react';

import { clear } from '@/components/console/Commands/clear';
import { exit } from '@/components/console/Commands/exit';
import { getWelcomeMessage } from '@/components/console/Commands/welcome';
import { help } from '@/components/console/Commands/help';

interface TerminalProps {
    onClose: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState<React.ReactNode[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        // Display welcome message when component mounts
        setOutput(getWelcomeMessage().split('\n').map((line, index) => <div key={index}>{line || '\u00A0'}</div>));
    }, []);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [output]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleCommand = (command: string) => {
        switch (command) {
            case 'exit':
                exit(onClose);
                break;
            case 'clear':
                clear(setOutput);
                break;
            case 'help':
                setOutput([...output, 
                    <div key={output.length}>
                        <span style={{ color: '#2194f3' }}>$&nbsp;</span>
                        <span>{input}</span>
                    </div>,
                    ...help().split('\n').map((line, index) => <div key={output.length + 1 + index}>{line || '\u00A0'}</div>)
                ]);
                break;
            default:
                setOutput([...output, 
                    <div key={output.length}>
                        <span style={{ color: '#2194f3' }}>$&nbsp;</span>
                        <span>{input}</span>
                    </div>,
                    <div key={output.length + 1}>Command not recognized</div>
                ]);
                break;
        }
    };

    const handleInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const trimmedInput = input.trim().toLowerCase();
            handleCommand(trimmedInput);
            setInput('');
        }
    };

    return (
        <div ref={terminalRef} className="h-full overflow-y-auto bg-foreground p-4 text-xs text-white">
            {output}
            <div className="flex">
                <span style={{ color: '#2194f3' }}>$&nbsp;</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={handleInputSubmit}
                    className="flex-grow bg-transparent outline-none text-white"
                />
            </div>
        </div>
    );
};

export default Terminal;