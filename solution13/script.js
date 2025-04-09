const numbers=[1,2,3,4,5];

const sumofnum= numbers.reduce( function (sum,n) {
    return sum+n;
},0);
console.log(sumofnum);
