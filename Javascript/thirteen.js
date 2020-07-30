function say(x) {
    return function(y) {
        return x + " " + y;
    };
}