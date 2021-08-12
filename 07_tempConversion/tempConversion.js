const ftoc = function(degFahr) {
let Celcius = ((degFahr -32) * (5/9));
return Math.round(Celcius * 10) / 10;
};

const ctof = function(degCel) {
let Fahrenheit = ((degCel * (9/5)) + 32);
return Math.round(Fahrenheit * 10) / 10;
};

module.exports = {
  ftoc,
  ctof
};
