function say(x) {
    return function(y) {
        if(typeof(x) === "string" && typeof(y) === "string"){
            return x + " " + y;
        }
        else {
            return "Wrong input";
        }
    };
}