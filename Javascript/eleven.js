function add(array){
    if(!Array.isArray(array)){
        return "Wrong input";
    }
    let sum = 0;
    
    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            sum += add(array[i]);
        }
        else{
            sum += parseInt(array[i]);
        }
    }
    return sum;
}

function addByEs6(array){
    return array.flat(Infinity).reduce((currentItem, total) => total + currentItem);
}