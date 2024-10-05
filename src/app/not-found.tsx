'use client';

import Image from 'next/image';

import Scramble from './components/common/Scramble';

export default function NotFound() {
    return (
        <div className="flex h-screen items-center justify-center text-2xl text-foreground">
            <div className="relative border p-8 border-foreground">
            <span className="absolute text-xs left-4 top-0 -translate-y-1/2 transform bg-white px-2 font-bold lowercase text-[#3c4048] 2xl:text-2xs cursor-default before:absolute before:inset-0 before:bg-inherit before:z-[-1]">
                        Page Not Found
                    </span>
                <div className="flex items-center uppercase">
                    <p>Status Code: </p>
                    <p>[<Scramble className='text-[#F33A21]'loop shouldScramble>404</Scramble>]</p>
                </div>
            </div>
        </div>
    );
}
