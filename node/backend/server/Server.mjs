import net from "net";
import fs from "fs";

const clients = new Map();

function sendMost(send, senderId){
    for (const [otherId, client] of clients) {
        if (otherId !== senderId) {
            client.write(send + "\n");
        }
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

let nextId = 0;

const server = net.createServer((sender) => {
    
    const id = nextId.toString();
    nextId++;
    clients.set(id, sender);

    sender.write(`Connected! Your ID is ${id}\n`);
    sendMost(`New user ${id} has arived`, id)
    logToChat(`Client ${id} connected`);

    sender.on("data", (data) => {
        const message = data.toString().trim();
        logToChat(`${id} sent: ${message}`);
        if (message.startsWith("/")) {
            const parts = message.split(" ");

            switch (parts[0]) {
                case "/end":
                    sender.write("Goodbye!\n");
                    sendMost(`${id} has left the chat.`, id);
                    logToChat(`${id} has left the chat.`, id);
                    sender.end();
                    break;

                case "/w": {
                    const target = clients.get(parts[1]);
                    if (target) {
                        target.write(`(Private) ${id}: ${parts.slice(2).join(" ")}\n`);
                        sender.write("message sent")
                    } else {
                        sender.write("User not found\n");
                    }
                    break;
                }

                case "/clientlist":
                    for (const [id] of clients) {
                        sender.write(`Client ID: ${id}\n`);
                    }
                    break;

                case "/kick":
                    const target = clients.get(parts[1]);
                    if (target) {
                        sender.write(`You have kicked ${parts[1]}`)
                        target.write("You have been kicked.\n");
                        sendMost(`${parts[1]} has been kicked from the chat by ${id}`, id);
                        logToChat(`${parts[1]} has been kicked from the chat by ${id}.`, id);
                        target.end();
                    } else {
                        sender.write("User not found\n");
                    }
                    break;

                case "/username":
                    break;

                case "/help":
                    sender.write("command options are: /kick {name} (kicks selected client from server), /end (leaves server), /w {name} {message} (talks to speciffied client), /clientlist (lists users), /username {name} (changes username)")
                    break;

                default:
                    sender.write("Unknown command\n");
            }
            return;
        }
        sendMost(message, id);
    });

    sender.on("end", () => {
        clients.delete(id);
    });

    sender.on("error", () => {
        clients.delete(id);
    });
});

server.listen(5000, () => {
    console.log("Server listening on port 5000");
});