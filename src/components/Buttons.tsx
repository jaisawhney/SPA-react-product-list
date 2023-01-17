import {categoriesUnique} from '../data';

interface props {
    category: string,
    setCategory: (category: string) => void;
}

export default function Buttons({category, setCategory}: props) {
    return (
        <div className={'categoryButtons'}>
            {categoriesUnique.map((name, i) => {
                const isSelected = name === category ? 'selected' : ''
                return (
                    <button className={isSelected} onClick={() => setCategory(name)} key={i}>{name}</button>
                )
            })}
            <button className={category === 'All' ? 'selected' : ''} onClick={() => setCategory('All')}>All</button>
        </div>
    );
}