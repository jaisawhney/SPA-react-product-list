import {useState} from 'react'
import './App.css';
import Buttons from './components/Buttons';
import Products from './components/Products';


function App() {
    // Array used for multi-category selection
    const [selectedCategories, setSelectedCategories] = useState<string[] | []>([])

    return (
        <main>
            <h1>Some store name</h1>
            <Buttons selectedCategories={selectedCategories} setCategory={setSelectedCategories}/>
            <Products selectedCategories={selectedCategories}/>
        </main>
    );
}

export default App;