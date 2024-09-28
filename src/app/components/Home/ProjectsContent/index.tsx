'use client';

import React from 'react';

import Button from '@/app/components/common/Button/index';
import Scramble from '@/app/components/common/Scramble';
import { ShutterRow } from '@/app/components/common/ShutterRow/index';

export default function Projects() {
    return (
        <div className="relative flex h-[75vh] sm:[25vh] md:h-[70vh] lg:h-[75vh] xl:h-[75vh] 2xl:h-[50vh] w-full items-center justify-center font-SpaceMono tracking-tight text-foreground">
            <div className="relative w-full">
                <h1 className="ml-4 py-8 font-scrawler cursor-default text-5xl font-medium sm:ml-0 2xl:text-7xl">
                    <Scramble>Projects</Scramble>
                </h1>
                <div className="relative w-full border px-2 py-4 sm:py-8 md:px-8">
                    <span className="absolute left-4 cursor-default top-0 -translate-y-1/2 transform bg-white px-2 text-xs uppercase tracking-wide text-secondary">
                        #######
                    </span>
                    <ShutterRow
                        href="https://github.com/joaofam/joaopereira.ie"
                        columns={[
                            {
                                default: 'joaopereira.ie',
                                hover: 'github.com/joaofam/joaopereira.ie',
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
                        href="https://github.com/joaofam/FILEFLO"
                        columns={[
                            {
                                default: 'Fileflo',
                                hover: 'github.com/joaofam/FILEFLO',
                                description:
                                    'Blockchain File Storage/Sharing Platform',
                            },
                            {
                                default: 'Blockchain, Crypto, Web Dev',
                                hover: 'React AWS Python NodeJS Solidity Web3',
                            },
                            {
                                default: '2023',
                                hover: '2023',
                            },
                        ]}
                    />
                    <ShutterRow
                        href="https://github.com/joaofam/Venato"
                        columns={[
                            {
                                default: 'Venato',
                                hover: 'github.com/joaofam/Venato',
                                description: 'Android App for GRPS Tracking',
                            },
                            {
                                default: 'IOT, Android Dev',
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
