let colors = require("colors");

let colorsList = [colors.red, colors.green, colors.yellow, colors.blue];
let previousIndex = colorsList.length;

for(let i = 0; i < 7; i++){
    let newIndex = randomNumber(previousIndex);
    console.log(colorsList[newIndex]("#".repeat(i + 1)));
    previousIndex = newIndex;
}

function randomNumber(previousNumber){
    let number = previousNumber;

    while(number == previousNumber){
        number = Math.floor(Math.random() * colorsList.length);
    }

    return number;
}