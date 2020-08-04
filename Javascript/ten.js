function spy(functionToSpy){
    let counter = 0;

    let wrapper = function(){
        counter++;

        return functionToSpy(...arguments);
    }

    wrapper.report = () => {return {calls: counter}}
    return wrapper;
}

function add(x, y){
    return x + y;
}

let spied = spy(add);
spied(1, 2);
spied(1, 2);
console.log(spied.report());
