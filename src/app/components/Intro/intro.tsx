'use client';

import { FlickeringGridRounded } from '@/app/components/AnimatedPixels/pixels';
import { CustomLink } from '@/app/components/Link/link';
import Scramble from '@/app/components/Scramble/scramble';

export default function Intro() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center px-0 font-HK text-sm tracking-widest text-foreground">
            <FlickeringGridRounded />
            <div className="relative z-10">
                {/* <Scramble> */}
                Welcome to my software developer portfolio, where creativity
                meets code and innovation drives results. With a strong
                foundation in full-stack development, I specialize in crafting
                scalable, efficient, and user-friendly solutions. My experience
                spans a diverse array of projects, from dynamic web applications
                to complex backend systems, all driven by a passion for clean
                code and continuous learning. Whether it’s bringing an idea to
                life or optimizing existing technologies, I’m dedicated to
                delivering high-quality, impactful work that pushes the
                boundaries of whats possible in software development.
                {/* </Scramble> */}
            </div>
            <div className="relative z-10 self-start pt-10">
                <CustomLink
                    href="/"
                    linearColor="linear-gradient(#A8FF97,#A8FF97)"
                    color="tertiary"
                    colorChange="text-tertiary"
                >
                    Resume
                </CustomLink>
            </div>
        </div>
    );
}