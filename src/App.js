import ItemSearch from './components/items/itemsearch.js'
import ItemsList from './components/items/itemslist.js'
import Navbar from './components/navbar/navbar.js'
import Commands from './components/commands/commands.js'
import Item from './components/items/item.js'
import { Route } from 'react-router-dom';

function App(props) {
    
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
            <Route exact path="/items/:id">
                <Item />
            </Route>
        </>
    )
}

export default App;
