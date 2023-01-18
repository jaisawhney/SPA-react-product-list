import items, {categoriesWithCounts} from '../data';

interface props {
    category: string,
    setCategory: (category: string) => void;
}

export default function Buttons({category, setCategory}: props) {
    return (
        <div className={'categoryButtons'}>
            {Object.keys(categoriesWithCounts).map((name, i) => {
                const isSelected = name === category ? 'selected' : ''
                return (
                    <button className={isSelected} onClick={() => setCategory(name)}
                            key={i}>{name} ({categoriesWithCounts[name]})</button>
                )
            })}
            <button className={category === 'All' ? 'selected' : ''} onClick={() => setCategory('All')}>All
                ({items.length})
            </button>
        </div>
    );
}