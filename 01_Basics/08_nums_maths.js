const score = 100;
console.log(score);

const cost = new Number(300);
console.log(cost);

console.log(cost.toString().length);
console.log(cost.toFixed(2));


const otherNumber = 123.3366;
console.log(otherNumber.toPrecision(3));

const hundreds= 1000000;

console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++

console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

// console.log(Math.min(4,7,2,1));

// console.log(Math.max(4,7,2,1));
  
console.log(Math.random());
console.log((Math.random()*10) + 1); // to avoid zero  
console.log(Math.floor(Math.random()*10) + 1);

// to get max and min btw 10 and 20;
const min = 10
const max =20

console.log(Math.floor(Math.random() * (max -min +1) + min));






















