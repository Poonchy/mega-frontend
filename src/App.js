import ItemSearch from './components/items/itemsearch.js'
import ItemsList from './components/items/itemslist.js'
import Navbar from './components/navbar/navbar.js'
import Commands from './components/commands/commands.js'
import { Route } from 'react-router-dom';

function App() {
    return(
        <>
            <Navbar />
            <Route exact path="/items">
                <ItemSearch />
                <ItemsList />
            </Route>
            <Route exact path="/commands">
                <Commands />
            </Route>
        </>
    )
}

export default App;
