import Image from "next/image";

export default function Title() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center text-foreground">
            <div className="relative inline-block text-6xl sm:text-7xl md:text-9xl lg:text-10xl 2xl:text-11xl">

                <p className="text-xs text-right font-HK tracking-widest relative z-10">[2024 SS Ver]</p>
                <h1 className="mb-[-0.5em] font-Nohemi font-bold leading-none relative z-10">
                    Software
                </h1>
                <div className="relative flex items-center z-10">
                    <span className="z-0 font-SwompRegular tracking-tighter text-tertiary">
                        Dev
                    </span>
                    <span className="absolute z-10 font-SwompSloppy tracking-tighter text-foreground">
                        Dev
                    </span>
                    <span className="z-20 ml-1 mt-4 font-ladi text-foreground lg:mt-8">
                        ELOP
                    </span>
                    <span className="z-30 font-giga">ER</span>
                </div>
            </div>
            <footer className="font-HK flex w-full flex-row items-center justify-between py-6 text-xs md:text-sm font-light tracking-widest relative z-10">
                <div>Dublin, Ireland</div>
                <div className="text-center">A Dev of all [trades]</div>
                <div>Github</div>
            </footer>
        </div>
    );
}