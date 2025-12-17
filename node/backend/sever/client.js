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
})

console.log('/end to leave')
rl.on('line', (answer) => {

        while (answer !== "/end"){
            client.write(answer);
            rl.prompt();
            return;
        }
        client.write(answer);
    rl.close();
});