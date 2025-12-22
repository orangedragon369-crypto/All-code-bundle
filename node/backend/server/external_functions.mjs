import fs from "fs";

function sendMost(send, sender, clients) {
    for (const client of clients.values()) {
        console.log(client.username)
        if (client.username === sender.username) {
            continue;
        }
        client.write(`${send}\n`);
    }
}

function logToChat(text) {
    fs.appendFile(
        "chat.log",
        text + "\n",
        (err) => {
            if (err) {
                console.error("Failed to write to log:", err);
            }
        }
    );
}

function findClientByUsername(name, clients) {
    for (const client of clients.values()) {
        if (client.username === name) {
            return client;
        }
    }
}

function checkID(id){
    for (const client of clients.values()) {
        if (client.id === id) {
            id = checkID(id+1);
        }
    }
    return id;
}

export {sendMost, logToChat, findClientByUsername, checkID};