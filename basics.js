"use strict";
function add(n1, n2, printResult) {
    var result = n1 + n2;
    if (printResult) {
        console.log(result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.5;
var printResult = true;
var result = add(number1, number2, printResult);
console.log(result);
