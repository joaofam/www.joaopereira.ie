import { Metadata } from 'next';

import { Divider } from '@/components/Common/Divider/index';
import { Experience } from '@/components/Home/ExperienceContent/index';
import Intro from '@/components/Home/IntroductionContent/index';
import Title from '@/components/Home/LandingContent/index';
import Projects from '@/components/Home/ProjectsContent/index';

export const metadata: Metadata = {
    title: 'Joao Pereira | Personal Portfolio',
    description:
        'joaopereira.ie - My Personal Portfolio. A place to showcase my work, projects, and experiences.',
    keywords: [
        'Joao Pereira',
        'Portfolio',
        'Software Developer',
        'Software Engineer',
        'Full Stack Developer',
        'React',
        'Next.js',
        'Python',
        'Java',
        'JavaScript',
        'TypeScript',
    ],
    openGraph: {
        url: 'https://joaopereira.ie',
        type: 'website',
        title: 'Personal Portfolio | Joao Pereira',
        description:
            'joaopereira.ie - My Personal Portfolio. A place to showcase my work, projects, and experiences.',
        images: [
            {
                url: '/home.jpg',
                width: 1200,
                height: 630,
                alt: 'Joao Pereira Personal Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Personal Portfolio | Joao Pereira',
        description:
            'joaopereira.ie - My Personal Portfolio. A place to showcase my work, projects, and experiences.',
        creator: '@joaopereira',
        site: '@joaopereira',
        images: [
            {
                url: '/home.jpg',
                width: 1200,
                height: 630,
                alt: 'Joao Pereira Personal Portfolio',
            },
        ],
    },
    alternates: {
        canonical: 'https://joaopereira.ie',
    },
};

export default function Home() {
    return (
        <div className="relative">
            <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
                <main className="flex min-h-screen w-full flex-col items-center justify-between border-l-0 border-r-0 border-gray-300">
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
                    <div className="h-full w-full py-4 sm:py-6 md:py-12 lg:py-16 xl:py-20 2xl:py-24">
                        <Projects />
                    </div>
                    <div className="h-full w-full pb-12 sm:pb-12 md:pb-16 lg:pb-24 xl:pb-28 2xl:pb-32">
                        <Experience />
                    </div>
                </main>
            </div>
        </div>
    );
}
//
