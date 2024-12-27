const prompt = require("prompt-sync")({ sigint: true });

function add7(num) {
    console.log(`add7: ${Number(num) + 7}`);
}

function multiply(a, b) {
    console.log(`Multiply: ${a * b}`);
}

function capitalize(string) {
    console.log(`capitalized string: ${string[0].toUpperCase() + string.slice(1)}`)
}

function lastLetter(string) {
    console.log(`Last letter of the string: ${string.at(-1)}`);
}
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let div3 = (i % 3 === 0);
        let div5 = (i % 5 === 0);
        if (div3 && div5) console.log("Fizz Buzz");
        else if (div5) console.log("Buzz");
        else if (div3) console.log("Fizz");
        else console.log(i);
    }
}

let n = prompt("enter a number: ");
add7(n);
fizzBuzz(n);
let n2 = prompt("enter another number: ");
multiply(n, n2);
let sampleString = prompt("enter a string: ");
capitalize(sampleString);
lastLetter(sampleString);
