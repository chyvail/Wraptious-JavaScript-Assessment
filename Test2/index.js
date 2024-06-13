// Pass by Value - Here the values are independent of each other, each occupying its own memory space

let a = 20;
let b = a;

a = 30;

console.log(a); // Outputs 30
console.log(b); // Outputs 20

// Pass by Reference - Here obj1 and obj2 are both references to the same object.

let obj1 = { value: 10 };
let obj2 = obj1;

obj1.value = 20;

console.log(obj1.value); // Outputs 20
console.log(obj2.value); // Outputs 20
