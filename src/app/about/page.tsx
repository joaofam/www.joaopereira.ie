import AboutContent from '@/app/components/about/AboutContent/index';

import { Footer } from '../components/layout/Footer';

export default function About() {
    return (
        <div className="relative">
            <div className="flex h-1/3 w-full items-center justify-center px-24 py-36">
                <AboutContent />
            </div>
            <div className="h-1/2 w-full">
                <Footer />
            </div>
        </div>
    );
}
