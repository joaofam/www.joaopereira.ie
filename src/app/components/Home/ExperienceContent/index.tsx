'use client';

import { ShutterRow } from '@/app/components/common/ShutterRow/index';

export const Experience = () => {
    return (
        <div className="relative flex h-[75vh] w-full items-center justify-center font-SpaceMono tracking-tight text-foreground">
            <div className="relative w-full">
                <h1 className="py-8 font-Nohemi text-5xl font-medium 2xl:text-7xl">
                    Experience
                </h1>
                <div className="relative w-full border px-2 py-4 sm:py-8 md:px-8">
                    <span className="absolute left-4 top-0 -translate-y-1/2 transform bg-white px-2 font-SpaceMono text-xs uppercase tracking-wide text-secondary">
                        #######
                    </span>
                    <ShutterRow
                        columns={[
                            {
                                default: 'Concurrent Engineering',
                                hover: 'Associate Applications Developer',
                            },
                            {
                                default: '10/23 - Present [1 year]',
                                hover: 'Java Python JS TS NextJS SQL PTC Agile',
                            },
                        ]}
                    />
                    <ShutterRow
                        columns={[
                            {
                                default: 'Klas Telecom',
                                hover: 'Software Developer Intern',
                            },
                            {
                                default: '03/23 - 08/23 [6 Months]',
                                hover: 'Python React Ansible SQL TestRail Scrum',
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};
