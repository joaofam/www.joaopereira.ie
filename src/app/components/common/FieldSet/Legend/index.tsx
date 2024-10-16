import { LegendProps } from '@/types/types';

export const Legend: React.FC<LegendProps> = ({ title, className = '' }) => (
    <span className={`absolute left-4 top-0 -translate-y-1/2 transform cursor-default px-2 font-bold lowercase ${className}`}>
        <span className="relative">
            <span className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent"></span>
            <span className="relative">{title}</span>
        </span>
    </span>
);