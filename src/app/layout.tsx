import type { Metadata } from 'next';
import {
    Hanken_Grotesk,
    UnifrakturMaguntia,
    Space_Mono,
} from 'next/font/google';
import localFont from 'next/font/local';

import { Footer } from '@/app/components/layout/Footer/index';
import Navbar from '@/app/components/layout/Navbar';
import SmoothScrolling from '@/app/components/SmoothScrolling/SmoothScrolling';
import { ThemeProvider } from '@/app/components/theme-provider';
import { cn } from '@/lib/utils';

import { Providers } from './providers';

import './globals.css';

// Google font Hanken Grotesk
const HankenGrotesk = Hanken_Grotesk({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-hanken-grotesk',
});

// Google font UnifrakturMaguntia
const UM = UnifrakturMaguntia({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-unifraktur-maguntia',
    weight: '400',
});

// Google font Space Mono
const SpaceMono = Space_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-mono',
    weight: ['400', '700'],
});

// local font Nohemi
const Nohemi = localFont({
    src: [
        {
            path: './fonts/nohemi-black.ttf',
            weight: '900',
            style: 'normal',
        },
        {
            path: './fonts/nohemi-bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/nohemi-light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './fonts/nohemi-medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/nohemi-regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/nohemi-semibold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './fonts/nohemi-thin.ttf',
            weight: '100',
            style: 'normal',
        },
        {
            path: './fonts/nohemi-extralight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: './fonts/nohemi-extrabold.ttf',
            weight: '800',
            style: 'normal',
        },
    ],
    variable: '--font-nohemi',
});

// local font Swomp
const SwompSloppy = localFont({
    src: './fonts/swomp-sloppy.ttf',
    variable: '--font-swomp-sloppy',
});

const SwompGapy = localFont({
    src: './fonts/swomp-gapy.ttf',
    variable: '--font-swomp-gapy',
});

const SwompRegular = localFont({
    src: './fonts/swomp-regular.ttf',
    variable: '--font-swomp-regular',
});

// local font Ladi Gross
const LadiGross = localFont({
    src: './fonts/ladi-gross.ttf',
    variable: '--font-ladi-gross',
});

// local font Giga
const Giga = localFont({
    src: './fonts/giga.otf',
    variable: '--font-giga',
});

// local font MagikMarker
const MagikMarker = localFont({
    src: './fonts/magikmarker.otf',
    variable: '--font-magik-marker',
});

// local font throwup
const ThrowUp = localFont({
    src: './fonts/throwup.otf',
    variable: '--font-throwup',
});

// local font rapscript
const RapScript = localFont({
    src: './fonts/rapscript.otf',
    variable: '--font-rapscript',
});

// local font scrawler
const Scrawler = localFont({
    src: './fonts/scrawler.otf',
    variable: '--font-scrawler',
});

// local font streeteuban-regular
const StreetUeban = localFont({
    src: './fonts/streetueban-regular.ttf',
    variable: '--font-streetueban',
});

// local font throwup fill
const ThrowUpFill = localFont({
    src: './fonts/throwup-fill.otf',
    variable: '--font-throwup-fill',
});

// local font throwup highlight
const ThrowUpHighlight = localFont({
    src: './fonts/throwup-highlight.otf',
    variable: '--font-throwup-highlight',
});

// local font throwup shadow
const ThrowUpShadow = localFont({
    src: './fonts/throwup-shadow.otf',
    variable: '--font-throwup-shadow',
});

// local font throwup stroke
const ThrowUpStroke = localFont({
    src: './fonts/throwup-stroke.otf',
    variable: '--font-throwup-stroke',
});

// local font throwup color
const ThrowUpColor = localFont({
    src: './fonts/throwup-color.otf',
    variable: '--font-throwup-color',
});

// local font Glitchy light
const GlitchyLight = localFont({
    src: './fonts/glitchy-light.ttf',
    variable: '--font-glitchy-light',
});

// local font Glitchy light chaos
const GlitchyLightChaos = localFont({
    src: './fonts/glitchy-lightchaos.ttf',
    variable: '--font-glitchy-light-chaos',
});

// local font Glitchy light crushed
const GlitchyLightCrushed = localFont({
    src: './fonts/glitchy-lightcrushed.ttf',
    variable: '--font-glitchy-light-crushed',
});

// local font Glitchy regular
const Glitchy = localFont({
    src: './fonts/glitchy-regular.ttf',
    variable: '--font-glitchy',
});

// local font Glitchy regular chaos
const GlitchyChaos = localFont({
    src: './fonts/glitchy-regularchaos.ttf',
    variable: '--font-glitchy-chaos',
});

// local font Glitchy regular crushed
const GlitchyCrushed = localFont({
    src: './fonts/glitchy-regularcrushed.ttf',
    variable: '--font-glitchy-crushed',
});

// local font Glitchy bold
const GlitchyBold = localFont({
    src: './fonts/glitchy-bold.ttf',
    variable: '--font-glitchy-bold',
});

// local font Glitchy bold chaos
const GlitchyBoldChaos = localFont({
    src: './fonts/glitchy-boldchaos.ttf',
    variable: '--font-glitchy-bold-chaos',
});

// local font Glitchy bold crushed
const GlitchyBoldCrushed = localFont({
    src: './fonts/glitchy-boldcrushed.ttf',
    variable: '--font-glitchy-bold-crushed',
});

export const metadata: Metadata = {
    title: 'Joao Pereira',
    description: 'Joao Pereira personal developer portfolio',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={` ${HankenGrotesk.variable} ${UM.variable} ${SpaceMono.variable} ${Nohemi.variable} font-sans ${SwompSloppy.variable} font-sans ${SwompGapy.variable} font-sans ${SwompRegular.variable} font-sans ${LadiGross.variable} font-sans ${Giga.variable} font-sans ${MagikMarker.variable} font-sans ${ThrowUp.variable} font-sans ${RapScript.variable} font-sans ${Scrawler.variable} font-sans ${StreetUeban.variable} font-sans ${ThrowUpFill.variable} font-sans ${ThrowUpHighlight.variable} font-sans ${ThrowUpShadow.variable} font-sans ${ThrowUpStroke.variable} font-sans ${ThrowUpColor.variable} font-sans ${GlitchyLight.variable} font-sans ${GlitchyLightChaos.variable} font-sans ${GlitchyLightCrushed.variable} font-sans ${Glitchy.variable} font-sans ${GlitchyChaos.variable} font-sans ${GlitchyCrushed.variable} font-sans ${GlitchyBold.variable} font-sans ${GlitchyBoldChaos.variable} font-sans ${GlitchyBoldCrushed.variable} font-sans`}
        >
            <body
                suppressHydrationWarning
                className={cn(
                    'min-h-screen bg-background font-sans antialiased'
                )}
            >
                <Providers>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <SmoothScrolling>
                            <div className="absolute left-0 top-0 z-50 w-full">
                                <Navbar />
                            </div>
                            {children}
                                <Footer />
                        </SmoothScrolling>
                    </ThemeProvider>
                </Providers>
            </body>
        </html>
    );
}
