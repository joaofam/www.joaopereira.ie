import type { Metadata, Viewport } from 'next';
import { Space_Mono } from 'next/font/google';
import localFont from 'next/font/local';

import { Footer } from '@/app/components/layout/Footer/index';
import Navbar from '@/app/components/layout/Navbar';
import SmoothScrolling from '@/app/components/SmoothScrolling/SmoothScrolling';
import { ThemeProvider } from '@/app/components/theme-provider';
import { cn } from '@/lib/utils';

import { Providers } from './providers';

import './globals.css';

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

// local font scrawler
const Scrawler = localFont({
    src: './fonts/scrawler.otf',
    variable: '--font-scrawler',
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

export const metadata: Metadata = {
    metadataBase: new URL('https://joaopereira.ie'),
    openGraph: {
        siteName: 'Personal Portfolio | Joao Pereira',
        type: 'website',
        locale: 'en_IE',
        url: 'https://joaopereira.ie',
        images: [
            {
                url: '/home.jpg',
                width: 1200,
                height: 630,
                alt: 'Personal Portfolio | Joao Pereira',
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
        googleBot: 'index, follow',
    },
    alternates: {
        types: {
            'application/rss+xml': 'https://joaopereira.ie/rss.xml',
        },
    },
    applicationName: 'Personal Portfolio | Joao Pereira',
    appleWebApp: {
        title: 'Personal Portfolio | Joao Pereira',
        statusBarStyle: 'default',
    },
    icons: {
        icon: [
            {
                url: './icon.png',
                type: 'image/png',
            },
            {
                url: '/icon/icon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                url: '/icon/icon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                url: '/icon/icon-96x96.png',
                sizes: '96x96',
                type: 'image/png',
            },
            {
                url: '/icon/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
        ],
        shortcut: [
            {
                url: '/icon.png',
                type: 'image/png',
            },
        ],
        apple: [
            {
                url: '/icon/icon-57x57.png',
                sizes: '57x57',
                type: 'image/png',
            },
            {
                url: '/icon/icon-60x60.png',
                sizes: '60x60',
                type: 'image/png',
            },
            {
                url: '/icon/icon-72x72.png',
                sizes: '72x72',
                type: 'image/png',
            },
            {
                url: '/icon/icon-76x76.png',
                sizes: '76x76',
                type: 'image/png',
            },
            {
                url: '/icon/icon-114x114.png',
                sizes: '114x114',
                type: 'image/png',
            },
            {
                url: '/icon/icon-120x120.png',
                sizes: '120x120',
                type: 'image/png',
            },
            {
                url: '/icon/icon-144x144.png',
                sizes: '144x144',
                type: 'image/png',
            },
            {
                url: '/icon/icon-152x152.png',
                sizes: '152x152',
                type: 'image/png',
            },
            {
                url: '/icon/icon-180x180.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${SpaceMono.variable} ${Nohemi.variable} ${Scrawler.variable} ${ThrowUpFill.variable} ${ThrowUpHighlight.variable} ${ThrowUpShadow.variable} ${ThrowUpStroke.variable}`}
            suppressHydrationWarning={true}
        >
            <body
                className={cn(
                    'min-h-screen bg-background font-SpaceMono antialiased'
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
                            <div className="hero"></div>
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
