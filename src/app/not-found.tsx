'use client';

import Scramble from '@/components/Common/Scramble';

export default function NotFound() {
    return (
        <div className="flex h-screen items-center justify-center text-2xl text-foreground">
            <div className="relative border border-foreground p-8">
                <span className="absolute left-4 top-0 -translate-y-1/2 transform cursor-default bg-white px-2 text-xs font-bold lowercase text-[#3c4048] before:absolute before:inset-0 before:z-[-1] before:bg-inherit 2xl:text-2xs">
                    Page Not Found
                </span>
                <div className="flex items-center uppercase">
                    <p>Status Code: </p>
                    <p>
                        [
                        <Scramble
                            className="text-[#F33A21]"
                            loop
                            shouldScramble
                        >
                            404
                        </Scramble>
                        ]
                    </p>
                </div>
            </div>
        </div>
    );
}
