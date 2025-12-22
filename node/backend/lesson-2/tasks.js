const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let todoList = [];

if (todoList.length < 1) console.log('Enter a to-do item, or type "done" to finish: ');

rl.on('line', (answer) => {

        if (answer !== "done"){
            todoList.push(answer);
            rl.setPrompt(`Added: "${answer}" to your to-do list.\n`);
            rl.prompt();
            return;
        }
        console.log('Your to-do list:');
        todoList.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    rl.close();
});