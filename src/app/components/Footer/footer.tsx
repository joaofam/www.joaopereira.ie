'use client';

import React, { useState } from 'react';

import { useScramble } from 'use-scramble';

import { CustomLink } from '@/app/components/Link/link';
import Scramble from '@/app/components/Scramble/scramble';
import { Card, CardContent } from '@/app/components/ui/card';

export const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);
    const { ref, replay } = useScramble({
        text: isHovered ? 'Foooooooter' : 'Joao',
    });

    return (
        <Card className="relative flex h-1/2 w-full border-l-0 border-t-1 px-32">
            <CardContent className="relative z-10 flex h-full w-full flex-col items-center justify-center">
                <h1
                    ref={ref}
                    onMouseOver={() => {
                        setIsHovered(true);
                        replay();
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                        replay();
                    }}
                    onFocus={() => replay()}
                    onBlur={() => replay()}
                    className="self-start pt-8 font-Nohemi text-10xl font-semibold tracking-tighter text-foreground transition"
                ></h1>

                <div className="grid w-full grid-cols-4 grid-rows-1 gap-4 pb-8 font-HK text-sm tracking-widest text-foreground">
                    <p className="self-left">
                        <Scramble>© [2024] Joao Pereira</Scramble>
                    </p>
                    <div className="text-center">
                        <CustomLink href="/" className="text-right">
                            [01] GITHUB
                        </CustomLink>
                    </div>
                    <div className="text-center">
                        <CustomLink href="/" className="text-right">
                            [02] LINKEDIN
                        </CustomLink>
                    </div>
                    <div className="text-right">
                        <CustomLink href="/">
                            [03] JOAOPEREIRA2213@GMAIL.COM
                        </CustomLink>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
