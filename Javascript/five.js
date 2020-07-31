var houses = [
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
    if(typeof(name) === "string"){
        for(var i = 0; i < houses.length; i++){
            if(houses[i].name == name){
                return houses[i].motto;
            }
        }
    }
    else {
        return "Wrong input";
    }
}

function mottoB(name) {
    if(typeof(name) === "string"){
        return houses.find(x => x.name == name).motto;
    }
    else {
        return "Wrong input";
    }
}