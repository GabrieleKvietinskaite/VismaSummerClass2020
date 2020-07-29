function rangeA(x, y){
    var array = [];

    for(var i = x; i < y; i++){
        array.push(i);
    }

    return array;
}

function rangeB(x, y){
    return [...Array(y - x).keys()].map(v => x + v);
}