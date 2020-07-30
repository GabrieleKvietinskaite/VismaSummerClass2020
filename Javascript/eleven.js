function add(array){
    var sum = 0;

    for(var i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            sum += add(array[i]);
        }
        else{
            sum += parseInt(array[i]);
        }
    }

    return sum;
}