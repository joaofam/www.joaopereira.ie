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

export interface ButtonProps {
    text: string;
    href?: string;
    blank?: boolean;
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
    href: string;
    className?: string;
    children: React.ReactNode;
    white?: boolean;
    blank?: boolean;
}

// Scramble Props
export interface ScrambleProps {
    children: React.ReactNode;
    shouldScramble?: boolean;
    textHovered?: boolean;
    className?: string;
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
