import net from "net";
import { findClientByUsername, logToChat, sendMost, checkID } from "./external_functions.mjs";

const clients = new Map();

let nextId = 0;

const server = net.createServer((sender) => {
    
    sender.id = `${nextId++}`;
    sender.username = sender.id;
    clients.set(sender.id, sender);

    sender.write(`Connected! Your username is ${sender.username}\n`);
    sendMost(`New user ${sender.username} has arived`, sender, clients)
    logToChat(`Client ${sender.username} connected`);

    sender.on("data", (data) => {
        const message = data.toString().trim();
        logToChat(`${sender.username} sent: ${message}`);
        if (message.startsWith("/")) {
            const parts = message.split(" ");

            switch (parts[0]) {
                case "/end":
                    sender.write("Goodbye!\n");

                    clients.delete(sender.id);

                    sendMost(`${sender.username} has left the chat.`, sender, clients);
                    logToChat(`${sender.username} has left the chat.`);

                    sender.end();      // graceful close
                    sender.destroy();  // force close

                    break;


                case "/w": {
                    const target = findClientByUsername(parts[1], clients);
                    if (target) {
                        target.write(`(Private) ${sender.username}: ${parts.slice(2).join(" ")}\n`);
                        sender.write("message sent")
                    } else {
                        sender.write("User not found\n");
                    }
                    break;
                }

                case "/clientlist":
                    for (const [, client] of clients) {
                        sender.write(`Client name: ${client.username}\n`);
                    }
                    break;

                case "/kick":
                    if (parts[2] !== "adminPassword"){
                        sender.write("Password Invalid\n")
                        break;
                    }
                    const target = findClientByUsername(parts[1], clients);
                    if (target) {
                        sender.write(`You have kicked ${parts[1]}`)
                        target.write("You have been kicked.\n");
                        sendMost(`${parts[1]} has been kicked from the chat by ${sender.username}`, sender, clients);
                        logToChat(`${parts[1]} has been kicked from the chat by ${sender.username}.`, sender);
                        clients.delete(target.id);
                        target.end();
                        target.destroy();
                    } else {
                        sender.write("User not found\n");
                    }
                    break;

                case "/username":
                    const newName = parts[1];
                    let taken = [...clients.values()].some(
                            c => c.username === newName
                        );
                    if (sender.username === newName){
                        sender.write(`You cannot change your username to ${newName} because it is already your username.\n`);
                        break;
                    }
                    if (!taken){
                        const oldName = sender.username;
                        sender.username = newName;

                        sender.write(`Your name is now ${newName}\n`);
                        sendMost(`${oldName} is now known as ${newName}`, sender, clients);
                        break;
                    }
                    sender.write(`The name ${parts[1]} is already in use.\n`);
                    break;

                case "/help":
                    sender.write("command options are: /kick {name} {admin password} (kicks selected client from server), /end (leaves server), /w {name} {message} (talks to speciffied client), /clientlist (lists users), /username {name} (changes username)\n")
                    break;

                default:
                    sender.write("Unknown command\n");
            }
            return;
        } else {
            sendMost(`${sender.username}: ${message}`, sender, clients);
        }
    });

    sender.on("end", () => {
        sender.write("/end");
        sender.end();
        sender.destroy();
    });

    sender.on("error", () => {
        clients.delete(sender);
    });
});

server.listen(5000, () => {
    console.log("Server listening on port 5000");
});