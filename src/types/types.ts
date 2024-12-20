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

export interface DetailItemProps {
    detail: DetailProps;
    index: number;
    hoveredIndex: number | null;
    onMouseEnter: (index: number) => void;
    onMouseLeave: () => void;
}

export interface AboutDetailItemProps {
    index: number;
    onMouseEnter: (index: number) => void;
    onMouseLeave: () => void;
}

export interface BlogContainerProps {
    rightContent: ReactNode;
    name: string;
    date: string;
    tags: string;
    gitLink: string;
    location: string;
}

export interface BlogItemProps {
    title: string;
    date?: string;
    tags?: string[];
    description: string;
    link?: string;
    searchTerm: string;
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

export interface FilterTagProps {
    text: string;
    isClicked?: boolean;
    isHovered?: boolean;
    onClick?: () => void;
}

export interface LegendProps {
    title: string;
    className?: string;
}

export interface LinkProps {
    href?: string;
    className?: string;
    children: React.ReactNode;
    size?: string;
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

export interface SearchBarProps {
    placeholder?: string;
    title?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

export interface SolidTagProps {
    text: string;
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

export interface ZoomableImageProps {
    src: string;
    alt: string;
    className?: string;
}

export interface CodeBlockProps {
    name: string;
    children: React.ReactNode;
}

export interface BlogItemType {
    title: string;
    description: string;
    tags?: string[];
    date: string;
    link: string;
}

export interface HeaderLink {
    id: string;
    text: string;
}

export interface SidebarProps {
    name: string;
    date: string;
    location: string;
    gitLink: string;
    tags: string;
    headerLinks: HeaderLink[];
    activeHeaders: string[];
}

export interface BlogContainerProps extends Omit<SidebarProps, 'headerLinks' | 'activeHeaders'> {
    rightContent: React.ReactNode;
}

export interface MetadataSectionProps {
    name: string;
    date: string;
    location: string;
    gitLink: string;
    tags: string;
}

export interface HeaderNavigationProps {
    headerLinks: HeaderLink[];
    activeHeaders: string[];
}


export interface RightContentProps {
    rightContent: React.ReactNode;
}