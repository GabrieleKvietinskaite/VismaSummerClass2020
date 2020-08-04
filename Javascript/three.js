function rangeA(x, y){
    if(!Number.isInteger(x) || Number.isInteger(y)){
        return "Wrong input";
    }

    let array = [];
    
    for(let i = x; i < y; i++){
        array.push(i);
    }

    return array;
}

function rangeB(x, y){
    if(!Number.isInteger(x) || Number.isInteger(y)){
        return "Wrong input";  
    }

    return [...Array(y - x).fill()].map(v, index=> x + index);
}