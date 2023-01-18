import items, {categoriesWithCounts} from '../data';

interface props {
    selectedCategories: string[],
    setCategory: (category: string[]) => void;
}

export default function Buttons({selectedCategories, setCategory}: props) {
    // Remove or add the category to the array of selected categories
    function selectCategory(name: string) {
        if (selectedCategories.includes(name)) {
            const cat = [...selectedCategories]
            const idx = selectedCategories.indexOf(name);
            cat.splice(idx, 1);
            setCategory(cat);
        } else {
            setCategory([...selectedCategories, name])
        }
    }

    return (
        <div className={'categoryButtons'}>
            {Object.keys(categoriesWithCounts).map((name, i) => {
                const isSelected = selectedCategories.includes(name) ? 'selected' : ''
                return (
                    <button
                        className={isSelected}
                        onClick={() => selectCategory(name)}
                        key={i}>
                        {name} ({categoriesWithCounts[name]})
                    </button>
                )
            })}
            <button
                className={!selectedCategories.length ? 'selected' : ''}
                onClick={() => setCategory([])}>
                All
                ({items.length})
            </button>
        </div>
    );
}