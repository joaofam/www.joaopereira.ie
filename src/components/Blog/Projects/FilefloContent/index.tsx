'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import Button from '@/components/Common/Button/index';
import DetailItem from '@/components/Common/DetailItem';
import DualContainer from '@/components/Common/DualContainer/index';
import { Tag } from '@/components/Common/ImageTag/index';
import { FILEFLO, TAGS } from '@/consts/blog';

export default function FilefloContent() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    const rightContent = (
        <div className="space-y-8">
            <p className="text-left sm:text-left">
                <span className="text-primary">Fileflo</span> is a secure,
                user-friendly, and decentralised file-sharing platform that
                leverages the power of the{' '}
                <span className="text-primary">
                    InterPlanetary File System (IPFS)
                </span>{' '}
                and <span className="text-primary">blockchain technology</span>.
                By utilising IPFS, Fileflo enables peer-to-peer file sharing
                across a distributed network of nodes, ensuring high
                availability, resilience, and eliminating reliance on
                centralised servers.
                <br />
                <br />
                To prioritise user privacy and security, Fileflo uses advanced
                symmetric and asymmetric encryption algorithms, ensuring that
                only authorised users can access shared files.
                <br />
                <br />
                File metadata, including IPFS hashes, is stored on the{' '}
                <span className="text-primary">Ethereum blockchain</span>,
                providing an immutable record of file provenance and history
                while preventing tampering or deletion. Fileflo’s intuitive
                interface makes it easy to upload, share, and download files, as
                well as create shared folders for seamless collaboration among
                teams and groups.
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {TAGS.map((tag, index) => (
                    <div
                        key={index}
                        className="rounded-sm border border-gray-400 bg-gray-200 px-2 py-1 text-2xs text-gray-800 sm:text-xs"
                    >
                        {tag}
                    </div>
                ))}
            </div>
            {/* Divider */}
            <div className="border-gray mt-8 border-t" />
            <div className="mt-4 grid grid-cols-1 gap-4">
                {FILEFLO.map((detail, index) => (
                    <DetailItem
                        key={index}
                        detail={detail}
                        index={index}
                        hoveredIndex={hoveredIndex}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                ))}
            </div>
        </div>
    );

    const leftContent = (
        <div className="relative flex flex-col items-center">
            <div className="relative h-72 w-72 xl:h-[32rem] xl:w-[32rem] 2xl:h-[40rem] 2xl:w-[40rem]">
                <Image
                    src="/blog/projects/fileflo_diagram.svg"
                    alt="fileflo"
                    priority={true}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div>
                <Tag
                    tag="fileflo_system_architecture.png"
                    hoverTag="29.04.23"
                    QRSrc="soft_dev"
                />
            </div>
        </div>
    );

    return (
        <div className="relative flex flex-col items-center justify-center font-SpaceMono text-2xs tracking-wide text-foreground sm:text-xs 2xl:pt-24">
            <DualContainer
                leftContent={leftContent}
                rightContent={rightContent}
                leftTitle="diagram"
                rightTitle="about project"
            />
            <div className="font-HK relative z-10 self-end pt-4 text-sm">
                <Button
                    text="Project Link"
                    href="https://github.com/joaofam/fileflo"
                    blank
                />
            </div>
        </div>
    );
}
