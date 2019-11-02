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