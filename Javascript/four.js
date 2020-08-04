function sumA(array){
    if(!Array.isArray(array)){
        return "Wrong input";
    }
        
    let sum = 0;
    
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }

    return sum;
}

function sumB(array){
    if(!Array.isArray(array)){
        return "Wrong input";
    }

    return array.reduce((sum, x) => sum + x);
}