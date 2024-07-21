import Image from "next/image";

import Landing from "@/components/LandingCard/landing";
import Navbar from "@/components/Navbar/navbar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-4 px-52 padding-line">
      <Navbar />
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="font-bold text-center tracking-tighterxs">Personal Portfolio of a Developer</h1>
          <Image src="/rainbow-landing.svg" alt="Picture of me" width={1250} height={200} />
          <Landing />
        </div>
    </main>
  );
}
