'use client';

import Link from 'next/link';

import { CustomLink } from '@/app/components/Link/link';
import Scramble from '@/app/components/Scramble/scramble';

export default function Navbar() {
    return (
        <header className="text-foreground flex h-20 w-full shrink-0 pt-8 items-center px-8 md:px-20 lg:px-44">
            <Link
                href="#"
                className="mr-6 font-Nohemi font-semibold text-xl tracking-wide text-foreground lg:flex"
                prefetch={false}
            >
                <span>
                    <Scramble>Joao Pereira</Scramble>
                </span>
            </Link>
            <nav className="ml-auto lg:flex text-sm font-Nohemi font-light tracking-wider">
                <CustomLink
                    href="/"
                >
                    GitHub
                </CustomLink>
            </nav>
        </header>
    );
}
