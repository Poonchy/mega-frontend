const data = [
    {
        command:"Mega Help",
        description:"Sends you here. Hi 👋"
    },
    {
        command:"Mega Create",
        description:"Creates a prompt to create your character. You first type in a name, then react to choose your race and class."
    },
    {
        command:"Mega Delete",
        description:"Creates a prompt to permentally delete your character. Once you react to the message your character will be gone forever."
    },
    {
        command:"Mega Hero",
        description:"Displays your character's stats and how he looks."
    },
    {
        command:"Mega Equip <item>",
        description:"Equips a specified item, so long as it is in your inventory and it is equipable."
    },
    {
        command:"Mega Unequip <item>",
        description:"Unequips a specified item, so long as you are wearing that item."
    },
    {
        command:"Mega Sell <item>",
        description:"Destroy an item and reward you gold based on the item's sell price, so long as it is in your inventory."
    },
    {
        command:"Mega Use <item>",
        description:"Uses an item and does what it tells you it will. If it has charges it will go down, and at 0 it will be destroyed."
    },
    {
        command:"Mega Train",
        description:"Consumes health and rewards you with experience and gold. Prompt will ask to continually train by reacting to it."
    },
    {
        command:"Mega Item <item>",
        description:"Displays the base stats for a specified item."
    },
    {
        command:"Mega Gather <resource>",
        description:"Consumes health and rewards you with the specified resource. Prompt will ask to continually gather by reacting to it."
    },
    {
        command:"Mega Craft <item>",
        description:"Consumes resources to craft a specified item, so long as you possess the necessary resources and the item is craftable."
    },
    {
        command:"Mega Inventory",
        description:"Displays a shorthand version of your inventory, showing only item names."
    },
    {
        command:"Mega Full Inventory",
        description:"Displays every single item in your inventory with every effect, enchantment and transmogrification applied to it."
    },
    {
        command:"Mega run <dungeon>",
        description:"Runs an epic dungeon filled with gold, loot and experience! \nAvailable are deadmines."
    },
    {
        command:"Mega Shop <shop>",
        description:"Talk to a merchant and browse their wares (hint: they've always got something important to say). \nAvailable are Deadmines"
    }
]

export default data;