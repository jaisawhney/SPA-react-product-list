import items from '../data';

interface props {
    selectedCategories: string[],
}

export default function Products({selectedCategories}: props) {
    return (
        <div className={'items'}>
            {items
                .filter((item) =>  selectedCategories.includes(item.category) || !selectedCategories.length)
                .map((item, i) => (
                    <div className={'item'} key={i}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                    </div>
                ))}
        </div>
    )
}