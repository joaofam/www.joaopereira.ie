import { useEffect, useState } from 'react';

const useHeaderObserver = (dependency: any) => {
    const [headerLinks, setHeaderLinks] = useState<
        { id: string; text: string }[]
    >([]);
    const [activeHeaders, setActiveHeaders] = useState<string[]>([]);

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
                const visibleHeaders = entries
                    .filter(entry => entry.isIntersecting)
                    .map(entry => entry.target.id);
                setActiveHeaders(visibleHeaders);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 1,
            }
        );

        headers.forEach(header => observer.observe(header));

        return () => {
            headers.forEach(header => observer.unobserve(header));
        };
    }, [dependency]);

    return { headerLinks, activeHeaders };
};

export default useHeaderObserver;
