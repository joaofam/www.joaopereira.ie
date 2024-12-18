import { link } from 'fs';

export const BLOG_FILTERS = [
    'All',
    'Project',
    'Tutorials',
    'Reviews',
    'Web Dev',
    'IoT',
    'Server',
    'Guide',
];

export const BLOG_ITEMS = [
    {
        title: 'Bulbaserver',
        date: '17.12.24',
        tags: ['Guide', 'Server'],
        description:
            'This project sets up a self-hosted server using Traefik and Docker Compose on an old server to run media, storage, and other services. Traefik manages reverse proxying, while Docker Compose orchestrates containers for service management. The setup offers full control over data, providing a private, yet easy to configure infrastructure.',
        link: '/blog/bulbaserver',
    },
    {
        title: 'Fileflo',
        date: '17.12.24',
        tags: ['Project', 'Web Dev'],
        description:
            'Fileflo is a secure, decentralised file-sharing platform that uses IPFS for peer-to-peer sharing and the Ethereum blockchain for immutable file metadata. It ensures privacy with advanced encryption and offers an intuitive interface for seamless file sharing and collaboration.',
        link: '/blog/fileflo',
    },
    {
        title: 'Venato',
        date: '17.12.24',
        tags: ['Project', 'Web Dev', 'IoT'],
        description:
            'Venato is a GPS tracking app for cyclists that helps prevent bike theft by providing real-time location tracking. Users can create personalized accounts, view their bike’s location on a map, and access features like settings and help for enhanced security and peace of mind.',
        link: '/blog/venato',
    },
];

export const TEXT_TO_CLASS_MAP: { [key: string]: string } = {
    All: 'text-foreground bg-primary',
    Project: 'text-foreground bg-[#21F38A]',
    Tutorials: 'text-foreground bg-[#F3A221]',
    Reviews: 'text-foreground bg-[#F321EF]',
    'Web Dev': 'text-foreground bg-[#F32125]',
    IoT: 'text-foreground bg-[#21E5F3]',
    Server: 'text-foreground bg-[#33F321]',
    Guide: 'text-foreground bg-[#F35921]',
};
