import { BlogItemType } from '@/types/types';

const filterBlogItems = (items: BlogItemType[], activeFilters: string[], searchTerm: string) => {
    return items.filter(item => {
        const matchesFilter =
            activeFilters.includes('All') ||
            item.tags?.some(tag => activeFilters.includes(tag));
        const matchesSearch =
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags?.some(tag =>
                tag.toLowerCase().includes(searchTerm.toLowerCase())
            );
        return matchesFilter && matchesSearch;
    });
};

export default filterBlogItems;