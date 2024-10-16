import React, { useState, useRef, useEffect } from 'react';

import { cat } from '@/components/console/Commands/cat';
import { cd } from '@/components/console/Commands/cd';
import { clear } from '@/components/console/Commands/clear';
import { exit } from '@/components/console/Commands/exit';
import { help } from '@/components/console/Commands/help';
import { ls } from '@/components/console/Commands/ls';
import { getWelcomeMessage } from '@/components/console/Commands/welcome';

interface TerminalProps {
    onClose: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState<React.ReactNode[]>([]);
    const [currentDir, setCurrentDir] = useState('/');
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
        const [cmd, ...args] = command.split(' ');

        // Display the command the user entered
        setOutput(prev => [
            ...prev,
            <div key={prev.length}>
                <span style={{ color: '#2194f3' }}>{currentDir}$&nbsp;</span>
                <span>{input}</span>
            </div>
        ]);

        switch (cmd) {
            case 'exit':
                exit(onClose);
                break;
            case 'clear':
                clear(setOutput);
                break;
            case 'help':
                setOutput(prev => [
                    ...prev,
                    ...help().split('\n').map((line, index) => <div key={prev.length + 1 + index}>{line || '\u00A0'}</div>)
                ]);
                break;
            case 'ls':
                const dirContents = ls(currentDir);
                setOutput(prev => [
                    ...prev,
                    <div key={prev.length + 1}>{dirContents}</div>
                ]);
                break;
            case 'cd':
                const newDir = args[0];
                const { newDir: updatedDir, error } = cd(currentDir, newDir);
                if (error) {
                    setOutput(prev => [
                        ...prev,
                        <div key={prev.length + 1}>{error}</div>
                    ]);
                } else {
                    // Change directory but only reflect it in the next prompt
                    setCurrentDir(updatedDir);
                }
                break;
            case 'cat':
                const fileName = args[0];
                const fileContent = cat(currentDir, fileName);
                setOutput(prev => [
                    ...prev,
                    <div key={prev.length + 1}>{fileContent}</div>
                ]);
                break;
            default:
                setOutput(prev => [
                    ...prev,
                    <div key={prev.length + 1}>Command not recognized</div>
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
            {/* Render prompt with the current directory after command execution */}
            <div className="flex">
                <span style={{ color: '#2194f3' }}>{currentDir}$&nbsp;</span>
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
