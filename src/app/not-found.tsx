'use client';

import Image from 'next/image';

import Button from '@/app/components/common/Button/index';
import { Tag } from '@/app/components/common/ImageTag/index';
import Navbar from '@/app/components/layout/Navbar/index';

const VinylPlayer = () => {
    return (
        <div className="text-foreground">
            <div className="relative border-1 p-7">
                <Image
                    src="/vinyl-player.svg"
                    alt="404 Not Found"
                    width={575}
                    height={500}
                    className="p-4"
                />
                <Image
                    src="/vinyl.svg"
                    alt="Layered Vinyl"
                    width={375}
                    height={500}
                    className="absolute left-1/2 top-1/2 ml-[-3.75rem] -translate-x-1/2 -translate-y-1/2 transform"
                />
                <Image
                    src="/vinyl-design.svg"
                    alt="Vinyl Design"
                    width={125}
                    height={150}
                    className="absolute left-1/2 top-1/2 ml-[-3.75rem] -translate-x-1/2 -translate-y-1/2 transform"
                />
            </div>
            <Tag tag="404.svg" hoverTag="Page Not Found" QRSrc="soft_dev" />
        </div>
    );
};

export default function NotFound() {
    return (
        <div className="relative flex h-screen flex-col">
            <Navbar />
            <div className="flex items-center justify-center">
                <div className="w-[650px] text-center">
                    <VinylPlayer />
                    <div className="mt-4 w-full grid-cols-2 font-HK text-3xs font-medium tracking-widest text-foreground sm:text-sm">
                        <div className="text-right">
                            <Button text="Return home" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
