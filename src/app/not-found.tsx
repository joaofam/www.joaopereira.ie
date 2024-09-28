'use client';

import Image from 'next/image';

import Button from '@/app/components/common/Button/index';
import { Tag } from '@/app/components/common/ImageTag/index';

export default function NotFound() {
    return (
        <div className="flex h-[100vh] xl:h-[120vh] items-center justify-center">
            <div className="border border-foreground px-4 py-4 sm:px-24 sm:py-12 text-center">
                <div className="text-foreground">
                    <div className="flex justify-center">
                        <div className="relative h-[20rem] w-[20rem] sm:h-[25rem] sm:w-[25rem] xl:h-[27.5rem] xl:w-[27.5rem] 2xl:h-[30rem] 2xl:w-[30rem]">
                            <Image
                                src="/complete-vinyl.svg"
                                alt="404 Vinyl Setup"
                                priority={true}
                                fill
                                sizes="(max-width: 1280px) 10rem, 26rem"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                    <Tag
                        tag="404.svg"
                        hoverTag="Page Not Found"
                        QRSrc="soft_dev"
                    />
                </div>
                <div className="font-HK mt-4 w-full grid-cols-2 text-3xs font-medium tracking-widest text-foreground sm:text-sm">
                    <div className="text-right">
                        <Button text="Return home" href='/'/>
                    </div>
                </div>
            </div>
        </div>
    );
}
