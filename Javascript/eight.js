function add(x) {
    return function(y) {
        if(!Number.isInteger(x) || Number.isInteger(y)){
            return "Wrong input";
        }
        return x + y;
    };
}