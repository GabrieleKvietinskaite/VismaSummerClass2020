function say(x) {
    return function(y) {
        if(typeof(x) != "string" || typeof(y) != "string"){
            return "Wrong input";
        }
        
        return x + " " + y;
    };
}