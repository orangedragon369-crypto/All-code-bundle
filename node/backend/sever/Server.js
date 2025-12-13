const net = require('net');

const server = net
    .createServer((client)=>{
        client.write("welcome to the chat room.")
    })
    .listen(5000, () => {
        console.log("Listening on port 5000")
    })

//const log = fstat.createWriteStream("server.log");