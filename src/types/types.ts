import { ReactNode } from 'react';

export interface ButtonProps {
    text: string;
    href?: string;
    blank?: boolean;
}

export interface CustomNavLinksProps {
    isConsoleOpen: boolean;
    toggleConsole: () => void;
}

export interface DetailProps {
    title: string;
    content: string;
    hoveredTitle?: string;
    hoveredContent?: string;
}

export interface DualContainerProps {
    leftContent: ReactNode;
    rightContent: ReactNode;
    leftTitle?: string;
    rightTitle?: string;
}

export interface FieldSetProps {
    children: React.ReactNode;
    className?: string;
}

export interface LegendProps {
    title: string;
    className?: string;
}

export interface LinkProps {
    href?: string;
    className?: string;
    children: React.ReactNode;
    white?: boolean;
    blank?: boolean;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface MobileNavProps {
    onClick: () => void;
}

export interface ScrambleProps {
    children: React.ReactNode;
    shouldScramble?: boolean;
    textHovered?: boolean;
    className?: string;
    loop?: boolean;
}

export interface SectionHeaderProps {
    title: string;
    count: number;
    className?: string;
}

export interface ShutterContainerProps {
    href?: string;
    columns?: ColumnData[];
    titleColumn?: TitleData[];
}

export interface SmoothScrollingProps {
    children: ReactNode;
}

export interface TagProps {
    tag: string;
    hoverTag?: string;
    QRSrc?: string;
    shouldHover?: boolean;
}

export interface ColumnData {
    default?: string;
    hover?: string;
    description?: string;
}

export interface Pixel {
    id: string;
    x: number;
    y: number;
    size: number;
    isWhite: boolean;
    changeTime: number;
}

export interface TitleData {
    default?: string;
    hover?: string;
}