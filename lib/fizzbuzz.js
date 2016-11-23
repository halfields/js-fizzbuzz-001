'use strict';

var fizzbuzz = function(num){
    var mod5 = num % 5;
    var mod3 = num % 3;
    var mod15 = num % 15;
    if (mod15 === 0) {
        return 'FizzBuzz';
    }
    else if (mod3 === 0) {
        return 'Fizz';
    }
    else if (mod5 === 0) {
        return 'Buzz';
    }
    else {
        return num;
    }
};