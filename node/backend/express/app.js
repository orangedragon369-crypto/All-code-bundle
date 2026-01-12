import express from 'express';
//import session from 'express-session';
import fs from 'fs';
//import passport from 'passport';

const app = express();
const port = process.env.port || 3000;
 /*
start here to configureServer =>
    app.use(passport.initialize());
    app.use(passport.session());
end

configureServer();
passportConfig(passport);
createRoutes();

app.use
Start here to createRoutes => 
    app.use("/auth", authRoutes(express, passport));

end
 */
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

function configureServer(){

}

function createRoutes(){

}

/*notes:
app.get(

`/.*fly$/`, (req, res)=>{
    res.send(`/.*fly$`);

`/{my}classTime/:from-:to`, (req,res)=>{
    let from = req.params.from;
    let to = req.params.to;
});    
*/