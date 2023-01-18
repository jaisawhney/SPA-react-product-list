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

// Intermediate variable
const items: item[] = data;

// All categories
const categories = items.map(item => item.category);

// Array of objects with the category and # of items
const categoriesWithCounts = categories.reduce((acc, cat) => {
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
}, {} as Record<string, number>);

// Array of unique category names
const categoriesUnique = Object.keys(categoriesWithCounts);

// Array of objects with the name and count
const namesAndCount = categoriesUnique.map(name => ({
    name: name,
    count: categoriesWithCounts[name]
}));

export default items;
export {categories, categoriesWithCounts, categoriesUnique, namesAndCount}