const celsiusTemps = [0, 10, 20, 30, 40];

const fahrenheitTemps = celsiusTemps.map((celsius)=> {
  return (celsius * 9/5) + 32;
});

console.log(fahrenheitTemps);
