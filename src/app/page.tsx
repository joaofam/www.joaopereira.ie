import Image from "next/image";

import About from "@/app/components/AboutCard/about";
import { CardGap } from "@/app/components/GapCard/gap";
import Landing from "@/app/components/LandingCard/landing";
import Navbar from "@/app/components/Navbar/navbar";
import { Resume } from "@/app/components/ResumeCard/resume";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-4 px-52 padding-line">
      <Navbar />
        <div className="flex flex-col items-center justify-center pt-24">
          <h1 className="font-bold text-center">Personal Portfolio of a Developer</h1>
          <Image src="/rainbow-landing.svg" alt="Picture of me" width={1250} height={200} />
          <Landing />
        </div>
        <div className="w-full h-32">
          <CardGap />
        </div>
        <div className="w-full h-full">
          <About />
        </div>
        <div className="w-full h-8">
          <CardGap />
        </div>
        <div className="w-full h-32">
          <Resume />
        </div>
        <div className="w-full h-8">
          <CardGap />
        </div>
    </main>
  );
}
