const inputNumber = document.getElementById('number')
const convertBtn = document.getElementById('convert-btn')
const resultText = document.getElementById('result-text')
const outputDiv = document.getElementById('output')

const validInput = () => {
    outputDiv.style.cssText = "border:none; background-color:white; color:black;";
    outputDiv.style.display = "flex";
}

const invalidInput = () => {
    outputDiv.style.cssText = "border: 3px solid #A41F13; background-color: #FA5343; color: white;";
    outputDiv.style.display = "flex";
}

// Integer to Roman Numeral Algo
const intToRoman = (num) => {
    const romanValues = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let roman = '';

    for (let key in romanValues) {
        while (num >= romanValues[key]) {
            roman += key;
            num -= romanValues[key];
        }
    }
    return roman
}

// Check to see if User's input is valid (not negative/num <= 3999)
const checkUserInput = () => {
    const num = parseInt(inputNumber.value);

    if (isNaN(num)) {
        resultText.textContent = `Please enter a valid number`;
        invalidInput();
        return;
    }

    if (num === 0) {
        resultText.textContent = `0`;
        validInput();
        return;
    } else if (num > 3999) {
        resultText.textContent = `Please enter a number less than or equal to 3999`;
        invalidInput();
        return;
    } else if (num < 0) {
        resultText.textContent = `Please enter a number greater than or equal to 1`;
        invalidInput();
        return;
    } else {
        const romanNumeral = intToRoman(num);
        resultText.textContent = romanNumeral;
        validInput();
    }
};

convertBtn.addEventListener('click', checkUserInput);

// Allow User to hit 'enter' key rather than have to click 'convert'
inputNumber.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkUserInput();
    }
});
