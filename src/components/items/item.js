import run from './draw.js'
import React, {useEffect} from 'react';
import style from 'styled-components'
import {useParams} from 'react-router-dom'
import items from './items.js'
function Item() {
    const id = useParams()
    const item = items.find(item => item.ID === id.id)
    useEffect (()=>{
        if (item){
            run(item)
        }
    })
    if (item){
        return (
            <StyledDiv id = "canContainer">
                <div id = "loading" style = {{fontSize:"40px", fontFamily:"Morpheus"}}>Loading...</div>
            </StyledDiv>
        );
    } else {
        return (
            <StyledDiv>
                <h2>404. No item found 😥</h2>
            </StyledDiv>
        )
    }
    
}

export default Item;

const StyledDiv = style.div`
margin-top:20px;
width:100%;
height: calc(100vh - 110px);
display:flex;
justify-content:center;
align-items:center;`
