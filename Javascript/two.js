for(let i = 1; i <= 100; i++){
    let message = i.toString();

    if(i % 3 == 0 && i % 5 == 0){
        message = 'FizzBuzz';
    }
    else if(i % 3 == 0){
        message = 'Fizz';
    }
    else if(i % 5 == 0){
        message = 'Buzz';
    }
    
    console.log(message);
}