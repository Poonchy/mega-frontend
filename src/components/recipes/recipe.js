import style from 'styled-components';
import items from "../items/items.js";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
    const [reagents, setReagents] = useState([])
    const id = useParams()
    const item = items.find(item => item.ID === id.id && item.hasOwnProperty("reagents"))
    useEffect(()=>{
        if (item){
            let itemSplit = item.reagents.split(",")
            let finalArr = []
            itemSplit.forEach((el)=>{
                if (el.length > 1){
                    let split = el.split("-")
                    if (item.class === "warrior"){
                        split[1] = split[1].charAt(0).toUpperCase() + split[1].substr(1).toLowerCase() + " ore"
                    } else if (item.class === "mage"){
                        split[1] = split[1].charAt(0).toUpperCase() + split[1].substr(1).toLowerCase() + " cloth"
                    } else if (item.class === "rogue"){
                        split[1] = split[1].charAt(0).toUpperCase() + split[1].substr(1).toLowerCase() + " leather"
                    }
                    finalArr.push({reagent:split[1], cost:split[0]})
                }
            })
            setReagents(finalArr)
        }
    }, [item])
    if (item){
        return (
            <StyledDiv id = "canContainer">
                <div>
                    <h2 className = {`${item.rarity.toLowerCase()}`}>[{item.name}]</h2>
                    <h3>Cost:</h3>
                    {reagents.map((el)=>{
                        return(
                            <p>{el.reagent}: {el.cost}</p>
                        )
                    })}
                </div>
            </StyledDiv>
        );
    } else {
        return (
            <StyledDiv>
                <h2>404. No craftable item found 😥</h2>
            </StyledDiv>
        )
    }
}

export default Recipe;

const StyledDiv = style.div`
    margin-top:20px;
    width:100%;
    height: calc(100vh - 110px);
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: Morpheus;
    font-size:26px;
    flex-wrap:wrap;
    *{
        flex-basis:100%;
        text-align: center;
    }
    div h2, div p, div h3 {
        margin: 5px 0;
    }
`
