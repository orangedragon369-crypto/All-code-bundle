import express from 'express';
import mongoose from "mongoose";

const dbURL = "mongodb+srv://benjaminludington3088:Orang3dra9on@cluster0.0iqaxnz.mongodb.net/mtech";
//mongodb://localhost:27017/FunGames
const app = express();
const port = process.env.port || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static("public"));

mongoose.connect(dbURL);
const db = mongoose.connection;
db.on('error', (err) => {
    console.log('DB connection error:', err);
});
db.once('open', () => {
    console.log('DB connected successfully')
});

const cardkorCardsSchema = new mongoose.Schema({
    name: String,
    effect: String,
    req: Array,
    delay: Number
});
const CardkorCards = mongoose.model('CardkorCards', cardkorCardsSchema);

app.post('/add-card', async (req, res) => {
    const {name, effect, require, delay } = req.body;
    const newCard = new CardkorCards({name, effect, require, delay});
    try {
        const savedCard = await newCard.save();
        res.status(201).json(savedCard);
    } catch (err) {
        console.log(err);
    }
})

app.get('/cards', async (req, res) => {
    try {
        const cards = await CardkorCards.find();
        res.status(200).json(cards);
    } catch (err) {
        console.log(err)
    }
})

app.get('/card', async (req, res) => {
    try {
        const cards = await CardkorCards.findOne();
        res.status(200).json(cards);
    } catch (err) {
        console.log(err)
    }
})

app.put('/cardsDelete', async (req, res) => {e
    const {key, value} = req.body;
    try {
        const cards = await CardkorCards.deleteMany({[key]: value});
        res.status(200).json(cards);
    } catch (err) {
        console.log(err)
    }
})

app.put('/cardDelete', async (req, res) => {
    const {name} = req.body;
    try {
        const cards = await CardkorCards.deleteOne({"name": name});
        res.status(200).json(cards);
    } catch (err) {
        console.log(err)
    }
})


app.listen(port, ()=>{
    //if (err) console.log(err);
    console.log(`server is runnning on http://localhost:${port}`);
});