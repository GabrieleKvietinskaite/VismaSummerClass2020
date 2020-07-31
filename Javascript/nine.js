function sevenAte9(numbers){
    if(typeof(numbers) === "string"){
        var array = numbers.split("");
    
        for(var i = 1; i < array.length - 1; i++){
            if(array[i] == "9" && array[i - 1] == "7" && array[i + 1] == "7"){
                array.splice(i, 1);
            }
        }
    
        return array.join("");
    }
    else {
        return "Wrong input";
    }
}