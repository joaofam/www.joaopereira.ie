'use client';

import Link from 'next/link';

import { CustomLink } from '@/app/components/Link/link';
import Scramble from '@/app/components/Scramble/scramble';

export default function Navbar() {
    return (
        <header className="flex h-20 w-full shrink-0 items-center px-8 md:px-20 lg:px-44">
            <Link
                href="#"
                className="mr-6 font-Nohemi font-semibold text-lg text-foreground lg:flex"
                prefetch={false}
            >
                <h4>
                    <Scramble>Joao Pereira</Scramble>
                </h4>
            </Link>
            <nav className="ml-auto lg:flex text-sm font-Nohemi font-light tracking-wider">
                <CustomLink
                    href="/"
                    linearColor="linear-gradient(#A8FF97,#A8FF97)"
                    color="tertiary"
                    colorChange="text-tertiary"
                >
                    GitHub
                </CustomLink>
            </nav>
        </header>
    );
}
