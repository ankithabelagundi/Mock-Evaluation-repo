let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
const adress=[...person, ...extra];
console.log(adress);