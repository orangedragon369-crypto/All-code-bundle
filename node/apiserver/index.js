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

app.get('/cards/:what', async (req, res) => {
    try {
        const file = await fsPromise.readFile(path.join(__dirname + "/public/cards.json"), "utf-8");
        const cards = JSON.parse(file);

        let cardCount = 0;
        switch (req.params.what) {
            case "sets":
                return res.status(200).json(
                    cards.cardkorUtils.sets
                );
            case "types":
                return res.status(200).json(
                    cards.cardkorUtils.types
                );
            case "rarities":
                return res.status(200).json(
                    cards.cardkorUtils.rarities
                );
            case "count":
                for (const [] of Object.entries(cards.cardkor[0])) cardCount++;
                return res.status(200).json(cardCount);
            case "random":
                const cardBank = cards.cardkor[0];
                
                for (const [] of Object.entries(cardBank)) cardCount++;
                return res.status(200).json(
                    cardBank[Math.floor(Math.random() * cardCount)]
                );
            default:
                return res.status(400).json({
                    "error": "Invalid parameter",
                    "valid Parameters": [
                        "sets",
                        "types",
                        "rarities",
                        "count",
                        "random",
                        "create",
                        "update/{id}",
                        "delete/{id}"
                    ]
                });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error reading cards");
    }
});

app.put(['/cards/update/:id', "/cards/create"], async (req, res) => {
    try {
        const file = await fsPromise.readFile(path.join(__dirname + "/public/cards.json"), "utf-8");
        const cards = JSON.parse(file);

        if (!cards.cardkor[0][id]){
            return res.status(404).json(
                {"error": "The card you are looking of does not exist"}
            );
        }

        return;
    } catch (err) {
        console.error(err);
        res.status(500).send("Error reading cards");
    }
})

app.delete('/cards/delete/:id', async (req, res) => {
    try {
        const file = await fsPromise.readFile(path.join(__dirname + "/public/cards.json"), "utf-8");
        const cards = JSON.parse(file);

        if (!cards.cardkor[0][id]){
            return res.status(404).json(
                {"error": "The card you are looking of does not exist"}
            );
        }

        return;
    } catch (err) {
        console.error(err);
        res.status(500).send("Error reading cards");
    }
})

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