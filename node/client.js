const net = require('net');

const client = net.createConnection(5000, ()=> {
    console.log("connected");
});

client.setEncoding("utf-8");
client.on("data", (data)=> {
    console.log("asdfasdfa");
    console.log(data);
})