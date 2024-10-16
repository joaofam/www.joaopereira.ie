'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CustomLink } from '@/components/common/Link/index';
import Scramble from '@/components/common/Scramble/index';
import Console from '@/components/console/index';
import { Time } from '@/components/home/LandingContent/time';

interface CustomNavLinksProps {
    isConsoleOpen: boolean;
    toggleConsole: () => void;
}

function CustomNavLinks({
    isConsoleOpen,
    toggleConsole,
}: Readonly<CustomNavLinksProps>) {
    const pathname = usePathname();

    return (
        <>
            <div className="hidden cursor-default sm:flex">
                <Time />
            </div>
            <CustomLink
                href="/about"
                className={`${pathname === '/about' ? 'italic text-primary' : ''}`}
            >
                About
            </CustomLink>
            <CustomLink
                onClick={toggleConsole}
                className={`${isConsoleOpen ? 'italic text-primary' : ''}`}
            >
                Console
            </CustomLink>
            <CustomLink href="https://github.com/joaofam" blank={true}>
                GitHub
            </CustomLink>
        </>
    );
}

export default function Navbar() {
    const [isConsoleOpen, setIsConsoleOpen] = useState(false);

    const toggleConsole = () => {
        setIsConsoleOpen(!isConsoleOpen);
    };

    return (
        <>
            <header className="flex h-24 w-full shrink-0 items-center px-10 pt-8 text-foreground sm:px-12 md:px-14 lg:px-28 xl:px-24">
                <Link
                    href="/"
                    className="mr-6 font-Nohemi text-xl font-semibold tracking-wide transition-colors duration-300 hover:text-primary sm:text-2xl lg:flex"
                    prefetch={false}
                >
                    <span>
                        <Scramble>Joao Pereira</Scramble>
                    </span>
                </Link>
                <nav className="ml-auto flex items-center space-x-8 text-sm text-foreground">
                    <CustomNavLinks
                        isConsoleOpen={isConsoleOpen}
                        toggleConsole={toggleConsole}
                    />
                </nav>
            </header>
            {isConsoleOpen && (
                <Console onClose={() => setIsConsoleOpen(false)} />
            )}
        </>
    );
}
