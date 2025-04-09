const voter=[
    {name:"Anmol" , age:19},
    {name:"Vansh", age:18},
    {name:"john", age:17}
];
const vote= voter.filter( function(adult) {
    return adult.age >= 18;
})
console.log(vote);