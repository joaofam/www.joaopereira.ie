import { DualContainerProps } from '@/app/types/types';

const DualContainer: React.FC<DualContainerProps> = ({
    leftContent,
    rightContent,
    leftTitle = 'About',
    rightTitle = 'Img',
}) => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center font-SpaceMono text-2xs text-foreground sm:text-xs 2xl:text-sm cursor-default">
            <div className="grid-rows-auto sm:grid-rows-0 grid h-full w-full items-start gap-8 xl:grid-cols-2">
                {/* Left Content Container (previously Right) */}
                <div className="relative flex h-full w-full items-center justify-center border border-foreground">
                    <span className="absolute left-4 top-0 -translate-y-1/2 transform bg-white px-2 font-bold lowercase text-accent 2xl:text-sm cursor-default">
                        {leftTitle}
                    </span>
                    {leftContent}
                </div>

                {/* Right Content Container (previously Left) */}
                <div className="flex h-full w-full flex-col items-center justify-start sm:items-start">
                    <div className="relative h-full space-y-8 border border-foreground p-4 xl:p-10">
                        <span className="absolute left-4 top-0 -translate-y-1/2 transform bg-white px-2 font-bold lowercase cursor-default">
                            {rightTitle}
                        </span>
                        {rightContent}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DualContainer;
