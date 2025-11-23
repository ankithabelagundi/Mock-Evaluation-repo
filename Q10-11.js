function  counter(){
    let count =0;
    return function inner(){
        count++;
        console.log(count);
    };
}const c = counter();
c(); // 1
c(); // 2
c(); // 3

function createWallet{
    
}