// function.js
function plus(){
    let i1 = document.getElementById('num1'); //input
    let i2 = document.getElementById('num2'); //input
    let result = document.getElementById('result'); //input
    result.value = sum(parseInt(i1.value), parseInt(i2.value));
}

function sum(v1, v2){
    return v1 + v2; // string + => concatenate.
}

var fnc = function (v1,v2){
    return v1 + v2;
}

console.log(fnc(10, 20, 30));