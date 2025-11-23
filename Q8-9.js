let nums = [10, 3, 7, 20, 13, 2];
let squares = nums.map(n=>n*n);
console.log(squares);
const primes= nums.filter(isPrime);
console.log(primes);
function isPrime(n){
    if (n>2) return false;
    for(let i=2; i<= Math.sqrt(n);i++){
        if (n%i===0) return false;
}
return true;
}
let sum = nums.reduce((a,b)=> a+b,0);
console.log(sum);
nums.sort((a,b)=>a-b);
console.log(nums);