import { FieldSetProps } from '@/types/types';

export const FieldSet: React.FC<FieldSetProps> = ({
    children,
    className = '',
}) => <div className={`relative border ${className}`}>{children}</div>;
