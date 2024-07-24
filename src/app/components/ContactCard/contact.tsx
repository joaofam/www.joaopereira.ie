import Image from 'next/image';

import { CustomLink } from '@/app/components/Link/link';
import { Card, CardContent } from '@/app/components/ui/card';

interface ProfileDetailProps {
    heading: string;
    content: string;
}

interface ContactSectionProps {
    icon: string;
    title: string;
    content: string;
    linkText: string;
    href: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
    icon,
    title,
    content,
    linkText,
    href,
}) => (
    <div className="col-span-1 flex h-full flex-col space-y-4 border-r-1 px-8 py-12">
        <div className="flex w-full flex-col items-start space-y-4">
            <h3>{title}</h3>
            <p className="simple-p">{content}</p>
        </div>
        <div className="flex w-full items-center justify-between">
            <Image src={icon} alt="" width={24} height={24} />
            <div className="flex items-center">
                <CustomLink href={href} iconSrc="/icons/arrow-right.svg">
                    {linkText}
                </CustomLink>
            </div>
        </div>
    </div>
);

const contactSections = [
    {
        icon: '/logos/Contact/Calendly.svg',
        title: 'Schedule a Meeting',
        content:
            'Click the link below to schedule a quick talk on whatever you require',
        linkText: 'Calendly',
        href: '/',
    },
    {
        icon: '/logos/Contact/Github.svg',
        title: 'Check my work',
        content:
            'Click the link below to schedule a quick talk on whatever you require',
        linkText: 'Github',
        href: '/',
    },
    {
        icon: '/logos/Contact/Resend.svg',
        title: 'Contact me here',
        content:
            'Click the link below to schedule a quick talk on whatever you require',
        linkText: 'Email',
        href: '/',
    },
];

export default function Contact() {
    return (
        <Card className="relative w-full">
            <CardContent className="relative z-10">
                <div className="grid grid-cols-3">
                    {contactSections.map(section => (
                        <ContactSection key={section.title} {...section} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
