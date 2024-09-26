'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CustomLink } from '@/app/components/common/Link/index';
import Scramble from '@/app/components/common/Scramble/index';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="flex h-24 w-full shrink-0 items-center px-10 pt-8 sm:px-12 md:px-14 lg:px-28 xl:px-24">
            <Link
                href="/"
                className="mr-6 font-Nohemi text-2xl font-semibold tracking-wide text-foreground transition-colors duration-300 hover:text-primary lg:flex"
                prefetch={false}
            >
                <span>
                    <Scramble>Joao Pereira</Scramble>
                </span>
            </Link>
            <nav className="ml-auto space-x-8 text-sm lg:flex text-foreground">
                <CustomLink
                    href="/about"
                    className={`${pathname === '/about' ? 'italic text-primary' : ''}`}
                >
                    About
                </CustomLink>
                <CustomLink href="https://github.com/joaofam" blank={true}>
                    GitHub
                </CustomLink>
            </nav>
        </header>
    );
}
