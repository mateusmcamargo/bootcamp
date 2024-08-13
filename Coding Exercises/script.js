//#region buyMilk

//DOM
const inputMoney  = document.getElementById('startingMoney');
const inputCost   = document.getElementById('costPerBottle');
const buttonCalcMilk  = document.getElementById('buttonCalcMilk');
const inputBought = document.getElementById('bottlesPurchased');
const inputChange = document.getElementById('remainingMoney');

//buy the max number of milk bottles using the money given
function buyMilk(startingMoney, costPerBottle) {
    let bottlesPurchased;
    let remainingMoney;

    //calulate how many bottles will be bought
    bottlesPurchased = Math.floor(startingMoney / costPerBottle);

    //calculate change/remaining money
    remainingMoney   = startingMoney - (costPerBottle * bottlesPurchased);

    //return both bottles purchased and remaining money
    return [bottlesPurchased, remainingMoney];
};

//button event listener
buttonCalcMilk.addEventListener('click', () => {

    //run function, storing return
    let [bottlesPurchased, remainingMoney] = buyMilk(inputMoney.value, inputCost.value);

    //show results at inputs
    inputBought.value = `${bottlesPurchased} bottles`;
    inputChange.value = `${remainingMoney} USD`;

});

//#endregion

//#region BMI

//DOM
const inputWeight   = document.getElementById('weight');
const inputHeight   = document.getElementById('height')
const buttonCalcBMI = document.getElementById('buttonCalcBMI');
const inputBMI      = document.getElementById('bmi');
const pBMI          = document.getElementById('bimDescription');

//calculate BMI according to given weight and height
function calculateBMI(weight, height) {
    let heightSq = Math.pow(height, 2);
    let bmi = weight/heightSq;
    bmi = Math.round(bmi);
    return bmi;
}

//check if the value entered checks all requisites
//needs to be a number, not 0, not infinite
//if conditions are not met, display an error message
function checkBMI(bmi) {
    if (bmi === Infinity) {
        return "NUMBERS INCOMPLETE"
    } else
    if (bmi === 0) {
        return "NUMBERS RESULT IN 0"
    } else {
        return bmi;
    }
}

//buttonCalcBMI event listener
//get bmi inputs values and inject them at specified areas
buttonCalcBMI.addEventListener('click', () => {

    //store bmi 
    let val = calculateBMI(inputWeight.value, inputHeight.value);

    //check bmi value
    inputBMI.value = checkBMI(val);

    if (inputBMI.value < 18.5) {
        pBMI.innerText = "you are underweight.";
    } else
    if (inputBMI.value >= 18.5 && inputBMI.value <= 24.9) {
        pBMI.innerText = "you have normal weight.";
    } else {
        pBMI.innerText = "you are overweight.";
    }
});

//#endregion

//#region Math.random()

console.log("\x1b[32m%s\x1b[0m", "Math.random()");
console.log(Math.random());

//#endregion

//#region guest list

//DOM
//add
const inputGuestAdd    = document.getElementById('inputGuestAdd');
const buttonGuestAdd   = document.getElementById('buttonGuestAdd');
const pGuestAdd        = document.getElementById('pGuestAdd');
//check
const inputGuestCheck  = document.getElementById('inputGuestCheck');
const buttonGuestCheck = document.getElementById('buttonGuestCheck');
const pGuestCheck      = document.getElementById('pGuestCheck');

//variables
let guests = [];

function addGuest(guest) {
    guests.push(guest);
}

function checkGuest(guest) {
    guests.forEach((g) => {
        if (g == guest) {
            pGuestCheck.innerText = guest + ' is on the list!';
        }
    });
    
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

buttonGuestAdd.addEventListener('click', () => {
    let guestAdd = inputGuestAdd.value;
    guestAdd = capitalize(guestAdd);
    addGuest(guestAdd);
    pGuestAdd.innerText = guestAdd + ' adicionado.';
});

buttonGuestCheck.addEventListener('click', () => {
    let guestCheck = inputGuestCheck.value;
    guestCheck     = capitalize(guestCheck);
    checkGuest(guestCheck);
});

//#endregion