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
                        <div className="grid grid-cols-2 gap-2">
                            <div>Name:</div>
                            <div>{name}</div>
                            <div>Date:</div>
                            <div>{date}</div>
                            <div>Location:</div>
                            <div>{location}</div>
                            <div>Tags:</div>
                            <div className="flex flex-wrap gap-2">
                                {tags.split(', ').map((tag, index) => (
                                    <SolidTag key={index} text={tag} />
                                ))}
                            </div>
                            <div>Git Link:</div>
                            <div>
                                <CustomLink
                                    href={gitLink}
                                    blank
                                    className="text-xs"
                                >
                                    Link
                                </CustomLink>
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
