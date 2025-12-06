const { argv } = require('node:process');

function evenOrOddNumbers(n = 1, to, count = 1) {
    if ((n%2 !== 0 && argv[2] === "even") || (n%2 !== 1 && argv[2] === "odd")) n++;
    console.log(`${count} : counting: ${n}`);
    if (n+2 <= to) evenOrOddNumbers(n+2, to, count+1);
}
evenOrOddNumbers(1, 20);