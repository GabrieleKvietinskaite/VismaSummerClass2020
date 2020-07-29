function filter(array){
    array.sort(compareNumbers);
    var filteredArray = [];

    for(var i = 0; i < array.length; i++){
        if(i == 0){
            filteredArray.push(array[i]);
        }
        else if(array[i] != filteredArray[filteredArray.length - 1]){
            filteredArray.push(array[i]);
        }
    }

    return filteredArray;
}

function compareNumbers(a, b) {
    return a - b;
}