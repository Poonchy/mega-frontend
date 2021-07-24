const Spells = [
    {
        "ID":"1",
        "name":"attune-dmvc",
        "description": "Attunes you to Deadmines.",
        "type":"active"
    },
    {
        "ID":"2",
        "name":"attune-kara",
        "description": "Attunes you to Karazhan.",
        "type":"active"
    },
    {
        "ID":"3",
        "name":"Stun Immunity",
        "description": "Makes you resilient against stuns.",
        "type":"onhit"
    },
    {
        "ID":"4",
        "name":"Engorge",
        "description": "Cut the medallion deep into your arm, draining 100 health and storing it within the medallion.",
        "type":"active"
    },
    {
        "ID":"7",
        "name":"vctrinketrestore",
        "description": "Taking fatal damage will instead break open the medallion, causing you to heal for 100 health instead.",
        "type":"onhit"
    },
    {
        "ID":"5",
        "name":"Reabsorb",
        "description": "Drain the medallion, restoring the health stored.",
        "type":"active"
    },
    {
        "ID":"6",
        "name":"mhp",
        "description": "Restore 30 health.",
        "type":"active"
    },
    {
        "ID":"8",
        "name":"fire weapon",
        "description": "Shoot a fireball at the target, dealing 10 damage.",
        "type":"proc"
    },
]

function findByID(ID){
    for (const x in Spells){
        if (Spells[x].ID === ID){
            return Spells[x]
        }
    }
    return null
}

module.exports = {findByID}