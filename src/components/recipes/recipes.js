import style from 'styled-components';
import items from "../items/items.js"
import { Link } from 'react-router-dom';
import { useState } from 'react'

function Recipes(props) {
    const [Items, setItems] = useState([])
    const [reagents, setReagents] = useState([])
    const [filters, setFilters] = useState({class:"", reagent:"?"})

    function handleClass (e) {
        let dropDowns = Array.from(document.querySelectorAll('.active'));
        let className = ""
        dropDowns.forEach(node => {
            node.classList.remove('active');
        });
        if (e.target.tagName === "LI"){
            e.target.classList.add("active")
            setFilters({...filters, class:e.target.children[0].innerHTML.toLowerCase()})
            className = e.target.children[0].innerHTML
        } else{
            e.target.parentElement.classList.add("active")
            setFilters({...filters, class:e.target.innerHTML.toLowerCase()})
            className = e.target.innerHTML
        }
        let itemsWithReagents = items.filter(item => item.class === className.toLowerCase() && item.hasOwnProperty("reagents"))
        let tempRegs = []
        itemsWithReagents.forEach((item)=>{
            let individual = item.reagents.split(",")
            individual.forEach(matandcost=>{
                let split = matandcost.split("-")
                if (split[1] && !tempRegs.includes(split[1].charAt(0).toUpperCase() + split[1].substr(1).toLowerCase())){
                    tempRegs.push(split[1].charAt(0).toUpperCase() + split[1].substr(1).toLowerCase());
                }
            })
        })
        setReagents(tempRegs)
    }
    function handleReagent (e) {
        let dropDowns = Array.from(document.querySelectorAll('.activeReagent'));
        let reagentName = ""
        dropDowns.forEach(node => {
            node.classList.remove('activeReagent');
        });
        if (e.target.tagName === "LI"){
            e.target.classList.add("activeReagent")
            setFilters({...filters, reagent:e.target.children[0].innerHTML.toLowerCase()})
            reagentName = e.target.children[0].innerHTML
        } else{
            e.target.parentElement.classList.add("activeReagent")
            setFilters({...filters, reagent:e.target.innerHTML.toLowerCase()})
            reagentName = e.target.innerHTML
        }
        let itemsWithReagents = items.filter(item => item.class === filters.class.toLowerCase() && item.hasOwnProperty("reagents") && item.reagents.includes(reagentName.toLowerCase()))
        setItems(itemsWithReagents)
    }

    return (
        <>
            <StyledContainer>
                <StyledUl>
                    <StyledListItem onClick = {handleClass}id = "warrior">
                        <h2>Warrior</h2>
                    </StyledListItem>
                    <StyledListItem onClick = {handleClass}id = "mage">
                        <h2>Mage</h2>
                    </StyledListItem>
                    <StyledListItem onClick = {handleClass}id = "rogue">
                        <h2>Rogue</h2>
                    </StyledListItem>
                </StyledUl>
            </StyledContainer>
            <StyledMenuContainer>
                <StyledList>
                {reagents.map((el, i)=>{
                    return (
                        <StyledReagents onClick = {handleReagent} key = {i}><span>{el}</span></StyledReagents>
                    )
                })}
                </StyledList>
                <StyledItemList>
                    {Items.map((el, i)=>{
                        return (
                            <StyledItem key = {i} to = {`/recipes/${el.ID}`}>
                                <li className = {el.rarity.toLowerCase()} ><span>[{el.name}]</span></li>
                            </StyledItem>

                        )
                    })}
                </StyledItemList>
            </StyledMenuContainer>
        </>
    );
}

export default Recipes;

// Class bar
const StyledContainer = style.div`
    margin: auto;
    padding: 1% 2%;
    max-width: 1440px;
    @media (max-width: 970px){
        width:90%;
    }
    @media (max-width: 425px){
        width:80%;
    }
`
const StyledUl = style.ul`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
    color: black;
    .active{
        box-shadow:0 20px 40px rgba(0,0,0,1);
    }
    #rogue{
        background-color: #FFF468;
        :hover{
            background-color: #ede361
        }
    }
    #mage{
        background-color: #3FC7EB;
        :hover{
            background-color: #38b7d9;
        }
    }
    #warrior{
        background-color: #C69B6D;
        :hover{
            background-color: #b58e64;
        }
    }
`
const StyledListItem = style.li`
    font-size: 20px;
    line-height: 30px;
    border-radius: 8px;
    letter-spacing: 1px;
    width: 20%;
    margin: 1% .35%;
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
    :hover, :focus{
        box-shadow:0 20px 40px rgba(0,0,0,1);
    }
    @media (max-width: 970px){
        flex-basis: 80%;
        width: 80%
    }
    @media (max-width: 425px){
        flex-basis: 100%;
        width: 100%;
    }
`

const StyledMenuContainer = style.div`
    margin: auto;
    padding: 1% 2%;
    max-width: 1440px;
    display:flex;
    justify-content:space-between;
    @media (max-width: 970px){
        display:block;
        width:80%;
    }
    @media (max-width: 425px){
        display:block;
        width:80%;
    }
`

// Reagent bar
const StyledList = style.ul`
    list-style-type: none;
    font-family: "Morpheus";
    font-size:20px;
    max-width:30%;
    display:inline;
    padding:0;
    line-height:30px;
    @media (max-width: 970px){
        max-width: initial;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-around
    }
    @media (max-width: 425px){
        width:100%;
    }
`

const StyledReagents = style.li`
    margin: 2% .35%;
    width: 200px;
    text-align: center;
    border-radius:10px;
    padding: 10px;
    margin:20px 0;
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
        background-color: rgb(36,42,54);
    }
    &.activeReagent{
        background-color: rgb(36,42,54);
    }
    @media (max-width: 970px){
        margin:5px 0;
        flex-basis:40%
    }
    @media (max-width: 425px){
        margin:5px 0;
    }
`

// Item bar
const StyledItemList = style.ul`
    list-style-type: none;
    font-family: "Morpheus";
    font-size:20px;
    width:60%;
    padding:0;
    justify-content:space-around;
    display:flex;
    flex-wrap:wrap;
    line-height:30px;
    @media (max-width: 970px){
        width: initial;
        padding:0;
    }
    @media (max-width: 425px){
        width: initial;
        width:100%;
    }
`

const StyledItem = style(Link)`
    height: fit-content;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 1px;
    width: 40%;
    padding: 20px;
    margin: 2% .35%;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    justify-content: center;
    background-color: #383e4a;
    box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
    -webkit-transition-duration: .25s;
    transition-duration: .25s;
    @media (max-width: 970px){
        width: 1;
    }
    @media (max-width: 425px){
        width:-webkit-fill-available;
    }
    `