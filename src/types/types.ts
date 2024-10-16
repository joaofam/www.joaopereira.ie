import { ReactNode } from 'react';

// Content Props
export interface DetailProps {
    title: string;
    content: string;
    hoveredTitle?: string;
    hoveredContent?: string;
}

// Smooth Scrolling Props
export interface SmoothScrollingProps {
    children: ReactNode;
}

// Button Props
export interface Pixel {
    id: string;
    x: number;
    y: number;
    size: number;
    isWhite: boolean;
    changeTime: number;
}

// Button Props
export interface ButtonProps {
    text: string;
    href?: string;
    blank?: boolean;
}

// Custom Link Props
export interface CustomNavLinksProps {
    isConsoleOpen: boolean;
    toggleConsole: () => void;
}

// Mobile Nav Props
export interface MobileNavProps {
    onClick: () => void;
}

// Mobile Menu Props
export interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

// Tag Props
export interface TagProps {
    tag: string;
    hoverTag?: string;
    QRSrc?: string;
    shouldHover?: boolean;
}

// Link Props
export interface LinkProps {
    href?: string;
    className?: string;
    children: React.ReactNode;
    white?: boolean;
    blank?: boolean;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

// Scramble Props
export interface ScrambleProps {
    children: React.ReactNode;
    shouldScramble?: boolean;
    textHovered?: boolean;
    className?: string;
    loop?: boolean;
}

// Shutter Props
export interface ColumnData {
    default?: string;
    hover?: string;
    description?: string;
}

export interface TitleData {
    default?: string;
    hover?: string;
}

export interface ShutterContainerProps {
    href?: string;
    columns?: ColumnData[];
    titleColumn?: TitleData[];
}

// Dual Container Props
export interface DualContainerProps {
    leftContent: ReactNode;
    rightContent: ReactNode;
    leftTitle?: string;
    rightTitle?: string;
}

// Field Set Props
export interface FieldSetProps {
    children: React.ReactNode;
    className?: string;
}

// Legend Props
export interface LegendProps {
    title: string;
    className?: string;
}

// Section Header Props
export interface SectionHeaderProps {
    title: string;
    count: number;
    className?: string;
}