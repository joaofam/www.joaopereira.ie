'use client';

import { Divider } from '@/app/components/common/Divider/index';
import { Experience } from '@/app/components/Home/ExperienceContent/index';
import Intro from '@/app/components/Home/IntroductionContent/index';
import Title from '@/app/components/Home/LandingContent/index';
import Projects from '@/app/components/Home/ProjectsContent/index';
import { Footer } from '@/app/components/layout/Footer/index';

export default function Home() {
    return (
        <div className="relative">
            <div className="w-full px-4 sm:px-6 lg:px-32 xl:px-32 2xl:px-16">
                <main className="flex min-h-screen w-full flex-col items-center justify-between border-l-0 border-r-0 border-gray-300 px-4 sm:px-0">
                    <div className="flex h-full w-full items-center justify-center">
                        <Title />
                    </div>
                    <div className="flex h-full w-full items-center justify-center">
                        <Divider />
                    </div>
                    <div className="flex h-full w-full items-center justify-center">
                        <Intro />
                    </div>
                    <div className="flex h-full w-full items-center justify-center">
                        <Divider />
                    </div>
                    <div className="flex h-[50vh] w-full items-center justify-center">
                        <Experience />
                    </div>
                    <div className="h-full w-full">
                        <Projects />
                    </div>
                </main>
            </div>
            <div className="h-1/2 w-full">
                <Footer />
            </div>
        </div>
    );
}
