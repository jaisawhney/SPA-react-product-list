import {categoriesUnique} from '../data';

export default function Buttons({category, setCategory}) {
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