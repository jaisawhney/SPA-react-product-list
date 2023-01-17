import {useState} from 'react'
import './App.css';
import Buttons from './components/Buttons';
import Products from './components/Products';


function App() {
    const [category, setCategory] = useState('All')

    return (
        <main>
            <h1>Some store name</h1>
            <Buttons category={category} setCategory={setCategory}/>
            <Products category={category}/>
        </main>
    );
}

export default App;
