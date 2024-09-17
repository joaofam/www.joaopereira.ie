import type { Config } from 'tailwindcss';

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        fontSize: {
            '3xs': '0.5rem',
            '2xs': '0.625rem',
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '8xl': '6rem',
            '9xl': '8rem',
            '10xl': '10rem',
            '11xl': '12rem',
            '12xl': '14rem',
            '13xl': '16rem',
            '14xl': '18rem',
            '15xl': '20rem',
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                GlitchyLight: ['var(--font-glitchy-light)'],
                GlitchyLightChaos: ['var(--font-glitchy-light-chaos)'],
                GlitchyLightCrushed: ['var(--font-glitchy-light-crushed)'],
                Glitchy: ['var(--font-glitchy)'],
                GlitchyChaos: ['var(--font-glitchy-chaos)'],
                GlitchyCrushed: ['var(--font-glitchy-crushed)'],
                GlitchyBold: ['var(--font-glitchy-bold)'],
                GlitchyBoldChaos: ['var(--font-glitchy-bold-chaos)'],
                GlitchyBoldCrushed: ['var(--font-glitchy-bold-crushed)'],
                HK: ['var(--font-hanken-grotesk)'],
                UM: ['var(--font-unifraktur-maguntia)'],
                SpaceMono: ['var(--font-space-mono)'],
                Nohemi: ['var(--font-nohemi)'],
                SwompGapy: ['var(--font-swomp-gapy)'],
                SwompSloppy: ['var(--font-swomp-sloppy)'],
                SwompRegular: ['var(--font-swomp-regular)'],
                ladi: ['var(--font-ladi-gross)'],
                giga: ['var(--font-giga)'],
                magik: ['var(--font-magik-marker)'],
                ThrowUp: ['var(--font-throwup)'],
                ThrowUpColor: ['var(--font-throwup-color)'],
                ThrowUpFill: ['var(--font-throwup-fill)'],
                ThrowUpStroke: ['var(--font-throwup-stroke)'],
                ThrowUpHighlight: ['var(--font-throwup-highlight)'],
                ThrowUpShadow: ['var(--font-throwup-shadow)'],
                rapscript: ['var(--font-rapscript)'],
                scrawler: ['var(--font-scrawler)'],
                ueban: ['var(--font-streetueban)'],
            },
            fontWeight: {
                light: '300',
                regular: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                black: '900',
            },
            colors: {
                tertiary: '#A8FF97',
                calendlyColor: '#006BFF',
                red: '#FF9797',
                orange: '#FFB697',
                yellow: '#FFF597',
                teal: '#97FFF3',
                royal: '#346FE3',
                pink: '#D797FF',
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            boxShadow: {
                'strong-inner': '0 4px 6px rgba(0, 0, 0, 0.3)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                glitchyHover: {
                    '0%': { fontFamily: 'var(--font-glitchy-light)' },
                    '33%': { fontFamily: 'var(--font-glitchy-light-chaos)' },
                    '66%': {
                        fontFamily: 'var(--font-glitchy-light-crushed)',
                        color: '#006BFF',
                    },
                    '100%': {
                        fontFamily: 'var(--font-glitchy-light-chaos)',
                        color: '#006BFF',
                    },
                },
                glitchyLeave: {
                    '0%': {
                        fontFamily: 'var(--font-glitchy-light-crushed)',
                        color: '#006BFF',
                    },
                    '33%': {
                        fontFamily: 'var(--font-glitchy-light-chaos)',
                        color: 'inherit',
                    },
                    '66%': { fontFamily: 'var(--font-glitchy-light)' },
                    '100%': {
                        fontFamily: 'var(--font-space-mono)',
                        color: 'inherit',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                glitchyHover: 'glitchyHover 0.3s forwards',
                glitchyLeave: 'glitchyLeave 0.3s forwards',
            },
            letterSpacing: {
                tighterxs: '-0.075em',
            },
            borderWidth: {
                1: '1px',
            },
            backgroundImage: {
                calendly:
                    'linear-gradient(to top right, #006BFF, #0A0A0A, #0A0A0A, #0A0A0A, #0A0A0A)',
                github: 'linear-gradient(to top right, #24292E, #0A0A0A, #0A0A0A, #0A0A0A, #0A0A0A)',
                resend: 'linear-gradient(to top right, #24292E, #0A0A0A, #0A0A0A, #0A0A0A, #0A0A0A)',
            },
            spacing: {
                '2xl': '32rem',
            },
        },
    },
    variants: {
        extend: {
            animation: ['hover', 'group-hover'],
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        require('@designbycode/tailwindcss-text-stroke'),
    ],
} satisfies Config;

export default config;
