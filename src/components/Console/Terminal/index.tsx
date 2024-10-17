import React, { useState, useRef, useEffect } from 'react';

import { cat } from '@/components/Console/Commands/cat';
import { cd } from '@/components/Console/Commands/cd';
import { clear } from '@/components/Console/Commands/clear';
import { exit } from '@/components/Console/Commands/exit';
import { help } from '@/components/Console/Commands/help';
import { ls } from '@/components/Console/Commands/ls';
import { Surprise } from '@/components/Console/Commands/surprise';
import { getWelcomeMessage } from '@/components/Console/Commands/welcome';

interface TerminalProps {
    onClose: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState<React.ReactNode[]>([]);
    const [currentDir, setCurrentDir] = useState('/');
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [showSurprise, setShowSurprise] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    const validCommands = ['exit', 'clear', 'help', 'ls', 'cd', 'cat', 'surprise'];

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        setOutput(
            getWelcomeMessage()
                .split('\n')
                .map((line, index) => (
                    <div key={index} className="whitespace-pre">
                        {line || '\u00A0'}
                    </div>
                ))
        );
    }, []);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [output]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);
    };

    const handleCommand = (command: string) => {
        const [cmd, ...args] = command.split(' ');

        const isValidCommand = validCommands.includes(cmd.toLowerCase());

        setOutput(prev => [
            ...prev,
            <div key={prev.length}>
                <span style={{ color: '#2194f3' }}>{currentDir}$&nbsp;</span>
                <span
                    className={isValidCommand ? 'text-secondary' : 'text-white'}
                >
                    {cmd}
                </span>
                <span className="text-white">&nbsp;{args.join(' ')}</span>
            </div>,
        ]);

        if (command) {
            setCommandHistory(prev => [...prev, command]);
            setHistoryIndex(-1);
        }

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
                    ...help()
                        .split('\n')
                        .map((line, index) => (
                            <div key={prev.length + 1 + index}>
                                {line || '\u00A0'}
                            </div>
                        )),
                ]);
                break;
            case 'ls': {
                const dirContents = ls(currentDir);
                setOutput(prev => [
                    ...prev,
                    <div key={prev.length + 1}>{dirContents}</div>,
                ]);
                break;
            }
            case 'cd': {
                const newDir = args[0];
                const { newDir: updatedDir, error } = cd(currentDir, newDir);
                if (error) {
                    setOutput(prev => [
                        ...prev,
                        <div key={prev.length + 1}>{error}</div>,
                    ]);
                } else {
                    setCurrentDir(updatedDir);
                }
                break;
            }
            case 'cat': {
                const fileName = args[0];
                const fileContent = cat(currentDir, fileName);
                setOutput(prev => [
                    ...prev,
                    <div key={prev.length + 1}>{fileContent}</div>,
                ]);
                break;
            }
            case 'surprise':
                setShowSurprise(true);
                break;
            default:
                setOutput(prev => [
                    ...prev,
                    <div key={prev.length + 1}>Command not recognized</div>,
                ]);
                break;
        }
    };

    const handleInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const trimmedInput = input.trim().toLowerCase();
            handleCommand(trimmedInput);
            setInput('');
        } else if (e.key === 'ArrowUp') {
            if (historyIndex < commandHistory.length - 1) {
                setHistoryIndex(prev => prev + 1);
                setInput(
                    commandHistory[
                        commandHistory.length - 1 - (historyIndex + 1)
                    ]
                );
            }
        } else if (e.key === 'ArrowDown') {
            if (historyIndex > 0) {
                setHistoryIndex(prev => prev - 1);
                setInput(
                    commandHistory[
                        commandHistory.length - 1 - (historyIndex - 1)
                    ]
                );
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput('');
            }
        }
    };

    const renderInput = () => {
        const [cmd, ...rest] = input.split(' ');
        const isValidCommand = validCommands.includes(cmd.toLowerCase());
        return (
            <div className="relative flex">
                <span className="text-primary">{currentDir}$&nbsp;</span>
                <span
                    className={isValidCommand ? 'text-secondary' : 'text-white'}
                >
                    {cmd}
                </span>
                <span className="text-white">&nbsp;{rest.join(' ')}</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleInputSubmit}
                    className="absolute inset-0 flex-grow bg-transparent text-white opacity-0 outline-none"
                />
            </div>
        );
    };

    return (
        <>
            <div
                ref={terminalRef}
                className="h-full overflow-y-auto bg-foreground p-4 text-3xs text-white sm:text-2xs md:text-xs"
            >
                {output}
                {renderInput()}
            </div>
            {showSurprise && <Surprise onClose={() => setShowSurprise(false)} />}
        </>
    );
};

export default Terminal;