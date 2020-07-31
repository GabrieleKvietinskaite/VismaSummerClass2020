function sumA(array){
    if(Array.isArray(array)){
        var sum = 0;
    
        for(var i = 0; i < array.length; i++){
            sum += array[i];
        }
    
        return sum;
    }
    else {
        return "Wrong input";
    }
}

function sumB(array){
    if(Array.isArray(array)){
        return array.reduce((sum, x) => sum + x);
    }
    else {
        return "Wrong input";
    }
}