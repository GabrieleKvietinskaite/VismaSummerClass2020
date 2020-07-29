var colors = require('colors');

var colorsList = [colors.red, colors.green, colors.yellow, colors.blue];
var previousIndex = colorsList.length;

for(var i = 0; i < 7; i++){
    var newIndex = randomNumber(previousIndex);
    console.log(colorsList[newIndex]('#'.repeat(i + 1)));
    previousIndex = newIndex;
}

function randomNumber(previousNumber){
    var number = previousNumber;

    while(number == previousNumber){
        number = Math.floor(Math.random() * colorsList.length);
    }

    return number;
}