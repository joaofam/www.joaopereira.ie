import { Metadata } from 'next';

import FilefloContent from '@/components/Blog/BlogContent/FilefloContent/index';

export const metadata: Metadata = {
    title: 'About | Joao Pereira',
    description:
        'Learn more about Joao Pereira, a software developer and engineer showcasing his work, projects, and experiences.',
    keywords: [
        'Joao Pereira',
        'About',
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
        url: 'https://joaopereira.ie/about',
        type: 'website',
        title: 'About | Joao Pereira',
        description:
            'Learn more about Joao Pereira, a software developer and engineer showcasing his work, projects, and experiences.',
        images: [
            {
                url: '/about.jpg',
                width: 1200,
                height: 630,
                alt: 'Joao Pereira About Page',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About | Joao Pereira',
        description:
            'Learn more about Joao Pereira, a software developer and engineer showcasing his work, projects, and experiences.',
        creator: '@joaoseph',
        site: '@joaoseph',
        images: [
            {
                url: '/about.jpg',
                width: 1200,
                height: 630,
                alt: 'Joao Pereira About Page',
            },
        ],
    },
    alternates: {
        canonical: 'https://joaopereira.ie/about',
    },
};

export default function Fileflo() {
    return (
        <div className="relative">
            <div className="flex w-full items-center justify-center px-2 py-36 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:h-[100vh] 2xl:px-32">
                <FilefloContent />
            </div>
        </div>
    );
}
