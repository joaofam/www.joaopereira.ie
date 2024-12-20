import { SolidTag } from '@/components/Blog/Tag/Solid';
import { CustomLink } from '@/components/Common/Link';
import { MetadataSectionProps } from '@/types/types';

export const MetadataSection: React.FC<MetadataSectionProps> = ({
    name,
    date,
    location,
    gitLink,
    tags,
}) => (
    <div className="grid grid-cols-2 gap-1">
        <div>Name:</div>
        <div>{name}</div>
        <div>Date Created:</div>
        <div>{date}</div>
        <div>Location:</div>
        <div>{location}</div>
        <div>Project Link:</div>
        <div>
            <CustomLink size="xs" href={gitLink} blank className="capitalize">
                Repo
            </CustomLink>
        </div>
        <div>Tags:</div>
        <div className="flex flex-wrap gap-2">
            {tags.split(', ').map((tag, index) => (
                <SolidTag key={index} text={tag} />
            ))}
        </div>
    </div>
);
