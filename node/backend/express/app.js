import express from 'express';
import fs from 'fs';

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static('./public'));

app.get('/', (req, res)=>{
    res.end("Hello, Express!")
})

app.get('/time', (req, res) => {
    res.send(`Current server time: ${new Date()}`);
});

app.get('/file', (req, res) => {
    fs.readFile('./recipe.html', "utf-8", (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

app.post('/user', (req, res) => {
    const email = req.body.email;
    const name = `${req.body.firstname} ${req.body.lastname}`;
    const password = req.body.password;
    res.send(`POST request recived. Now creating ${name} with email ${email} and password ${password} on ${new Date()} `)
});

app.listen(port, ()=>{
    console.log(`server is runnning on http://localhost:${port}`);
});
