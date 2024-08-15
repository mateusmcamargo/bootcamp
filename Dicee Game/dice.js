//DOM
const title  = document.querySelector('h1');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const button  = document.querySelector('button');

//dice faces images array
let rand;
const diceFaces  = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];

button.addEventListener(('click'), () => {
    rand = Math.floor(Math.random() * diceFaces.length);
    let diceIndex1 = diceFaces[rand];

    rand = Math.floor(Math.random() * diceFaces.length);
    let diceIndex2 = diceFaces[rand];  

    player1.style.backgroundImage = `url('./img/${diceIndex1}')`;
    player2.style.backgroundImage = `url('./img/${diceIndex2}')`;

    if (diceIndex1 > diceIndex2) {
        title.innerHTML = 'player 1 won!';
    } else
    if (diceIndex1 < diceIndex2) {
        title.innerHTML = 'player 2 won!';
    } else {
        title.innerHTML = 'draw`!';
    }
})