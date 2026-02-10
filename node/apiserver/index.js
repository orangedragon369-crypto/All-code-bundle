const express = require('express');
const fsPromise = require("fs/promises");
const path = require("path");

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static('./public'));

app.post('/user', (req, res) => {
    const email = req.body.email;
    const name = `${req.body.firstname} ${req.body.lastname}`;
    const password = req.body.password;
    res.send(`POST request recived. Now creating ${name} with email ${email} and password ${password} on ${new Date()} `)
});

app.get('/cards', async (req, res) => {
    try {
        const file = await fsPromise.readFile(path.join(__dirname + "/public/cards.json"), "utf-8");
        const cards = JSON.parse(file).cardkor;

        const filters = { ...req.query };

        const results = cards.filter(card =>
            Object.entries(filters).every(([key, value]) =>
                card[key] == value
            )
        );

        res.status(200).json(results);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error reading cards");
    }
});


app.get('/docs', (req, res) => {
    res.sendFile(__dirname + '/public/docs.html');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
})

app.listen(port, (err)=>{
    if (err) throw err;
    console.log(`server is runnning on http://localhost:${port}`);
});