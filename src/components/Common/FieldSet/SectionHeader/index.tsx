import Scramble from '@/components/Common/Scramble';
import { SectionHeaderProps } from '@/types/types';

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    count,
    className = '',
}) => (
    <h1 className={className}>
        <div className="flex items-baseline">
            <Scramble>{title}</Scramble>
            <p className="ml-2 text-2xs lg:text-xs xl:text-sm">[{count}]</p>
        </div>
    </h1>
);
