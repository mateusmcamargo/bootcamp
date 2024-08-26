// var generateName = require('sillyname');
import generateStupidName from "sillyname";
import superheroes, { randomSuperhero } from 'superheroes';

let names = [];
const num = 10;

for(let i = 0; i < num; i ++) {
    names[i] = generateStupidName();
}
console.log(names);

let superheroName = randomSuperhero();
console.log(`I am ${superheroName}!`);