import { Legend } from '@/components/Common/FieldSet/Legend';
import { DualContainerProps } from '@/types/types';

const DualContainer: React.FC<DualContainerProps> = ({
    leftContent,
    rightContent,
    leftTitle = 'About',
    rightTitle = 'Img',
}) => {
    return (
        <div className="flex h-full w-full cursor-default flex-col items-center justify-center font-SpaceMono text-2xs text-foreground sm:text-xs 2xl:text-sm">
            <div className="grid-rows-auto sm:grid-rows-0 grid h-full w-full items-start gap-8 xl:grid-cols-2">
                {/* Left Content Container */}
                <div className="relative flex h-full w-full items-center justify-center border border-foreground">
                    <Legend
                        title={leftTitle}
                        className="cursor-default px-2 font-bold lowercase"
                    />
                    <div className="py-8">{leftContent}</div>
                </div>

                {/* Right Content Container */}
                <div className="flex h-full w-full flex-col items-center justify-start sm:items-start">
                    <div className="relative h-full space-y-8 border border-foreground p-4 xl:p-10">
                        <Legend
                            title={rightTitle}
                            className="cursor-default px-2 font-bold lowercase"
                        />
                        {rightContent}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DualContainer;
