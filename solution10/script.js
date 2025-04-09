const words=[ "Anmol","AnmolSaini", "Hello", "HelloWorld"];
const longword= words.filter(function (long) {
     return long.length > 5;
});

console.log(longword);
