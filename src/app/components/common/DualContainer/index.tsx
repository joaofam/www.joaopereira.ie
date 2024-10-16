import { DualContainerProps } from '@/types/types';

const DualContainer: React.FC<DualContainerProps> = ({
    leftContent,
    rightContent,
    leftTitle = 'About',
    rightTitle = 'Img',
}) => {
    return (
        <div className="flex h-full w-full cursor-default flex-col items-center justify-center font-SpaceMono text-2xs text-foreground sm:text-xs 2xl:text-sm">
            <div className="grid h-full w-full items-start gap-8 grid-rows-auto sm:grid-rows-0 xl:grid-cols-2">
                {/* Left Content Container */}
                <div className="relative flex h-full w-full items-center justify-center border border-foreground">
                    <span className="absolute left-4 top-0 -translate-y-1/2 transform cursor-default px-2 font-bold lowercase 2xl:text-sm">
                        <span className="relative">
                            <span className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent"></span>
                            <span className="relative">{leftTitle}</span>
                        </span>
                    </span>
                    {leftContent}
                </div>

                {/* Right Content Container */}
                <div className="flex h-full w-full flex-col items-center justify-start sm:items-start">
                    <div className="relative h-full space-y-8 border border-foreground p-4 xl:p-10">
                        <span className="absolute left-4 top-0 -translate-y-1/2 transform cursor-default px-2 font-bold lowercase">
                            <span className="relative">
                                <span className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent"></span>
                                <span className="relative">{rightTitle}</span>
                            </span>
                        </span>
                        {rightContent}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DualContainer;