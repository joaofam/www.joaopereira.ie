'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CustomLink } from '@/app/components/common/Link/index';
import Scramble from '@/app/components/common/Scramble/index';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="flex h-24 w-full shrink-0 items-center px-4 pt-6 text-foreground sm:px-6 lg:px-32 xl:px-24">
            <Link
                href="/"
                className="mr-6 font-Nohemi text-xl font-semibold tracking-wide text-foreground transition-colors duration-300 hover:text-primary lg:flex"
                prefetch={false}
            >
                <span>
                    <Scramble>JoaoPereira.ie</Scramble>
                </span>
            </Link>
            <nav className="ml-auto space-x-8 text-sm lg:flex">
                <CustomLink
                    href="/about"
                    className={
                        pathname === '/about'
                            ? 'font-GlitchyChaos text-primary'
                            : ''
                    }
                >
                    About
                </CustomLink>
                <CustomLink href="https://github.com/joaofam">
                    GitHub
                </CustomLink>
            </nav>
        </header>
    );
}
