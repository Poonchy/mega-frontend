import style from 'styled-components';

function Intro(props) {
    return (
        <StyledDiv>
            <StyledTitle>MEGA</StyledTitle>
            <StyledDesc>Join the adventure today!</StyledDesc>
            <StyledInvite target = "_blank" href = "https://discord.com/api/oauth2/authorize?client_id=494205292091801610&permissions=305216&scope=bot">INVITE MEGA</StyledInvite>
        </StyledDiv>
    )
}

export default Intro

const StyledDiv = style.div`
    text-align: center;
    margin: calc(50vh - 211px) 0;
    *{
        margin:0;
    }
`
const StyledTitle = style.h1`
    
    color: #00e5ff;
    font-size: 92px;
    line-height: 98px;
    text-transform: uppercase;
`
const StyledDesc = style.p`
    font-size: 24px;
    letter-spacing: .5px;
`
const StyledInvite = style.a`
    text-decoration: none;
    display: inline-block;
    font-size: 30px;
    width:230px;
    padding: 10px 20px;
    margin-top:20px;
    border:2px solid gray;
    border-radius: 80px;
    color: white;
    font-family: Morpheus;
    transition:
        border .3s,
        background-color .3s,
        color .3s,
        width .3s .3s;
    &:hover{
        transition:
            width .3s,
            color .3s .25s,
            background-color .3s .25s,
            border .3s .25s;
        width:300px;
        color:#00e5ff;
        background-color:black;
        border:10px solid white;
    }
`