import items from '../data';

interface props {
    category: string,
}

export default function Products({category}: props) {
    return (
        <div className={'items'}>
            {items
                .filter((item) => item.category === category || category === 'All')
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