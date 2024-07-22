import type { Metadata } from "next";
import { DM_Sans, Hanken_Grotesk } from "next/font/google";


import { ThemeProvider } from "@/app/components/theme-provider"
import { cn } from "@/lib/utils";
import "./globals.css";

const DMSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-dm-sans",
})

const HankenGrotesk = Hanken_Grotesk({  
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-hanken-grotesk",
})

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
    <html lang="en" className={`${DMSans.variable} ${HankenGrotesk.variable}`}>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark",
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
