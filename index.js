//reset number
number = 10

function add() {
  return number += 5;
}

function divide() {
  return number /= 3;
}

function subtract() {
    return number -= 6;
}

function multiply() {
    return number *= 8;
}

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b
}

function divide(a, b) {
    return a/b
}

function increment(a) {
    return a+1
}

function decrement(a) {
    return a-1
}

function makeInt(a) {
    return parseInt(a,10);
}

function preserveDecimal(a) {
    return parseFloat(a,3.444)
}