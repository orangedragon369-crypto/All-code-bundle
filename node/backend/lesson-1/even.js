function evenNumbers(n = 1, to, count = 1) {
    if (n%2 !== 0) n++;
    console.log(`${count} : counting: ${n}`);
    if (n+2 <= to) evenNumbers(n+2, to, count++);
}
evenNumbers(1, 20);

// for (let i = 2; i <= 20; i += 2) {
//     console.log(`${i/2} : counting: ${i}`);
// }

// let i = 2;
// while (i <= 20) {
//     console.log(`${i/2} : counting: ${i}`);
//     i += 2;
// }