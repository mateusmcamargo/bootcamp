const fs = require('fs');

const content = [
    'Hello World! [from Node.js :o]',
    'This is a new text line.'
]

content.forEach(element => {
    fs.writeFile('text.txt', element, (error) => {
        if (error) throw error;
        console.log('[SUCESS] FILE SAVED');
    });
});

fs.readFile('text.txt', 'utf-8', (error, data) => {
    if (error) throw error;
    console.log(data);
});