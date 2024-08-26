import {input, password, select, Separator} from "@inquirer/prompts";
import {writeFile, createWriteStream} from "node:fs";
import { title } from "node:process";
import qrcode from "qrcode";
const QRCode = qrcode;

//user default data
const defaultPassword = '1233';
const defaultUsername = 'mateus';

//amount of password guesses before system shuts down (TBD)
let passwordTries = 3;

//this function checks if a given string is an URL and returns a boolean value
function validateURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null);
};

//user inputs and validation ('login')
const user = {
    username: await input({
        message: 'username:',
        default: false,
        required: true,
        transformer: false,
        validate: (input) => {
            if (input != defaultUsername) {
                return 'invalid username, try again';
            }
            return true;
        }
    }),

    password: await password({
        message: 'password:',
        mask: true,
        validate: (input) => {
            if (input != defaultPassword) {
                if (passwordTries > 0) {
                    passwordTries--;
                    return `wrong password, ${passwordTries+1} tries remaining`;
                } else {
                    return 'ACCESS DENIED';
                }
            }
            return true;
        }
    })
}

//method to be used to create a QR code, inputs and validation
const method = await select({
    message: 'select an input to generate your QR code',
    choices: [
        new Separator(),
        {
            name:  'URL',
            value: 'URL',
            description: 'creates a QR code to access a website'
        },
        {
            name:  'file',
            value: 'file',
            description: 'creates a QR code for a file'
        },
        new Separator()
    ],
});

//checks for the chosen method
const svg = {
    path: `./data/qr-code.svg`,
}
const txt = {
    path: `./data/url.txt`,
};

switch(method) {

    //for an URL, wait for an input and check if th string is an URL using the validateURL() function
    case 'URL':
        const URL = await input({
            message: 'enter the URL: ',
            default: 'https.domain.com',
            validate: (input) => {
                if (validateURL(input) === false) {
                    return 'invalid URL';
                }
                return true;
            }
        });

        //if everything checks out, log the results (temporary)
        console.log('\n');
        console.log(`The method chosen was ${method}`);
        console.log(`The ${method} given was ${URL}`);
        console.log('\n');
        
        //save user imput to .txt file
        writeFile(txt.path, URL,
            {
                encoding: 'utf-8',
                flag: 'w'
            },
            (error) => {
                if (error) {
                    throw error;
                }
                console.log(`The ${method} ${URL} was saved at ${txt.path}`);
                console.log('\n');
            }
        );
        
        QRCode.toFile(svg.path, URL, {
            color: {
                dark:  '#000000',
                light: '#FFFFFF'
            }
        }, (error) => {
            if (error) throw error;
            console.log(`the QR code was generated as an image at ${svg.path}`);
        });
        //console.log(`generating a QR code of ${URL} via ${method}...`);
    break;

    case 'file':

    break;
}


//#endregion

