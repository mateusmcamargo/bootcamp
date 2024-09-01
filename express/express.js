// import express from "express"
// import bodyParser from "body-parser";
// import morgan from "morgan";
// import { fileURLToPath } from "url";
// import { dirname, join } from "path";

// //gets the page address dynamically
// const __dirname = dirname(fileURLToPath(import.meta.url));

// //create express app and set port
// const  app = express();
// const  port = 3000;
// const morganFormat = '\n--- MORGAN ---\nDATE..: :date\nURL...: :url\nSTATUS: :status\n---\n';

// //middleware

// //custom middleware function
// function logger(req, res, next) {
//     console.log('\n');
//     console.log('--- CUSTOM MIDDLEWARE ---');
//     console.log('METHOD...: ', req.method);
//     console.log('URL......: ', req.url);
//     console.log('HOST NAME: ', req.hostname);
//     console.log('---\n');
//     next();
// }

// //custom middleware calling
// app.use(logger);

// //middleware APIs
// app.use(morgan(morganFormat));
// app.use(bodyParser.urlencoded({extended: true}));

// //meant to send back a resource to the user
// app.get('/', (req, res) => {
//     // join() normalizes the path, ensuring that the OS uses the correct separator ('/' or '\')
//     res.sendFile(join(__dirname + '/public/express.html'));
// });

// app.post('/submit', (req, res) => {
//     console.log(req.body);
// })

// app.listen(port, () => {
//     console.log(`Server started at port ${port}.`);
// });

import express from "express";
import bodyParser from "body-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let user = {
    email: null,
    password: null
}

function getUserData(req, res, next) {
    console.log(req.body);
    user.email    = req.body["email"];
    user.password = req.body["password"];
    next();
}

app.use(bodyParser.urlencoded({extended: true}));


app.use(getUserData);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname + '/public/express.html'));
})

app.post('/submit', (req, res) => {
    res.send(`<h1>Welcome, ${user.email}</h1>`);
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
})