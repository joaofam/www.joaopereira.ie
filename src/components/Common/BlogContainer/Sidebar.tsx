interface SidebarProps {
    headerLinks: { id: string, text: string }[];
    activeHeader: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ headerLinks, activeHeader }) => {
    return (
        <div className="col-span-2 mt-4">
            <div className="space-y-1">
                {headerLinks.map(link => {
                    let marginLeftClass = '';
                    if (link.id.endsWith('-h2')) {
                        marginLeftClass = 'ml-2';
                    } else if (link.id.endsWith('-h3')) {
                        marginLeftClass = 'ml-4';
                    } else if (link.id.endsWith('-h4')) {
                        marginLeftClass = 'ml-6';
                    }

                    const isActive = activeHeader === link.id;

                    return (
                        <div key={link.id} className={marginLeftClass}>
                            <a
                                href={`#${link.id}`}
                                className={`hover:text-primary  no-underline ${
                                    isActive ? 'text-primary' : ''
                                }`}
                            >
                                [{isActive ? 'x' : ''}] {link.text}
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
