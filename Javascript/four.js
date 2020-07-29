function sumA(array){
    var sum = 0;

    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }

    return sum;
}

function sumB(array){
    return array.reduce((sum, x) => sum + x);
}