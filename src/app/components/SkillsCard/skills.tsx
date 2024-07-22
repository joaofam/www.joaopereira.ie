import { Card, CardContent } from '@/app/components/ui/card';

const areasOfInterest = [
    'Full Stack',
    'Backend',
    'Frontend',
    'Devops',
    'Design',
];

const frontendStack = [
    'NextJS',
    'React',
    'Figma',
    'TypeScript',
    'JavaScript',
    'Tailwind',
    'Framer Motion',
    'GSAP',
    'SCSS',
];

const backendStack = [
    'Python',
    'Java',
    'NodeJS',
    'GoLang',
    'Express',
    'Flask',
    'GraphQL',
    'REST',
    'SQL',
];

const toolsStack = [
    'Linux',
    'Git',
    'AWS',
    'PTC',
    'Docker',
    'Jenkins',
    'JIRA',
    'Azure',
    'Linear',
];

const certifications = [
    'PTC ThingWorx Associate',
    'PTC ThingWorx Models',
    'PTC ThingWorx Mashups',
    'PTC Kepware Associate',
];

export default function Skills() {
    return (
        <div>
            <Card className="relative flex h-full items-center justify-between px-12 py-8">
                <h1 className="text-left">Stack</h1>{' '}
                <div>
                    <p className="simple-p-heading text-left">
                        Areas of interst
                    </p>
                    <div className="flex space-x-5">
                        {areasOfInterest.map((area, index) => (
                            <p key={index} className="simple-p">
                                {area}
                            </p>
                        ))}
                    </div>
                </div>
            </Card>
            <Card className="relative flex h-4/5 w-full items-center justify-center py-16">
                <CardContent className="relative z-10">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="flex h-full flex-col px-4">
                            <p className="simple-p-heading text-left">
                                Front End
                            </p>
                            {frontendStack.map((frontendItem, index) => (
                                <p key={index} className="simple-p text">
                                    {frontendItem}
                                </p>
                            ))}
                        </div>
                        <div className="flex h-full flex-col px-4">
                            <p className="simple-p-heading text-left">
                                Back End
                            </p>
                            {backendStack.map((backendItem, index) => (
                                <p key={index} className="simple-p text">
                                    {backendItem}
                                </p>
                            ))}
                        </div>
                        <div className="flex h-full flex-col px-4">
                            <p className="simple-p-heading text-left">Tools</p>
                            {toolsStack.map((toolsItem, index) => (
                                <p key={index} className="simple-p text">
                                    {toolsItem}
                                </p>
                            ))}
                        </div>
                        <div className="flex h-full flex-col px-4">
                            <p className="simple-p-heading text-left">
                                Certifications
                            </p>
                            {certifications.map((certification, index) => (
                                <p key={index} className="simple-p text">
                                    {certification}
                                </p>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className="relative flex h-full w-full items-center h-32">
                <div className="w-full h-full grid grid-cols-12 grid-rows-2 border-backgrund">
                    <div className="border-1 border-backgrund p-1">1</div>
                    <div className="border-1 border-backgrund p-1">2</div>
                    <div className="border-1 border-backgrund p-1">3</div>
                    <div className="border-1 border-backgrund p-1">4</div>
                    <div className="border-1 border-backgrund p-1">5</div>
                    <div className="border-1 border-backgrund p-1">1</div>
                    <div className="border-1 border-backgrund p-1">2</div>
                    <div className="border-1 border-backgrund p-1">3</div>
                    <div className="border-1 border-backgrund p-1">4</div>
                    <div className="border-1 border-backgrund p-1">5</div>
                    <div className="border-1 border-backgrund p-1">1</div>
                    <div className="border-1 border-backgrund p-1">2</div>
                    <div className="border-1 border-backgrund p-1">3</div>
                    <div className="border-1 border-backgrund p-1">4</div>
                    <div className="border-1 border-backgrund p-1">5</div>
                    <div className="border-1 border-backgrund p-1">1</div>
                    <div className="border-1 border-backgrund p-1">2</div>
                    <div className="border-1 border-backgrund p-1">3</div>
                    <div className="border-1 border-backgrund p-1">4</div>
                    <div className="border-1 border-backgrund p-1">5</div>
                    <div className="border-1 border-backgrund p-1">1</div>
                    <div className="border-1 border-backgrund p-1">2</div>
                    <div className="border-1 border-backgrund p-1">3</div>
                    <div className="border-1 border-backgrund p-1">4</div>
                </div>
            </Card>
        </div>
    );
}
