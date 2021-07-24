import ItemSearch from './components/items/itemsearch.js';
import ItemsList from './components/items/itemslist.js';
import Navbar from './components/navbar/navbar.js';
import Commands from './components/commands/commands.js';
import Item from './components/items/item.js';
import Recipes from './components/recipes/recipes.js'
import Recipe from './components/recipes/recipe.js'
import Intro from './components/intro/intro.js'
import Support from './components/support/support.js'
import { Route } from 'react-router-dom';
import { useState } from 'react'


function App(props) {
    const [filter, setFilter] = useState({name:""})
    
    return(
        <>
            <Navbar />
            <Route exact path="/">
                <Intro />
            </Route>
            <Route exact path="/items">
                <ItemSearch filter={filter} setFilter = {setFilter}/>
                <ItemsList filter={filter}/>
            </Route>
            <Route exact path="/commands">
                <Commands />
            </Route>
            <Route exact path="/items/:id">
                <Item />
            </Route>
            <Route exact path="/recipes">
                <Recipes />
            </Route>
            <Route exact path="/recipes/:id">
                <Recipe />
            </Route>
            <Route exact path="/support">
                <Support />
            </Route>
            <Route path="/*">
                <Intro />
            </Route>
        </>
    )
}

export default App;
