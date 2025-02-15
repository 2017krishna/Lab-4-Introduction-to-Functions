function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Krishna"));

function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(17, 8));

let x = 10;
console.log(`x before changeValue: ${x}`);

function changeValue() {
    let x = 17;
    console.log(`x inside changeValue: ${x}`);
}

changeValue();
console.log(`x after changeValue: ${x}`);

function outerFunction() {
    let count = 0;
    return function() {
        count++;
        console.log(`Number is: ${count}`);
    }
}

const innerFunction = outerFunction();

innerFunction();
innerFunction();
innerFunction();
innerFunction();
innerFunction();