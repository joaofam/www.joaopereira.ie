import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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

const AboutParagraph =
    'Hi, hello, good afternoon, welcome to my portfolio where I showcase what I am worth within the tech world. I use this as a personal archive to demonstrate my progress and highlights';

export default function Landing() {
    return (
        <Card className="h-2/4 w-full py-12">
            <CardContent>
                <div className="grid grid-cols-3 gap-4">
                    {/* Column 1 */}
                    <div className="col-span-1 flex h-full items-center justify-center">
                        <Image
                            src="/profile.svg"
                            alt="Picture of me"
                            width={210}
                            height={400}
                        />
                    </div>
                    {/* Column 2 */}
                    <div className="col-span-1 flex h-full flex-col justify-between">
                        <p className="simple-p">{AboutParagraph}</p>
                        <div className="mt-auto">
                            <Button variant="outline">My Work</Button>
                        </div>
                    </div>
                    {/* Column 3 */}
                    <div className="col-span-1 flex h-full flex-col">
                        <ProfileDetail
                            heading="Name"
                            content="Joao Maria Baeta Pereira"
                        />
                        <ProfileDetail
                            heading="Job"
                            content="Software Developer"
                        />
                        <ProfileDetail
                            heading="Location"
                            content="Dublin, Ireland"
                        />
                        <ProfileDetail heading="Certified" content="Cool guy" />
                        <div className="flex-grow"></div>
                        <div className="mt-auto">
                            <Button variant="outline">More of me</Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
