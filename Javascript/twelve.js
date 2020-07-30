function CalculatorA(initialValue){
    this.amount = initialValue;
}

CalculatorA.prototype.add = function (number) {
    this.amount += number;

    return this;
}

CalculatorA.prototype.substract = function (number) {
    this.amount -= number;
    
    return this;
}

CalculatorA.prototype.multiply = function (number) {
    this.amount *= number;
    
    return this;
}

CalculatorA.prototype.divide = function (number) {
    this.amount /= number;
    
    return this;
}

class CalculatorB {
    constructor(initialValue){
        this.amount = initialValue;
    }

    add(number){
        this.amount += number;
    
        return this;
    }

    substract(number){
        this.amount -= number;
    
        return this;
    }

    multiply(number){
        this.amount *= number;
    
        return this;
    }

    divide(number){
        this.amount /= number;
    
        return this;
    }
}