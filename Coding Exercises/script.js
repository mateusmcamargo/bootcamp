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

//calculate BMI according to given weight and height
function calculateBMI(weight, height) {
    let heightSq = Math.pow(height, 2);
    let bmi = weight/heightSq;
    bmi = Math.round(bmi);
    return bmi;
}

buttonCalcBMI.addEventListener('click', () => {
    inputBMI.value = calculateBMI(inputWeight.value, inputHeight.value);
});

//#endregion

//#region Math.random()

console.log("\x1b[32m%s\x1b[0m", "Math.random()");
console.log(Math.random());

//#endregion