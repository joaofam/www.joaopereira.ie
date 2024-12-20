import { HeaderNavigation } from '@/components/Common/BlogContainer/HeaderNav';
import { MetadataSection } from '@/components/Common/BlogContainer/Metadata';
import { Legend } from '@/components/Common/FieldSet/Legend';
import { SidebarProps } from '@/types/types';

export const Sidebar: React.FC<SidebarProps> = ({
    name,
    date,
    location,
    gitLink,
    tags,
    headerLinks,
    activeHeaders,
}) => (
    <div className="relative hidden h-full w-full items-start justify-center border border-foreground xl:flex">
        <Legend
            title="Metadata"
            className="cursor-default px-2 font-bold lowercase"
        />
        <div className="sticky top-0 p-8 pt-20">
            <MetadataSection
                name={name}
                date={date}
                location={location}
                gitLink={gitLink}
                tags={tags}
            />

            {/* Divider */}
            <div className="mt-4 border-t border-accent" />

            {/* Header Navigation */}
            <div className="mt-4">
                <HeaderNavigation
                    headerLinks={headerLinks}
                    activeHeaders={activeHeaders}
                />
            </div>
        </div>
    </div>
);
