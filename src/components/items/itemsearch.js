import style from 'styled-components';
import { useEffect } from 'react';
import $ from 'jquery';

function ItemSearch(props) {
    const [itemName, setItemName] = [props.filter, props.setFilter]
    const handleChange = (e) => {
        setItemName({...itemName, [e.target.name]: e.target.value})
    }
    const formSubmit = (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        itemName.name.length > 0 ? 
        $("#inpt_search").parent("label").addClass("active") :
        $("#inpt_search").parent("label").removeClass("active");
    }, [itemName.name.length]);
    return (
        <StyledForm onSubmit = {formSubmit}>
            <div>
            <StyledSearch>
                <input
                    id = "inpt_search"
                    type = "text"
                    name = "name"
                    value = {itemName.name}
                    onChange = {handleChange}
                    />
                <input type = "submit" style = {{display:"none"}} />
            </StyledSearch>
            <p>Type the name of the item</p>
            </div>
        </StyledForm>
    );
}

export default ItemSearch;

//Styled components below

const StyledForm = style.form`
    display:table;
    width:100%;
    div{
        display:table-cell;
        text-align:center;
        vertical-align:middle
    }`

const StyledSearch = style.label`
    display: inline-block;
    position: relative;
    height: 35px;
    width: 35px;
    box-sizing: border-box;
    margin: 30px 8px 7px 0px;
    padding: 3px 0 0 0;
    border: 3px solid white;
    border-radius: 25px;
    transition: all 200ms ease;
    cursor: text;
    &:after {
        content: "";
        position: absolute;
        width: 3px;
        height: 20px;
        right: -5px;
        top: 21px;
        background: white;
        border-radius: 3px;
        transform: rotate(-45deg);
        transition: all 200ms ease;
        pointer-events: none;
    }
    &.active,
    &:hover {
        width: 300px;
        margin-right: 0px;
        
        &:after {
            height: 0px;	
        }
    }
    input {
        text-align: center;
        width: 100%;
        border: none;
        box-sizing: border-box;
        font-family: Helvetica;
        font-size: 20px;
        vertical-align:center;
        color: inherit;
        background: transparent;
        outline-width: 0px;
    }`