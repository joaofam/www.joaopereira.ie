import { useEffect, useState } from 'react';

const useHeaderObserver = (dependency: any) => {
    const [headerLinks, setHeaderLinks] = useState<{ id: string; text: string }[]>([]);
    const [activeHeader, setActiveHeader] = useState<string | null>(null);

    useEffect(() => {
        const headers = document.querySelectorAll('h1, h2, h3, h4');
        const links = Array.from(headers)
            .filter(header => /-h[1-4]$/.test(header.id))
            .map(header => ({
                id: header.id,
                text: header.textContent ?? '',
            }));
        setHeaderLinks(links);

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveHeader(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 1.0,
            }
        );

        headers.forEach(header => observer.observe(header));

        return () => {
            headers.forEach(header => observer.unobserve(header));
        };
    }, [dependency]);

    return { headerLinks, activeHeader };
};

export default useHeaderObserver;
