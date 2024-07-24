import About from '@/app/components/AboutCard/about';
import Contact from '@/app/components/ContactCard/contact';
import { Footer } from '@/app/components/Footer/footer';
import { CardGap } from '@/app/components/GapCard/gap';
import Landing from '@/app/components/LandingCard/landing';
import LandingPrism from '@/app/components/LandingPrism/prism';
import Navbar from '@/app/components/Navbar/navbar';
import Projects from '@/app/components/ProjectsCard/projects';
import { Resume } from '@/app/components/ResumeCard/resume';
import Skills from '@/app/components/SkillsCard/skills';

export default function Home() {
    return (
        <div>
            <main className="padding-line flex min-h-screen flex-col items-center justify-between px-52 pt-4">
                <Navbar />
                <div className="h- flex flex-col items-center justify-center pt-32">
                    <h1 className="text-center font-bold">
                        Personal Portfolio of a Developer
                    </h1>
                    <LandingPrism />
                    <Landing />
                </div>
                <div className="h-32 w-full">
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
                <div className="h-8 w-full">
                    <CardGap />
                </div>
                <div className="h-full w-full">
                    <Skills />
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
                <div className="h-8 w-full">
                    <CardGap />
                </div>
            </main>
            <div className="h-64 w-full">
                <Footer />
            </div>
        </div>
    );
}
