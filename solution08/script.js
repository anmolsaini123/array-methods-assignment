const people=[
    {name:"Anmol" , score:90},
    {name:"Vansh" , score:90},
    {name:"Alice" , score:80}
];

const onlyname= people.map( function(studentNames){ return studentNames.name });

console.log(onlyname)