function CalculatorA(initialValue){
    this.amount = initialValue;
}

CalculatorA.prototype.add = function (number) {
    if(Number.isInteger(number)){
        this.amount += number;
    
        return this;
    }
    else {
        return "Wrong input";
    }
}

CalculatorA.prototype.substract = function (number) {
    if(Number.isInteger(number)){
        this.amount -= number;
    
        return this;
    }
    else {
        return "Wrong input";
    }
}

CalculatorA.prototype.multiply = function (number) {
    if(Number.isInteger(number)){
        this.amount *= number;
    
        return this;
    }
    else {
        return "Wrong input";
    }
}

CalculatorA.prototype.divide = function (number) {
    if(Number.isInteger(number)){
        this.amount /= number;
    
        return this;
    }
    else {
        return "Wrong input";
    }
}

class CalculatorB {
    constructor(initialValue){
        this.amount = initialValue;
    }

    add(number){
        if(Number.isInteger(number)){
            this.amount += number;
        
            return this;
        }
        else {
            return "Wrong input";
        }
    }

    substract(number){
        if(Number.isInteger(number)){
            this.amount -= number;
        
            return this;
        }
        else {
            return "Wrong input";
        }
    }

    multiply(number){
        if(Number.isInteger(number)){
            this.amount *= number;
        
            return this;
        }
        else {
            return "Wrong input";
        }
    }

    divide(number){
        if(Number.isInteger(number)){
            this.amount /= number;
        
            return this;
        }
        else {
            return "Wrong input";
        }
    }
}

//atskira tikrinimo funkcija