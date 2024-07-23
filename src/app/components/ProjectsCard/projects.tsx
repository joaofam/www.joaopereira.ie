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

export default function Projects() {
    return (
        <div>
            <Card className="relative flex h-4/5 w-full items-center justify-center py-16">
                <CardContent className="relative z-10 flex items-center justify-center">
                    <h1>Project Showcase</h1>


                    
                </CardContent>
            </Card>
        </div>
    );
}
