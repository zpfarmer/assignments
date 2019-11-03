function sum(num1, num2){
    return num1 + num2
}
var result = sum(2, 7) 
console.log(result)




function largeNumber(a, b, c){
    if ((a >= b) && (a >= c)){
        return a;
    } else if ((b >= a ) && (b >= c)) {
        return b;
    } else {
        return c;
    }
}
console.log(largeNumber(144, 248, 863))

/*function evenOdd(num3){
    if (num3 % 2 === 0){
        return "Even"
    } else {
        return "Odd"
    } 
}
var num3 = 10
console.log(num3)  */

function evenOdd(number){
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
var number = 10
console.log(number)
