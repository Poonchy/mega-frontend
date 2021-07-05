import style from 'styled-components';
import data from './commanddata.js';

function Commands() {
    return (
        <StyledContainer>
            <h2>Commands</h2>
            <StyledUl className="responsive-table">
                <li className="table-header">
                    <div className="col col-1">Command</div>
                    <div className="col col-2">Description</div>
                </li>
                {data.map((com)=>{
                    return (
                        <li key = {com.command} className="table-row">
                            <div data-label = "Command" className="col col-1">{com.command}</div>
                            <div data-label = "Description" className="col col-2">{com.description}</div>
                        </li>
                    )
                })}
            </StyledUl>
        </StyledContainer>
    );
}

export default Commands;

const StyledContainer = style.div`
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
    h2{
        text-align:center;
    }
`

const StyledUl = style.ul`
    padding: 0;
    li {
        border-radius: 3px;
        padding: 25px 30px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
        
        @media all and (max-width: 767px) {
            display:block;
        }
    }
    .table-header {
        box-shadow: 0 5px 10px rgb(0 0 0 / 50%);
        background-color: rgb(36, 42, 54);
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        @media all and (max-width: 767px) {
            display:none;
        }
    }
    .table-row {
        box-shadow: 0 5px 10px rgb(0 0 0 / 50%);
        background-color: rgb(56, 62, 74);
    }
    .col-1 {
        flex-basis: 14%;
    }
    .col-2 {
        flex-basis: 70%;
    }
    @media all and (max-width: 767px) {
        .col {
            flex-basis:100%;
            text-align: left;
            padding: 10px 0;
            justify-content:start;
            &:before {
                color: #6C7A89;
                padding-right: 10px;
                content: attr(data-label);
                flex-basis: 50%;
                text-align: right;
            }
        }
    }
`