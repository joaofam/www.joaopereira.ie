import Image from 'next/image';

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

export default function About() {
    return (
        <Card className="relative h-4/5 w-full py-12 px-12">
        {/* Position DotPattern absolutely to sit behind all content */}
            <CardContent className="relative z-10">
                <div className="grid grid-rows-2 grid-cols-2 gap-4">
                    {/* Adjusted to start from row 2 */}
                    <div className="col-span-1 flex h-full flex-col justify-between ">
                        <p className="simple-p-heading text-right">title</p>
                        <h1 className="mb-8">Life Adventurer</h1>
                        <p className="simple-p w-2/3">{LifeAdventurerParagraph}</p>
                    </div>
                    {/* Adjusted to start from row 4, with mt-auto on the first element to push content down */}
                    <div className="col-span-1 flex h-full flex-col col-start-2 mt-24">
                        <p className="simple-p-heading text-left mt-auto">title</p>
                        <h1 className="mb-8">Tech Goer</h1>
                        <p className="simple-p w-2/3">{LifeAdventurerParagraph}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
