import items from './data.json';

// All the categories
const categories = items.map(item => item.category);

// Categories with item count
const categoriesWithCounts = categories.reduce((acc, cat) => {
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
}, {});

// Array of categories (ignoring duplicates)
const categoriesUnique = Object.keys(categoriesWithCounts);

// Array of objects with the category name and count
const namesAndCount = categoriesUnique.map(name => ({
    name: name,
    count: categoriesWithCounts[name]
}));

export default items;
export {categories, categoriesWithCounts, categoriesUnique, namesAndCount}