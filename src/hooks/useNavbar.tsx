import { useState } from 'react';

export const useNavbar = () => {
    const [isConsoleOpen, setIsConsoleOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleConsole = () => {
        setIsConsoleOpen(!isConsoleOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return {
        isConsoleOpen,
        isMobileMenuOpen,
        toggleConsole,
        toggleMobileMenu,
    };
};