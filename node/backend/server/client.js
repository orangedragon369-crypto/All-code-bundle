const net = require('net');
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = net.createConnection(5000, ()=> {
    console.log("connected");
});

client.setEncoding("utf-8");
client.on("data", (data)=> {
    console.log(data);
    if (data === "Goodbye!\n"){
        rl.close();
    }
})

console.log('/help for options')
rl.on("line", (answer) => {
    if(answer !== "/end"){
        client.write(answer+"\n");
        rl.setPrompt("\n");
        rl.prompt();
        return;
    }
    client.write("/end\n");
    rl.close();
});

rl._writeToOutput = function () {};