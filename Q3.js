function sumAll(...numbers){
    let count =0
    for(let num of numbers){
        count+=num;
    }
    return count
}
console.log(sumAll(1,2,3,4));
