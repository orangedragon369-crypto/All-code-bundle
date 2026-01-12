import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const http = createServer(app);
const io = new Server(http);

const port = process.env.PORT || 3001;
// users array to track all the socket connections
let users = [];

app.use(express.static("public"));
io.on("connection", (socket) => {
  socket.on("newUser", (name) => {
    users.push({ id: socket.id, name });
    // send the new user to all the connected users except the one who joined
    socket.broadcast.emit("newUser", name);
  });

  socket.on("client chat message", (msg) => {
    //msg '::private::jack::Hello'
    // locate the user who sent the message
    const user = users.find((user) => user.id === socket.id);
    const userName = user ? user.name : "Anonymous";
    socket.broadcast.emit("server chat message", { userName, msg });
  });
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(port, () => {
  console.log(`listening on port:${port}`);
});
