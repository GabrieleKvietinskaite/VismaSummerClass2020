function spy(functionToSpy){
    this.counter = 0;

    return function(){
        this.counter++;

        return functionToSpy.apply(this, arguments);
    };
}

function add(x, y){
    return x + y;
}

var spied = spy(add);
spied(1, 2);
console.log(spied.report());
