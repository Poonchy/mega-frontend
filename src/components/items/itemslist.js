import style from 'styled-components';
import { useState } from 'react';
import data from "./mockdata.js"
import { Link } from 'react-router-dom';

function ItemsList(props) {
    const [items] = useState(data)
    return (
        <StyledContainer>
            <StyledUl>
                {items.map((item)=>{
                    return (
                        <Link key = {item.id} to={`/items/${item.id}`} style={LinkStyle}>
                            <StyledListItem>
                                <h3>{item.name}</h3>
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
    min-width: 24%;
    margin: 2% .35%;
    display: inline-flex;
    justify-content:center;
    background-color: #383e4a;
    box-shadow: 0 2px 4px rgba(0,0,0, .2);
    transition-duration: .25s;
    :hover{
        box-shadow:0 5px 10px rgba(0,0,0,.5);
    }
    @media (max-width: 970px){
        width: 180px;
    }
    @media (max-width: 425px){
        width: 100%;
    }`

const StyledUl = style.ul`
    margin: 0;
    padding: 0;
    text-align: center;`