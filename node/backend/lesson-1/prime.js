function prime(num, tried = 0, current = 0){
    let prime = true;
    for (let i = 1; i <= tried; i++){
        if (tried%i === 0){
            prime = false;
            break
        }
    }
    if (prime) current++;
    if (current >= num) return console.log(`The ${num} prime number is ${tried}`);
    prime(num, tried+1, current);
}

prime(7);