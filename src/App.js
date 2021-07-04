import './App.css';
import ItemSearch from './components/items/itemsearch.js'
import ItemsList from './components/items/itemslist.js'
import { Route } from 'react-router-dom';

function App() {
    return(
        <>
            <Route exact path="/items">
                <ItemSearch />
                <ItemsList />
            </Route>
        </>
    )
}

export default App;
