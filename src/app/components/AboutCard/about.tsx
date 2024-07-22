import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';

interface ProfileDetailProps {
    heading: string;
    content: string;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({ heading, content }) => (
    <div className="flex items-center space-x-2">
        <p className="simple-p-heading">{heading}</p>
        <p className="simple-p">{content}</p>
    </div>
);

const LifeAdventurerParagraph =
    'Hi, hello, good afternoon, welcome to my portfolio where I showcase what I am worth within the tech world. I use this as a personal archive to demonstrate my progress and highlights';

const TechGoerParagraph =
    'Hi, hello, good afternoon, welcome to my portfolio where I showcase what I am worth within the tech world. I use this as a personal archive to demonstrate my progress and highlights';

export default function About() {
    return (
        <Card className="relative h-4/5 w-full px-12 py-48 flex items-center justify-center">
            <CardContent className="relative z-10">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex h-full flex-col justify-center px-4">
                        <h2 className="mb-8">Life Adventurer</h2>
                        <p className="simple-p-heading text-left">Something Personal</p>
                        <p className="simple-p indent-40">{LifeAdventurerParagraph}</p>
                    </div>
                    <div className="flex h-full flex-col justify-center px-4">
                        <h2 className="mb-8">Tech Goer</h2>
                        <p className="simple-p-heading text-left">Something Industrial</p>
                        <p className="simple-p-heading text-left">{" "}</p>
                        <p className="simple-p indent-40">{TechGoerParagraph}</p>
                    </div>
                </div>
            </CardContent>
            <div className="absolute left-1/3 top-0 h-full w-px bg-secondary"></div>
            <div className="absolute left-2/3 top-0 h-full w-px bg-secondary"></div>
        </Card>
    );
}
