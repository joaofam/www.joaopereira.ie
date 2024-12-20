import { Legend } from '@/components/Common/FieldSet/Legend';
import { RightContentProps } from '@/types/types';

export const RightContent: React.FC<RightContentProps> = ({ rightContent }) => (
    <div className="flex h-full w-full max-w-full flex-col items-center justify-start sm:items-start">
        <div className="relative h-full w-full space-y-8 border border-foreground p-4 xl:p-10">
            <Legend
                title="Content"
                className="cursor-default px-2 font-bold lowercase"
            />
            {rightContent}
        </div>
    </div>
);
