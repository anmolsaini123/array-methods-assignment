const numbers = [10, 20, 55, 14, 12];
const greater = numbers.reduce(function (greatest, curr) {
    if (curr > greatest) {
        return curr;
    } else {
        return greatest;
    }
},0);
console.log(`greatest number is ${greater}` );
