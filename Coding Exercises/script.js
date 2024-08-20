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
//add guests elements
const inputGuestAdd    = document.getElementById('inputGuestAdd');
const buttonGuestAdd   = document.getElementById('buttonGuestAdd');
const pGuestAdd        = document.getElementById('pGuestAdd');
//check guests elements
const inputGuestCheck  = document.getElementById('inputGuestCheck');
const buttonGuestCheck = document.getElementById('buttonGuestCheck');
const pGuestCheck      = document.getElementById('pGuestCheck');

//variables
let guests = [];

// function captilize(string)
//  takes a 'string' as argument and returns a new one, where the first char is capitalized, keeping the others unchanged
//  'charAt(0)' gets the first char of 'string', then 'toUpperCase()' capitalizes it
//  this first char is then concatenated with the rest of the string using 'slice(1)'
//  returns newString
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// function addGuest(guest)
//  adds a guest to the end of the 'guests' array using the method 'push'
function addGuest(guest, infoElement) {
    guest = capitalize(guest);
    guests.push(guest);
    infoElement.innerText = guest + ' adicionado.';
}

// function checkGuest(guest, infoElement)
//  checks if a given 'guest' (string) exists in the 'guests' array
//  based on the output displays a diferent message on a given 'infoElement'
function checkGuest(guest, infoElement) {
    guest = capitalize(guest);
    //check if array is empty
    if (guests.length <= 0) {
        infoElement.innerText = 'the guest list is empty :(';
    } else {
        //guest = capitalize(guest);
        //check 'typeof' 'guest' and if it is empty
        if (guest === "" || typeof(guest) !== "string") {
            infoElement.innerText = 'please enter a valid name';
        } else {
            //if everything checks out, confirm 'guest' is on the list
            if (guests.includes(guest)) {
                infoElement.innerText = guest + ' is on the list!';
                return;
            } else {
                //if something goes wrong, confirm 'guest' is NOT on the list
                infoElement.innerText = guest + ' is NOT on the list :(';
            }
        }
    }
}

// eventListener for buttonGuestAdd
// the input value string is added to the 'guests' array using the 'guestAdd()' function
buttonGuestAdd.addEventListener('click', () => {
    let guestAdd = inputGuestAdd.value;
    addGuest(guestAdd, pGuestAdd);
});

buttonGuestCheck.addEventListener('click', () => {
    let guestCheck = inputGuestCheck.value;
    checkGuest(guestCheck, pGuestCheck);
});

//#endregion

//#region FizzBuzz

    // Given an integer n, return a string array answer (1-indexed) where:

    // answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    // answer[i] == "Fizz" if i is divisible by 3.
    // answer[i] == "Buzz" if i is divisible by 5.
    // answer[i] == i (as a string) if none of the above conditions are true.

//DOM
const inputFizzBuzz  = document.getElementById('inputFizzBuzz');
const buttonFizzBuzz = document.getElementById('buttonFizzBuzz');
const outputFizzBuzz = document.getElementById('outputFizzBuzz');

buttonFizzBuzz.addEventListener('click', () => {
    
    // disclaimer:
    // probably could use number.push() and number.pop() instead and manipulate the array in a different way

    let number = [];
    outputFizzBuzz.textContent = "";

    if (inputFizzBuzz.value >= 1 && inputFizzBuzz.value <= 62) {

        number.length = inputFizzBuzz.value;

        let i = 0;
        while(i < number.length) {
            let answer = document.createElement('p');
            answer.classList.add('fizz-buzz');

            if ((number.length % 3 === 0) && (number.length % 5 === 0)) {
                answer.textContent = 'FizzBuzz';
            } else
            if (number.length % 3 === 0) {
                answer.textContent = 'Fizz';
            } else
            if (number.length % 5 === 0) {
                answer.textContent = 'Buzz';
            } else {
                answer.textContent = number.length.toString();
            }
            outputFizzBuzz.appendChild(answer);
            number.length --;
        }

    } else {
        outputFizzBuzz.textContent = "invalid number";
    }
});



//#endregion

//#region finobacci 

//DOM
const inputFinobacci  = document.getElementById('inputFinobacci');
const buttonFinobacci = document.getElementById('buttonFinobacci');
const outputFinobacci = document.getElementById('outputFinobacci');

function finobacciGenerator(num) {
    let finobacci = [];
    outputFinobacci.textContent = "";

    if (inputFinobacci.value >= 1 && inputFinobacci.value <= 40) {

        let i = 0;

        while(i <= num) {
            let p = document.createElement('p');
            p.classList.add('finobacci');

            if (i === 0 || i === 1) {
                finobacci.push(i);
            } else {
                finobacci.push((finobacci[i-1]) + (finobacci[i-2]));
            }
            p.textContent = finobacci[i];
            outputFinobacci.appendChild(p);
            i++;
        }
    } else {
        outputFinobacci.textContent = "invalid number";
    }
}

buttonFinobacci.addEventListener('click', () => {
    finobacciGenerator(inputFinobacci.value);
});


//#endregion

//#endregion

//#region calculator

//DOM


//#endregion

