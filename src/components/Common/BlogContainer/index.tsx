import { useEffect, useState } from 'react';

import { SolidTag } from '@/components/Blog/Tag/Solid';
import { Legend } from '@/components/Common/FieldSet/Legend';
import { CustomLink } from '@/components/Common/Link';
import { BlogContainerProps } from '@/types/types';

const BlogContainer: React.FC<BlogContainerProps> = ({
    rightContent,
    name,
    date,
    tags,
    gitLink,
    location,
}) => {
    const [headerLinks, setHeaderLinks] = useState<{ id: string, text: string }[]>([]);
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
                threshold: 1.0, // Trigger when 10% of the header is visible
            }
        );

        headers.forEach(header => observer.observe(header));

        return () => {
            headers.forEach(header => observer.unobserve(header));
        };
    }, [rightContent]);

    return (
        <div className="flex h-full w-full cursor-default flex-col items-center justify-center font-SpaceMono text-2xs text-foreground sm:text-xs 2xl:text-sm">
            <div className="grid h-full w-full grid-cols-1 items-start gap-8 xl:grid-cols-6">
                {/* Left Content Container */}
                <div className="relative col-span-2 flex h-full w-full items-start justify-center border border-foreground">
                    <Legend
                        title="Metadata"
                        className="cursor-default px-2 font-bold lowercase"
                    />
                    <div className="p-8 pt-20 sticky top-0">
                        <div className="grid grid-cols-2 gap-1">
                            <div>Name:</div>
                            <div>{name}</div>
                            <div>Date Created:</div>
                            <div>{date}</div>
                            <div>Location:</div>
                            <div>{location}</div>
                            <div>Project Link:</div>
                            <div>
                                <CustomLink
                                    size='xs'
                                    href={gitLink}
                                    blank
                                    className="capitalize"
                                >
                                    Repo
                                </CustomLink>
                            </div>
                            <div>Tags:</div>
                            <div className="flex flex-wrap gap-2">
                                {tags.split(', ').map((tag, index) => (
                                    <SolidTag key={index} text={tag} />
                                ))}
                            </div>
                            
                            {/* Divider */}
                            <div className="col-span-2 border-t border-accent mt-4" />
                            {/* Header Sidebar */}
                            <div className="col-span-2 mt-4">
                                <div className="space-y-1">
                                    {headerLinks.map(link => {
                                        let marginLeftClass = '';
                                        if (link.id.endsWith('-h2')) {
                                            marginLeftClass = 'ml-2';
                                        } else if (link.id.endsWith('-h3')) {
                                            marginLeftClass = 'ml-4';
                                        } else if (link.id.endsWith('-h4')) {
                                            marginLeftClass = 'ml-6';
                                        }

                                        const isActive = activeHeader === link.id;

                                        return (
                                            <div key={link.id} className={marginLeftClass}>
                                                <a
                                                    href={`#${link.id}`}
                                                    className={`hover:text-primary  no-underline ${
                                                        isActive ? 'text-primary' : ''
                                                    }`}
                                                >
                                                    [{isActive ? 'x' : ''}] {link.text}
                                                </a>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content Container */}
                <div className="col-span-4 flex h-full w-full flex-col items-center justify-start sm:items-start">
                    <div className="relative h-full space-y-8 border border-foreground p-4 xl:p-10">
                        <Legend
                            title="Content"
                            className="cursor-default px-2 font-bold lowercase"
                        />
                        {rightContent}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogContainer;
