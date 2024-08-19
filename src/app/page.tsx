import About from '@/app/components/AboutCard/about';
import Contact from '@/app/components/ContactCard/contact';
import { Footer } from '@/app/components/Footer/footer';
import { CardGap } from '@/app/components/GapCard/gap';
import Intro from '@/app/components/Intro/intro';
import Landing from '@/app/components/LandingCard/landing';
import LandingPrism from '@/app/components/LandingPrism/prism';
import Title from '@/app/components/LandingTitle/title';
import Navbar from '@/app/components/Navbar/navbar';
import Projects from '@/app/components/ProjectsCard/projects';
import { Resume } from '@/app/components/ResumeCard/resume';
import Skills from '@/app/components/SkillsCard/skills';
import { SkillsCarousel } from '@/app/components/SkillsCarousel/skills';

export default function Home() {
    return (
        <div className="relative">
            <Navbar />
            <div className="w-full px-4 sm:px-6 lg:px-32 xl:px-32">
                <div className="absolute bottom-0 left-4 top-0 w-px bg-gray-300 sm:left-6 lg:left-32 xl:left-32"></div>
                <div className="absolute bottom-0 right-4 top-0 w-px bg-gray-300 sm:right-6 lg:right-32 xl:right-32"></div>
                
                <main className="flex min-h-screen w-full flex-col items-center justify-between border-l border-r border-gray-300 px-4 sm:px-24 md:px-16 lg:px-52 xl:px-32">
                    <div className="flex h-full w-full items-center justify-center">
                        <Title />
                    </div>
                    <div className="flex h-full w-full items-center justify-center">
                        <Intro />
                    </div>
                    <div className="flex h-full w-full items-center justify-center">
                        <About />
                    </div>
                    {/* <div className="h-32 w-full">
                    <CardGap />
                </div>
                <div className="h-full w-full">
                    <About />
                </div>
                <div className="h-8 w-full">
                    <CardGap />
                </div>
                <div className="h-32 w-full">
                    <Resume />
                </div>
                <div className="h-32 w-full">
                    <CardGap />
                </div>
                <div className="h-full w-full">
                    <Skills />
                </div>
                <div className="h-full w-full">
                    <SkillsCarousel />
                </div>
                <div className="h-32 w-full">
                    <CardGap />
                </div>
                <div className="h-full w-full">
                    <Projects />
                </div>
                <div className="h-32 w-full">
                    <CardGap /> 
                </div>
                <div className="h-full w-full">
                    <Contact />
                </div>
                <div className="h-32 w-full">
                    <CardGap />
                </div> */}
                </main>
            </div>
            <div className="h-1/2 w-full">
                <Footer />
            </div>
        </div>
    );
}
