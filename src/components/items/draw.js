import black from "./assets/black.png"
import topandbot from "./assets/topandbot.png"
import goldcoin from "./assets/goldcoin.png"

async function run(item) {
    var canvas = document.createElement('canvas');
    canvas.width = "300";
    canvas.height = `1200`
    var ctx = canvas.getContext("2d");
    await document.fonts.ready
    ctx.font = "24px Morpheus"
    var heightCheck = 30
    var Black = new Image();
    Black.src = black;
    Black.onload = function () {
        ctx.drawImage(Black, 0, 0);
    }
    var TopAndBot = new Image();
    TopAndBot.src = topandbot;
    TopAndBot.onload = function () {
        ctx.drawImage(TopAndBot, 0, 0);
        ctx.textAlign = "center";
        if (item.rarity.toLowerCase() === "poor") {
            ctx.fillStyle = 'rgb(100,100,100)';
        }
        else if (item.rarity.toLowerCase() === "common") {
            ctx.fillStyle = 'rgb(255,255,255)';
        }
        else if (item.rarity.toLowerCase() === "rare") {
            ctx.fillStyle = 'rgb(0,112,221)';
        }
        else if (item.rarity.toLowerCase() === "uncommon") {
            ctx.fillStyle = 'rgb(30,255,0)';
        }
        else if (item.rarity.toLowerCase() === "epic") {
            ctx.fillStyle = 'rgb(163,53,238)';
        }
        else if (item.rarity.toLowerCase() === "legendary") {
            ctx.fillStyle = 'rgb(255,128,0)';
        }

        //Name of the item
        heightCheck = pasteText(ctx, item, heightCheck, 24, `[${item.name}]`, 288, 150, heightCheck)

        heightCheck += 7
        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.font = "20px Morpheus";
        //Stat values of the item
        if (item.hasOwnProperty("slot") && item.hasOwnProperty("type")) {
            ctx.textAlign = "start";
            heightCheck = pasteText(ctx, item, heightCheck, -5, `${item.slot}`, 288, 7, heightCheck)
            ctx.textAlign = "end";
            heightCheck = pasteText(ctx, item, heightCheck, 20, `${item.type}`, 288, 287, heightCheck)
        } else if (item.hasOwnProperty("slot") && item.hasOwnProperty("type")) {
            ctx.textAlign = "start";
            heightCheck = pasteText(ctx, item, heightCheck, 20, `${item.type}`, 288, 7, heightCheck)
        }
        ctx.textAlign = "start";
        if (item.hasOwnProperty("damage")) {
            heightCheck = pasteText(ctx, item, heightCheck, 20, `${item.damage} Damage`, 288, 7, heightCheck)
        }
        if (item.hasOwnProperty("armor")) {
            heightCheck = pasteText(ctx, item, heightCheck, 20, `${item.armor} Armor`, 288, 7, heightCheck)
        }
        if (item.hasOwnProperty("stamina")) {
            heightCheck = pasteText(ctx, item, heightCheck, 20, `${item.stamina} Stamina`, 288, 7, heightCheck)
        }
        if (item.hasOwnProperty("stat")) {
            if (item.class.toLowerCase() === "warrior") {
                heightCheck = pasteText(ctx, item, heightCheck, 20, `${item.stat} Strength`, 288, 7, heightCheck)
            } else if (item.class.toLowerCase() === "mage") {
                heightCheck = pasteText(ctx, item, heightCheck, 20, `${item.stat} Intellect`, 288, 7, heightCheck)
            } else if (item.class.toLowerCase() === "rogue") {
                heightCheck = pasteText(ctx, item, heightCheck, 20, `${item.stat} Agility`, 288, 7, heightCheck)
            } else {
                heightCheck = pasteText(ctx, item, heightCheck, 20, `${item.stat} Primary`, 288, 7, heightCheck)
            }
        }
        if (item.hasOwnProperty("level")) {
            heightCheck = pasteText(ctx, item, heightCheck, 20, `Requires level: ${item.level}`, 288, 7, heightCheck)
        }


        if (item.hasOwnProperty("spells")){
            ctx.fillStyle = 'rgb(30,255,0)';
            for (const spell in item.spells){
                if (item.spells[spell].type === "active"){
                    heightCheck = pasteText(ctx, item, heightCheck, 20, `Use: ${item.spells[spell].description}`, 288, 7, heightCheck)
                }
                else if (item.spells[spell].type === "proc"){
                    heightCheck = pasteText(ctx, item, heightCheck, 20, `On Hit: ${item.spells[spell].description}`, 288, 7, heightCheck)
                }
                else if (item.spells[spell].type === "onhit"){
                    heightCheck = pasteText(ctx, item, heightCheck, 20, `Equipped: ${item.spells[spell].description}`, 288, 7, heightCheck)
                }
            }
        }
        
        ctx.fillStyle = 'rgb(255,255,255)';

        if (item.hasOwnProperty("charges")){
            if (parseInt(item.charges) > 1){
                heightCheck = pasteText(ctx, item, heightCheck, 20, `${item.charges} Charges`, 288, 7, heightCheck)
            } else {
                heightCheck = pasteText(ctx, item, heightCheck, 20, `${item.charges} Charge`, 288, 7, heightCheck)
            }
        }


        if (item.hasOwnProperty("flavor")) {
            ctx.fillStyle = 'rgb(120,120,120)';
            heightCheck = pasteText(ctx, item, heightCheck, 20, `${item.flavor}`, 288, 7, heightCheck)
            ctx.fillStyle = 'rgb(255,255,255)';
        }
        if (item.hasOwnProperty("value")) {
            heightCheck = pasteText(ctx, item, heightCheck, -5, `Sell value: ${item.value}`, 288, 7, heightCheck)
            let metrics = ctx.measureText(`Sell value: ${item.value}`)
            var GoldCoin = new Image();
            GoldCoin.src = goldcoin;
            GoldCoin.onload = function () {
                ctx.drawImage(GoldCoin, metrics.width + 10, heightCheck - 16);
                heightCheck += 10
                ctx.drawImage(TopAndBot, 0, heightCheck)
                let destCanvas = document.createElement('canvas');
                destCanvas.width = "300";
                destCanvas.height = `${heightCheck + 5}`
                destCanvas.getContext('2d').drawImage(canvas,
                    0, 0, 300, heightCheck + 5,
                    0, 0, 300, heightCheck + 5)
                let container = document.getElementById("canContainer")
                container.appendChild(destCanvas)
            }
        } else {
            heightCheck -= 10
            ctx.drawImage(TopAndBot, 0, heightCheck - 5)
            let destCanvas = document.createElement('canvas');
            destCanvas.width = "300";
            destCanvas.height = `${heightCheck}`
            destCanvas.getContext('2d').drawImage(canvas,
                0, 0, 300, heightCheck,
                0, 0, 300, heightCheck)
            let container = document.getElementById("canContainer")
            container.appendChild(destCanvas)
        }
        let loader = document.getElementById("loading")
        loader.style.display = "none"
    }
}

function getLines(ctx, text, maxWidth) {
    var words = text.split(" ");
    var lines = [];
    var currentLine = words[0];

    for (var i = 1; i < words.length; i++) {
        var word = words[i];
        var width = ctx.measureText(currentLine + " " + word).width;
        if (width < maxWidth) {
            currentLine += " " + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
}
function pasteText(ctx, item, heightCheck, size, text, maxWidth, xoff, yoff) {
    let Lines = getLines(ctx, text, 290)
    for (let i in Lines) {
        ctx.fillText(Lines[i], xoff, heightCheck)
        heightCheck += size
    }
    return heightCheck + 5
}

export default run;