import { RightContent } from '@/components/Common/BlogContainer/RightContent';
import { Sidebar } from '@/components/Common/BlogContainer/Sidebar';
import useHeaderObserver from '@/hooks/useHeaderObserver';
import { BlogContainerProps } from '@/types/types';

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
            <div className="flex h-full w-full gap-8">
                {/* Sidebar: 1/3 of the width */}
                <div className="hidden xl:w-1/3 xl:flex">
                    <Sidebar
                        name={name}
                        date={date}
                        location={location}
                        gitLink={gitLink}
                        tags={tags}
                        headerLinks={headerLinks}
                        activeHeaders={activeHeaders}
                    />
                </div>

                {/* RightContent: 2/3 of the width */}
                <div className="w-full xl:w-2/3 max-w-full">
                    <RightContent rightContent={rightContent} />
                </div>
            </div>
        </div>
    );
};

export default BlogContainer;
