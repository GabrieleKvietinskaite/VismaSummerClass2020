let houses = [
    {name: "Targaryen", motto: "Fire and Blood"},
    {name: "Stark", motto: "Winter is Coming"},
    {name: "Bolton", motto: "Our Blades Are Sharp"},
    {name: "Greyjoy", motto: "We Do Not Sow"},
    {name: "Tully", motto: "Family, Duty, Honor"},
    {name: "Arryn", motto: "As High as Honor"},
    {name: "Lannister", motto: "Hear Me Roar!"},
    {name: "Tyrell", motto: "Growing Strong"},
    {name: "Baratheon", motto: "Ours is the Fury"},
    {name: "Martell", motto: "Unbowed, Unbent, Unbroken"}
];

function mottoA(name){
    if(typeof(name) != "string"){
        return "Wrong input";
    }

    for(let i = 0; i < houses.length; i++){
        if(houses[i].name == name){
            return houses[i].motto;
        }
    }
}

function mottoB(name) {
    if(typeof(name) != "string"){
        return "Wrong input";
    }

    let result = houses.find(x => x.name == name);

    return result ? result.motto : '';
}