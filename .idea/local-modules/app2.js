const math = require('./project/project2/local_moduls/math-expose-chain');
const {sum} = require('./project/project2/local_moduls/math-expose-chain');
// re-structure method via name of key { N-Key }

// const {sum,multiply} = require('./project/project2/local_moduls/math-expose-chain');


console.log('sum is :',sum(5,5));
console.log('multi is ',math.multiply(8,7));
console.log('reminder of 12 and 9 is : ',math.division.reminder(12,9)); // sequencr of steps from math {index} to division to {reminder method}
console.log('10 / 2 = ',math.div(10,2)); // sequence exposing