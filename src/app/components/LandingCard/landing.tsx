import Image from 'next/image';

import DotPattern from '@/app/components/magicui/dot-pattern';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { cn } from '@/lib/utils';

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
        <Card className="relative w-full ">
            {/* <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                dotColor="#565656"
                className={cn(
                    'z-0 [mask-image:linear-gradient(to_top_left,red,transparent,transparent)]'
                )}
            /> */}
            
            <CardContent className="relative z-10">
                <div className="grid grid-cols-3 gap-4">
                    {/* Column 1 */}
                    <div className="grayscale col-span-1 flex h-full items-center justify-center border-r-1 py-12">
                        <Image
                            src="/profile.svg"
                            alt="Picture of me"
                            width={210}
                            height={400}
                        />
                    </div>
                    {/* Column 2 */}
                    <div className="col-span-1 flex h-full flex-col justify-between border-r-1 py-8 px-4">
                        <p className="simple-p">{AboutParagraph}</p>
                        <div className="mt-auto">
                            <Button variant="outline">My Work</Button>
                        </div>
                    </div>
                    {/* Column 3 */}
                    <div className="col-span-1 flex h-full flex-col py-8 px-4">
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
            {/* <div className="absolute top-1/2 left-1/3 h-px w-2/3 bg-secondary"></div> */}
        </Card>
    );
}
