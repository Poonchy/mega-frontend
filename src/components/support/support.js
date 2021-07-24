import style from 'styled-components';
import {Coffee} from 'react-feather'

function Support(props) {

    return (
        <StyledDiv>
            <div>
                <h1>Consider supporting MEGA by rooting for him on these sites!</h1>
                <h2><a className="text-primary" href = "https://top.gg/bot/494205292091801610">Top.gg</a></h2>
                <h2><a className="text-primary" href = "https://discord.bots.gg/bots/494205292091801610">Discord Bots</a></h2>
                <h2><a className="text-primary" href = "https://discordbotlist.com/bots/mega-4951">Discord Bot List</a></h2>
                <StyledH2>If you really, really enjoy MEGA and want to show some appreciation, <StyledAnchor className="text-primary" rel="noreferrer" target="_blank" href="https://ko-fi.com/poonchy">
                    <Coffee width="26" height="26"/>
                      consider supporting me ❤
                </StyledAnchor></StyledH2>
            </div>
        </StyledDiv>
    );
}

export default Support;

const StyledDiv = style.div`
margin-top:20px;
width:100%;
height: calc(100vh - 110px);
display:flex;
flex-wrap:wrap;
text-align: center;
justify-content:center;
align-items:center;
`
const StyledH2 = style.h2`
    flex: None;
    text-align:center;
    display: inline-flex;
    vertical-align: center;
    align-items: center;
    justify-content:space around;
`

const StyledAnchor = style.a`
    flex: None;
    text-align:center;
    display: inline-flex;
    vertical-align: center;
    align-items: center;
    margin-left: 10px;
`