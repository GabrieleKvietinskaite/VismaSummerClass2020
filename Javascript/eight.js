function add(x) {
    return function(y) {
        if(Number.isInteger(x) && Number.isInteger(y)){
            return x + y;
        }
        else {
            return "Wrong input";
        }
    };
}