import run from './draw.js'
import React, {useEffect} from 'react';
import style from 'styled-components'
import {useParams} from 'react-router-dom'
import items from './items.js'
function Item() {
    const id = useParams()
    const item = items.find(item => item.ID === id.id)
    console.log(item)
    useEffect (()=>{
        run(item)
    },[])
    return (
        <StyledDiv id = "canContainer">
            <div style = {{fontFamily:"Morpheus", fontSize:".1px"}} >.</div>
        </StyledDiv>
    );
}

export default Item;

const StyledDiv = style.div`
margin-top:20px;
width:100%;
height: calc(100vh - 110px);
display:flex;
justify-content:center;
align-items:center;`
