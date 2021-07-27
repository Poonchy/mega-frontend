import style from 'styled-components'
import Axios from 'axios'
import {useState, useEffect} from 'react'

function Patches(props) {
    const [hotfixes, setHotfixes] = useState([])
    const [patches, setPatches] = useState([])
    const [display, setDisplay] = useState({active:"Patches"})
    useEffect(()=>{
        Axios.get('https://raw.githubusercontent.com/Poonchy/MEGA/main/README.MD')
        .then(res=>{
            let tempHotfixed = res.data.split("Hotfix")
            let hfHolder = []
            for (let x of tempHotfixed){
                hfHolder.push(x.split("Patch")[0])
            }
            setHotfixes(hfHolder)
            let tempPatches = res.data.split("Patch")
            let ptHolder = []
            for (let x of tempPatches){
                ptHolder.push(x.split("Hotfix")[0])
            }
            setPatches(ptHolder)
        })
    },[])
    function switchActive (e) {
        let dropDowns = Array.from(document.querySelectorAll('.activeReagent'));
        dropDowns.forEach(node => {
            node.classList.remove('activeReagent');
        });
        if (e.target.tagName === "H1"){
            e.target.classList.add("activeReagent")
        }
        setDisplay({active:e.target.innerHTML})
    }
    return (
        <>
        <StyledContainer>
            <StyledCols>
                <h1>Patches</h1>
                {patches.map((el)=>{
                    let i = 0
                    if (el !== ""){
                        return(<StyledUL key = {i}>
                            {el.split("\n").map((x)=>{
                                if (x !== ""){
                                    if (i === 0){
                                        i+= 1
                                        return(<h2 key = {i}>Patch {x}</h2>)
                                    } else {
                                        i+= 1
                                        return(<StyledLI key = {i}>{x.split("- ")[1]}</StyledLI>)
                                    }
                                } else {
                                    return x
                                }
                            })}
                        </StyledUL>)
                    } else {
                        return el
                    }
                })}
            </StyledCols>
            <StyledCols>
                <h1>Hotfixes</h1>
                {hotfixes.map((el)=>{
                    let i = 0
                    if (el !== ""){
                        return(<StyledUL key = {i}>
                            {el.split("\n").map((x)=>{
                                if (x !== ""){
                                    if (i === 0){
                                        i+= 1
                                        return(<h2 key = {i}>Hotfix {x}</h2>)
                                    } else {
                                        i+= 1
                                        return(<StyledLI key = {i}>{x.split("- ")[1]}</StyledLI>)
                                    }
                                }
                                else{
                                    return x
                                }
                            })}
                        </StyledUL>)
                    } else {
                        return el
                    }
                    
                })}
            </StyledCols>
        </StyledContainer>
        <StyledContainerMobile>
            <StyledDivMobile>
                <h1 key = "1" className = "activeReagent" onClick={switchActive}>Patches</h1>
                <h1 key = "2" onClick={switchActive}>Hotfixes</h1>
            </StyledDivMobile>
            <div>
                {display.active === "Patches" &&
                patches.map((el)=>{
                    let i = 0
                    if (el !== ""){
                        return(<StyledUL key = {i}>
                            {el.split("\n").map((x)=>{
                                if (x !== ""){
                                    if (i === 0){
                                        i+= 1
                                        return(<h2 key = {i}>Patch {x}</h2>)
                                    } else {
                                        i+= 1
                                        return(<StyledLI key = {i}>{x.split("- ")[1]}</StyledLI>)
                                    }
                                } else {
                                    return x
                                }
                            })}
                        </StyledUL>)
                    } else {
                        return el
                    }
                })}
                {display.active === "Hotfixes" &&
                hotfixes.map((el)=>{
                    let i = 0
                    if (el !== ""){
                        return(<StyledUL key = {i}>
                            {el.split("\n").map((x)=>{
                                if (x !== ""){
                                    if (i === 0){
                                        i+= 1
                                        return(<h2 key = {i}>Hotfix {x}</h2>)
                                    } else {
                                        i+= 1
                                        return(<StyledLI key = {i}>{x.split("- ")[1]}</StyledLI>)
                                    }
                                }
                                else{
                                    return x
                                }
                            })}
                        </StyledUL>)
                    } else {
                        return el
                    }
                    
                })}
            </div>
        </StyledContainerMobile>
        </>
    );
}

export default Patches;

const StyledContainer = style.div`
    @media (max-width: 768px) {
        display: none;
    }
    @media (min-width: 769px) {
        display: flex;
    }
    Display:flex;
    width:90%;
    justify-content: space-around;
    margin:0 5%;
`
const StyledCols = style.div`
    flex-basis:40%;
    h1{
        text-align: center;
    }
    width:40%;
    display: inline;
`

const StyledLI = style.li`
    list-style-type:"- ";
`

const StyledContainerMobile = style.div`
    flex-basis: 95%;
    width:95%;
    margin: 0 2.5%;
    @media (max-width: 768px) {
        display:block;
    }
    @media (min-width: 769px) {
        display: none;
    }
`
const StyledDivMobile = style.div`
    display: flex;
    justify-content: space-around;
    h1 {
        text-align: center;
        border-radius:10px;
        padding: 10px;
        margin:20px 0;
        background-color: #383e4a;
        box-shadow: 0 2px 4px rgba(0,0,0, .2);
        transition-duration: .25s;
        :hover{
            box-shadow:0 5px 10px rgba(0,0,0,.5);
            background-color: rgb(36,42,54);
        }
        &.activeReagent{
            background-color: rgb(36,42,54);
        }
    }
`

const StyledUL = style.ul`
    background-color: #383e4a;
    box-shadow: 0 2px 4px rgba(0,0,0, .2);
    transition-duration: .25s;
    padding:10px 15px 35px 25px;
`
