import ItemSearch from './components/items/itemsearch.js';
import ItemsList from './components/items/itemslist.js';
import Navbar from './components/navbar/navbar.js';
import Commands from './components/commands/commands.js';
import Item from './components/items/item.js';
import { Route } from 'react-router-dom';
import { useState } from 'react'


function App(props) {
    const [filter, setFilter] = useState({name:""})
    
    return(
        <>
            <Navbar />
            <Route exact path="/items">
                <ItemSearch filter={filter} setFilter = {setFilter}/>
                <ItemsList filter={filter} setFilter = {setFilter}/>
            </Route>
            <Route exact path="/commands">
                <Commands />
            </Route>
            <Route exact path="/items/:id">
                <Item />
            </Route>
            <Route exact path="/recipes">
                <Item />
            </Route>
        </>
    )
}

export default App;
