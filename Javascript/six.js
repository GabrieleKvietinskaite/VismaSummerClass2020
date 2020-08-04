function filter(array){
    if(!Array.isArray(array)){
        return "Wrong input";
    }

    let filteredArray = Array.from(new Set(array));

    return filteredArray;
}