import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Hanken_Grotesk } from "next/font/google";

import { ThemeProvider } from "@/app/components/theme-provider"
import { cn } from "@/lib/utils";
import "./globals.css";

// Google font Hanken Grotesk
const HankenGrotesk = Hanken_Grotesk({  
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-hanken-grotesk",
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
  variable: "--font-nohemi",
});



// local font Swomp 
const SwompSloppy = localFont({
  src: './fonts/swomp-sloppy.ttf',
  variable: "--font-swomp-sloppy",
});

const SwompGapy = localFont({
  src: './fonts/swomp-gapy.ttf',
  variable: "--font-swomp-gapy",
});

const SwompRegular = localFont({
  src: './fonts/swomp-regular.ttf',
  variable: "--font-swomp-regular",
});

// local font Ladi Gross
const LadiGross = localFont({
  src: './fonts/ladi-gross.ttf',
  variable: "--font-ladi-gross",
});

// local font Giga
const Giga = localFont({
  src: './fonts/giga.otf',
  variable: "--font-giga",
});

// local font MagikMarker
const MagikMarker = localFont({
  src: './fonts/magikmarker.otf',
  variable: "--font-magik-marker",
});


export const metadata: Metadata = {
  title: "Joao Pereira",
  description: "Joao Pereira personal developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`
      ${HankenGrotesk.variable}
      ${Nohemi.variable} font-sans
      ${SwompSloppy.variable} font-sans
      ${SwompGapy.variable} font-sans
      ${SwompRegular.variable} font-sans
      ${LadiGross.variable} font-sans
      ${Giga.variable} font-sans
      ${MagikMarker.variable} font-sans
    `}>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
