
function sumValues(num1, num2){
    var num1, num2, res;
    num1=Number(document.sum.txtnum1.value);
    num2=Number(document.sum.txtnum2.value);
    res=num1+num2;
    document.sum.txtres.value=res;
}

function subValues(num3, num4){
    var num3, num4, res;
    num3=Number(document.sub.txtnum3.value);
    num4=Number(document.sub.txtnum4.value);
    res=num3-num4;
    
    document.sub.txtres.value=res;
}

function mulValues(num5, num6){
    var num5, num6, res;
    num5=Number(document.mul.txtnum5.value);
    num6=Number(document.mul.txtnum6.value);
    res=num5*num6;
    document.mul.txtres.value=res;
}


/*function subtract(num1, num2){
    return num1 - num2
}
console.log(subtract(5, 3))

function multiply(num1, num2){
        return num1 * num2
}
console.log(multiply(5, 4))*/
