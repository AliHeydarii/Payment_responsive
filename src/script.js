// SELECTORS
const cartNumber = document.querySelectorAll('.cartNumber > input');
const showNumberCart = document.querySelector('.show_numbercart');
const cvv = document.querySelector('.cvv2 > input');
const showCvv2Number = document.querySelector('.show_cvv2number');
const exp = document.querySelectorAll('.EXP > input');
const showExp = document.querySelector('.show_EXP');
const secondPassInput = document.querySelector('.secondPassInput input');

const cartNumberSm = document.querySelectorAll('.cartNumber_sm > input');
const showNumberCartSm = document.querySelector('.show_numbercart_sm');
const cvvSm = document.querySelector('.cvv2_sm');
const showCvv2NumberSm = document.querySelector('.show_cvv2number_sm');
const expSm = document.querySelectorAll('.EXP_sm > input');
const showExpSm = document.querySelector('.show_EXP_sm');
const secondPassInputSm = document.querySelector('.secondPassInput_sm');

const ul = document.querySelector('.keypad_cvv');
const keypadItems = document.querySelectorAll('.keypad_cvv > li');

// FUNCTION TO GENERATE RANDOM NUMBERS FOR KEY PAD
function generateRandomNumbers() {
    const randNum = [];
    keypadItems.forEach(() => {
        let x = Math.floor(Math.random() * 10);
        while (randNum.includes(x)) {
            x = Math.floor(Math.random() * 10);
        }
        randNum.push(x);
        keypadItems[keypadItems.length - randNum.length].innerHTML = randNum[randNum.length - 1];
    });
}

generateRandomNumbers();

// CARD NUMBER HANDLING
cartNumber.forEach((el, i) => {
    el.addEventListener('keyup', (e) => {
        if (el.value.length >= 4) {
            if (el.value.length > 4) el.value = el.value.slice(0, 4);
            (i !== 3) ? el.nextElementSibling.focus() : cvv.focus();
        } else if (el.value.length === 0 && e.keyCode === 8 && i !== 0) {
            el.previousElementSibling.focus();
        }

        // UPDATE DISPLAYED CARD NUMBER
        let temp = '';
        cartNumber.forEach((item, idx) => {
            temp += item.value;
            if (item.value.length === 4 && idx !== 3) temp += '-';
        });
        showNumberCart.innerText = temp;
    });
});

// CVV2 HANDLING
cvv.addEventListener('keyup', () => {
    if (cvv.value.length > 0) {
        cvv.value = cvv.value.slice(0, 5);
        showCvv2Number.innerText = cvv.value;
        if (cvv.value.length >= 5) exp[0].focus();
    }
});

// EXP HANDLING
exp.forEach((input) => {
    input.addEventListener('keyup', () => {
        if (input.value.length > 2) input.value = input.value.slice(0, 2);
        const month = exp[0].value.padEnd(2, '·');
        if (exp[0].value.length >= 2) exp[1].focus();
        const year = exp[1].value.padEnd(2, '·');
        showExp.innerText = `${month}/${year}`;
        if (exp[1].value.length >= 2) secondPassInput.focus();
    });
});

// SECOND PASSWORD HANDLING
secondPassInput.addEventListener('keyup', () => {
    if (secondPassInput.value.length > 15) {
        secondPassInput.value = secondPassInput.value.slice(0, 15);
    }
});

// MOBILE CARD NUMBER HANDLING
cartNumberSm.forEach((el, i) => {
    el.addEventListener('keyup', (e) => {
        if (el.value.length >= 4) {
            if (el.value.length > 4) el.value = el.value.slice(0, 4);
            (i !== 3) ? el.nextElementSibling.focus() : cvvSm.focus();
        } else if (el.value.length === 0 && e.keyCode === 8 && i !== 0) {
            el.previousElementSibling.focus();
        }

        // UPDATE DISPLAYED CARD NUMBER (MOBILE)
        let temp = '';
        cartNumberSm.forEach((item, idx) => {
            temp += item.value;
            if (item.value.length === 4 && idx !== 3) temp += '-';
        });
        showNumberCartSm.innerText = temp;
    });
});

// CVV2 HANDLING (MOBILE)
cvvSm.addEventListener('keyup', () => {
    if (cvvSm.value.length > 0) {
        cvvSm.value = cvvSm.value.slice(0, 5);
        showCvv2NumberSm.innerText = cvvSm.value;
        if (cvvSm.value.length >= 5) expSm[0].focus();
    }
});

// EXP HANDLING (MOBILE)
expSm.forEach((input) => {
    input.addEventListener('keyup', () => {
        if (input.value.length > 2) input.value = input.value.slice(0, 2);
        const month = expSm[0].value.padEnd(2, '·');
        if (expSm[0].value.length >= 2) expSm[1].focus();
        const year = expSm[1].value.padEnd(2, '·');
        showExpSm.innerText = `${month}/${year}`;
        if (expSm[1].value.length >= 2) secondPassInputSm.focus();
    });
});

// SECOND PASSWORD HANDLING (MOBILE)
secondPassInputSm.addEventListener('keyup', () => {
    if (secondPassInputSm.value.length > 15) {
        secondPassInputSm.value = secondPassInputSm.value.slice(0, 15);
    }
});

let flag = 0;
function toggleKeypad() {
    if (flag % 2) {
        ul.style.display = 'none';
    } else {
        ul.style.display = 'flex';
    }
    flag++;
}

keypadItems.forEach((val) => {
    val.addEventListener('click', () => {
        cvv.value += val.innerText;
        cvv.value = cvv.value.slice(0, 5);
        if (cvv.value.length >= 5) exp[0].focus();
    });
});
    // Developer //
    const myClose = document.getElementById('myClose')
    const mybox = document.getElementById('box')
    myClose.addEventListener('click', () => {
        mybox.style.display = 'none'
    })