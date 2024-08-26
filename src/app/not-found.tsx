import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/app/components/Navbar/navbar';

const VinylPlayer = () => {
    return (
        <div className="relative">
            <Image
                src="/vinyl-player.svg"
                alt="404 Not Found"
                width={650}
                height={500}
            />
            <Image
                src="/vinyl.svg"
                alt="Layered Vinyl"
                width={425}
                height={500}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-[-3.75rem] animate-spin-slower"
            />
        </div>
    );
};

export default function NotFound() {
    return (
        <div className='relative h-screen'>
            <Navbar />
            <div className="flex h-screen items-center justify-center flex-col">
                <div className="w-[650px]">
                    <VinylPlayer />
                    <div className="flex justify-between mt-4 px-8 font-HK font-light text-xs sm:text-sm text-foreground">
                        <span className="text-left">[404] Page Not Found</span>
                        <span className="text-right">Return Home?</span>
                    </div>
                </div>
            </div>
        </div>
    );
}