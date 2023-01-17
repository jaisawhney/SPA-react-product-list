import data from './data.json';

interface item {
    id: number,
    name: string,
    category: string,
    description: string,
    price: string,
    rating: number,
    units: number
}

const items: item[] = data;
const categories = items.map(item => item.category);

const categoriesWithCounts = categories.reduce((acc, cat) => {
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
}, {} as Record<string, number>);

const categoriesUnique = Object.keys(categoriesWithCounts);

const namesAndCount = categoriesUnique.map(name => ({
    name: name,
    count: categoriesWithCounts[name]
}));

export default items;
export {categories, categoriesWithCounts, categoriesUnique, namesAndCount}