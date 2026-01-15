const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static('./public'));

app.get('/', (req, res)=>{
    res.end("Hello, Express!")
})

app.post('/user', (req, res) => {
    const email = req.body.email;
    const name = `${req.body.firstname} ${req.body.lastname}`;
    const password = req.body.password;
    res.send(`POST request recived. Now creating ${name} with email ${email} and password ${password} on ${new Date()} `)
});

app.listen(port, ()=>{
    console.log(`server is runnning on http://localhost:${port}`);
});