import express from "express";
//import bodyParser from "body-parser";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let authorized = false;

app.use(express.urlencoded({extended: true}));

// body parser is now incorporated in express
//app.use(bodyParser.urlencoded({extended: true}));

function passwordCheck(req, res, next) {
    const password = req.body['password'];
    if (password === 'hmmsegredo') {
        authorized = true;
    }
    next();
}

app.use(passwordCheck);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname + '/public/index.html'));
});

app.post('/check', (req, res) => {
    if (authorized === true) {
        res.sendFile(join(__dirname + '/public/secret.html'));
    } else {
        res.sendFile(join(__dirname + '/public/index.html'));
    }
})

app.listen(port, (req, res) => {
    console.log(`Listening at port ${port}`);
});