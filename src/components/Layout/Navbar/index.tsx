'use client';

import { List, X } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CustomLink } from '@/components/Common/Link/index';
import Scramble from '@/components/Common/Scramble/index';
import Console from '@/components/Console/index';
import { Time } from '@/components/Layout/Navbar/time';
import { useNavbar } from '@/hooks/useNavbar';
import {
    CustomNavLinksProps,
    MobileNavProps,
    MobileMenuProps,
} from '@/types/types';

function CustomNavLinks({
    isConsoleOpen,
    toggleConsole,
}: Readonly<CustomNavLinksProps>) {
    const pathname = usePathname();

    return (
        <>
            <div className="hidden cursor-default sm:flex">
                <Time />
            </div>
            <CustomLink
                href="/about"
                className={`${pathname === '/about' ? ' text-primary' : ''}`}
            >
                About
            </CustomLink>
            <CustomLink
                href="/blog"
                className={`${pathname === '/about' ? ' text-primary' : ''}`}
            >
                Blog
            </CustomLink>
            <CustomLink
                onClick={toggleConsole}
                className={`${isConsoleOpen ? ' text-primary' : ''}`}
            >
                Console
            </CustomLink>
            <CustomLink href="https://github.com/joaofam" blank={true}>
                GitHub
            </CustomLink>
        </>
    );
}

const MobileNavMenu = ({ onClick }: Readonly<MobileNavProps>) => (
    <button className="sm:hidden" onClick={onClick} aria-label="Open menu">
        <List weight="bold" />
    </button>
);

const MenuItem = ({
    href,
    onClick,
    isActive,
    children,
    blank = false,
    index,
}: {
    href: string;
    onClick: () => void;
    isActive: boolean;
    children: React.ReactNode;
    blank?: boolean;
    index: number;
}) => (
    <motion.div
        className="flex h-28 items-center justify-start"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{ duration: 0.3, delay: index * 0.15 }}
    >
        <CustomLink
            href={href}
            onClick={blank ? undefined : onClick}
            blank={blank}
            className={`h-full w-full border-b border-foreground px-16 text-3xl ${isActive ? 'bg-foreground text-white' : ''}`}
        >
            {children}
        </CustomLink>
    </motion.div>
);

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();

    const menuItems = [
        { href: '/', label: 'Home', index: 0 },
        { href: '/about', label: 'About', index: 1 },
        {
            href: 'https://github.com/joaofam',
            label: 'GitHub',
            index: 2,
            blank: true,
        },
        { href: '/resume.pdf', label: 'Resume', index: 3, blank: true },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed right-0 top-0 h-screen w-full bg-white sm:hidden"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <button
                        className="absolute right-8 top-8 text-foreground"
                        onClick={onClose}
                        aria-label="Close menu"
                    >
                        <X weight="bold" size={16} />
                    </button>
                    <motion.div
                        className="flex h-full flex-col justify-center uppercase text-foreground"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={{
                            open: {
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.2,
                                },
                            },
                            closed: {
                                transition: {
                                    staggerChildren: 0.05,
                                    staggerDirection: -1,
                                },
                            },
                        }}
                    >
                        {menuItems.map(item => (
                            <MenuItem
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                isActive={pathname === item.href}
                                blank={item.blank}
                                index={item.index}
                            >
                                <span className="text-sm">
                                    [0{item.index + 1}]{' '}
                                </span>
                                {item.label}
                            </MenuItem>
                        ))}
                        <motion.div
                            className="flex h-24 items-center justify-center px-4 text-xl"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.75 }}
                        >
                            <Time />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default function Navbar() {
    const { isConsoleOpen, isMobileMenuOpen, toggleConsole, toggleMobileMenu } =
        useNavbar();

    return (
        <>
            <header className="flex h-24 w-full shrink-0 items-center px-10 pt-8 text-foreground sm:px-12 md:px-14 lg:px-28 xl:px-24">
                <Link
                    href="/"
                    className="mr-6 font-Nohemi text-xl font-semibold tracking-wide transition-colors duration-300 hover:text-primary sm:text-2xl lg:flex"
                    prefetch={false}
                >
                    <span>
                        <Scramble>Joao Pereira</Scramble>
                    </span>
                </Link>
                <nav className="ml-auto flex items-center space-x-8 text-sm text-foreground">
                    <div className="flex sm:hidden">
                        <CustomLink
                            onClick={toggleConsole}
                            className={`${isConsoleOpen ? 'text-primary' : ''}`}
                        >
                            Console
                        </CustomLink>
                    </div>
                    <MobileNavMenu onClick={toggleMobileMenu} />
                    <div className="hidden space-x-8 sm:flex">
                        <CustomNavLinks
                            isConsoleOpen={isConsoleOpen}
                            toggleConsole={toggleConsole}
                        />
                    </div>
                </nav>
            </header>
            {isConsoleOpen && <Console onClose={toggleConsole} />}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
        </>
    );
}
