import style from 'styled-components';
import items from "./items.js"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './colors.css'

function ItemsList(props) {
    const [Items, setItems] = useState(items)
    const [itemName] = [props.filter]
    useEffect(() => {
        const results = items.filter(item=>item.name.toLowerCase().includes(itemName.name.toLowerCase()))
        setItems(results)
    }, [itemName]);

    return (
        <StyledContainer>
            <StyledUl>
                {Items.map((item)=>{
                    return (
                        <Link key = {item.ID} to={`/items/${item.ID}`} style={LinkStyle}>
                            <StyledListItem>
                                <h3 className = {item.rarity.toLowerCase()}>[{item.name}]</h3>
                            </StyledListItem>
                        </Link>
                    )
                })}
            </StyledUl>
        </StyledContainer>
    );
}

export default ItemsList;

const LinkStyle = {
    textDecoration:'none',
    color:'white'
};

const StyledContainer = style.div`
    margin: auto;
    padding: 1% 2%;
    max-width: 1440px;
    border-radius: 5px;
    box-shadow: 0 2px 6px 0 rgba(0,0,0, .3);`

const StyledListItem = style.li`
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 1px;
    width: 49%;
    margin: 2% .35%;
    display: inline-flex;
    justify-content: center;
    background-color: #383e4a;
    box-shadow: 0 2px 4px rgba(0,0,0, .2);
    transition-duration: .25s;
    h3{
        align-self: center;
        font-size:20px;
        font-family: Morpheus;
        margin: 20px 0;
    }
    :hover{
        box-shadow:0 5px 10px rgba(0,0,0,.5);
    }
    @media (max-width: 970px){
        width: 80%
    }
    @media (max-width: 425px){
        width: 100%;
    }`

const StyledUl = style.ul`
    margin: 0;
    padding: 0;
    text-align: center;`