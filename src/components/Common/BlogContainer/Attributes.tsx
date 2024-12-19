import { SolidTag } from '@/components/Blog/Tag/Solid';
import { Legend } from '@/components/Common/FieldSet/Legend';
import { CustomLink } from '@/components/Common/Link';

interface AttributesProps {
    name: string;
    date: string;
    location: string;
    gitLink: string;
    tags: string;
}

const Attributes: React.FC<AttributesProps> = ({ name, date, location, gitLink, tags }) => {
    return (
        <div className="p-8 pt-20 sticky top-0">
            <Legend
                title="Metadata"
                className="cursor-default px-2 font-bold lowercase"
            />
            <div className="grid grid-cols-2 gap-1">
                <div>Name:</div>
                <div>{name}</div>
                <div>Date Created:</div>
                <div>{date}</div>
                <div>Location:</div>
                <div>{location}</div>
                <div>Project Link:</div>
                <div>
                    <CustomLink
                        size='xs'
                        href={gitLink}
                        blank
                        className="capitalize"
                    >
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
        </div>
    );
};

export default Attributes;
