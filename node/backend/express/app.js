import express from 'express';
import mongoose from "mongoose";

const dbURL = "mongodb://localhost:27017/FunGames";
const app = express();
const port = process.env.PORT || 3003;

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

const peopleSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Age: Number
});
const People = mongoose.model('people', peopleSchema);

app.post('/add-card', async (req, res) => {
    const { FirstName, LastName, Email, Age } = req.body;
    const newCard = new People({ FirstName, LastName, Email, Age});
    try {
        const savedCard = await newCard.save();
        res.status(201).json(savedCard);
    } catch (err) {
        console.log(err);
    }
})

app.put('/edit-card', (req, res) => {
    const { id, FirstName, LastName, Email, Age } = req.body;
    db.products.updateOne(
        { _id: id }, 
        { $set: { FirstName: FirstName, LastName: LastName, Email: Email, Age: Age}}
    )
})

app.get('/cards', async (req, res) => {
    try {
        const cards = await People.find(req.query);
        res.json(cards);
    } catch (err) {
        console.log(err);
    }
});

app.get('/card', async (req, res) => {
    try {
        const cards = await People.findOne();
        res.status(200).json(cards);
    } catch (err) {
        console.log(err)
    }
})

app.delete('/cardsdelete', async (req, res) => {
    const {key, value} = req.body;
    try {
        const cards = await People.deleteMany({[key]: value});
        res.status(200).json(cards);
    } catch (err) {
        console.log(err)
    }
})

app.delete('/carddelete', async (req, res) => {
    const {name} = req.body;
    try {
        const cards = await People.deleteOne({"_id": name});
        res.status(200).json(cards);
    } catch (err) {
        console.log(err)
    }
})

app.put('/editperson', (req, res) => {

})

app.get('/cards', async (req, res) => {

})


app.listen(port, ()=>{
    //if (err) console.log(err);
    console.log(`server is runnning on http://localhost:${port}`);
});