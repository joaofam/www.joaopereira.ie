import { HeaderNavigationProps } from '@/types/types';

export const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
    headerLinks,
    activeHeaders,
}) => {
    const getMarginClass = (id: string) => {
        if (id.endsWith('-h2')) return 'ml-2';
        if (id.endsWith('-h3')) return 'ml-4';
        if (id.endsWith('-h4')) return 'ml-6';
        return '';
    };

    return (
        <div className="space-y-1  sticky top-0">
            {headerLinks.map(link => (
                <div key={link.id} className={getMarginClass(link.id)}>
                    <a
                        href={`#${link.id}`}
                        className={`no-underline hover:text-primary ${
                            activeHeaders.includes(link.id)
                                ? 'text-primary'
                                : ''
                        }`}
                    >
                        [{activeHeaders.includes(link.id) ? 'x' : ''}]{' '}
                        {link.text}
                    </a>
                </div>
            ))}
        </div>
    );
};
