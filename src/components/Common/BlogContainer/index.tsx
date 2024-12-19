import { SolidTag } from '@/components/Blog/Tag/Solid';
import { Legend } from '@/components/Common/FieldSet/Legend';
import { CustomLink } from '@/components/Common/Link';
import useHeaderObserver from '@/hooks/useHeaderObserver';
import { BlogContainerProps } from '@/types/types';

const Sidebar: React.FC<{
    name: string;
    date: string;
    location: string;
    gitLink: string;
    tags: string;
    headerLinks: { id: string; text: string }[];
    activeHeaders: string[];
}> = ({ name, date, location, gitLink, tags, headerLinks, activeHeaders }) => {
    return (
        <div className="relative col-span-2 flex h-full w-full items-start justify-center border border-foreground">
            <Legend
                title="Metadata"
                className="cursor-default px-2 font-bold lowercase"
            />
            <div className="sticky top-0 p-8 pt-20">
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
                            size="xs"
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
                    <div className="col-span-2 mt-4 border-t border-accent" />
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

                                const isActive = activeHeaders.includes(link.id);

                                return (
                                    <div
                                        key={link.id}
                                        className={marginLeftClass}
                                    >
                                        <a
                                            href={`#${link.id}`}
                                            className={`no-underline hover:text-primary ${
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
    );
};

const RightContent: React.FC<{ rightContent: React.ReactNode }> = ({
    rightContent,
}) => {
    return (
        <div className="col-span-4 flex h-full w-full max-w-full flex-col items-center justify-start sm:items-start">
            <div className="relative h-full space-y-8 border border-foreground p-4 xl:p-10 w-full">
                <Legend
                    title="Content"
                    className="cursor-default px-2 font-bold lowercase"
                />
                {rightContent}
            </div>
        </div>
    );
};

const BlogContainer: React.FC<BlogContainerProps> = ({
    rightContent,
    name,
    date,
    tags,
    gitLink,
    location,
}) => {
    const { headerLinks, activeHeaders } = useHeaderObserver(rightContent);

    return (
        <div className="flex h-full w-full cursor-default flex-col items-center justify-center font-SpaceMono text-2xs text-foreground sm:text-xs 2xl:text-sm">
            <div className="grid h-full w-full grid-cols-1 items-start gap-8 xl:grid-cols-6">
                <Sidebar
                    name={name}
                    date={date}
                    location={location}
                    gitLink={gitLink}
                    tags={tags}
                    headerLinks={headerLinks}
                    activeHeaders={activeHeaders}
                />
                <RightContent rightContent={rightContent} />
            </div>
        </div>
    );
};

export default BlogContainer;
