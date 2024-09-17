'use client';

import React from 'react';

import Button from '@/app/components/common/Button/index';
import Scramble from '@/app/components/common/Scramble';
import { ShutterRow } from '@/app/components/common/ShutterRow/index';

export default function Projects() {
    return (
        <div className="relative flex h-[100vh] w-full items-center justify-center font-SpaceMono tracking-tight text-foreground">
            <div className="relative w-full">
                <h1 className="py-8 font-scrawler text-6xl font-medium 2xl:text-7xl">
                    <Scramble className="text-[#D33B7]">Projects</Scramble>
                </h1>
                <div className="relative w-full border p-8">
                    <span className="absolute left-4 top-0 -translate-y-1/2 transform bg-white px-2 text-xs uppercase tracking-wide text-[#DC33B7]">
                        #######
                    </span>
                    <ShutterRow
                        href='github.com/joaopereira.ie'
                        columns={[
                            {
                                default: 'joaopereira.ie',
                                hover: 'github.com/joaopereira.ie',
                                description: 'Personal Portfolio',
                            },
                            {
                                default: 'Web Design',
                                hover: 'NextJS TS TailwindCSS',
                            },
                            {
                                default: '2024',
                                hover: '2024',
                            },
                        ]}
                    />
                    <ShutterRow
                        href="https://github.com/Fileflo"
                        columns={[
                            {
                                default: 'Fileflo',
                                hover: 'github.com/Fileflo',
                                description: 'Blockchain File Storage/Sharing Platform',
                            },
                            {
                                default: 'Blockchain, Cryptography, Web Dev',
                                hover: 'React AWS Python NodeJS Solidity Web3',
                            },
                            {
                                default: '2023',
                                hover: '2023',
                            },
                        ]}
                    />
                    <ShutterRow
                        href='github.com/Venato'
                        columns={[
                            {
                                default: 'Venato',
                                hover: 'github.com/Venato',
                                description: 'Android App for GRPS Tracking',
                            },
                            {
                                default: 'IOT, Mobile Development',
                                hover: 'React Native AWS Android Studio Python',
                            },
                            {
                                default: '2022',
                                hover: '2022',
                            },
                        ]}
                    />
                </div>
                <div className="pt-8 text-end">
                    <Button text="check my github" />
                </div>
            </div>
        </div>
    );
}