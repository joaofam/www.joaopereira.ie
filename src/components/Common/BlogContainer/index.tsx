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