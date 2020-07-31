function rangeA(x, y){
    if(Number.isInteger(x) && Number.isInteger(y)){
        var array = [];
    
        for(var i = x; i < y; i++){
            array.push(i);
        }
    
        return array;
    }
    else {
        return "Wrong input";
    }
}

function rangeB(x, y){
    if(Number.isInteger(x) && Number.isInteger(y)){
        return [...Array(y - x).keys()].map(v => x + v);
    }
    else {
        return "Wrong input";
    }
}