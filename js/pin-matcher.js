function generatePin(){
    const randomNumber = Math.round(Math.random()*10000);
    return randomNumber;
}

function getPin(){
    const pin = generatePin();
    const pinSting = pin + '';
    if(pinSting.length === 4){
        return pinSting;
    }
    else{
        // console.log("3 digit" , pinSting)
        return getPin();
    }
}
function getInputValueById(inputId){
    const inputElement = document.getElementById(inputId);
    const inputValue = inputElement.value;
    return inputValue;
}
document.getElementById('generate-pin').addEventListener('click', function(){
    const display = document.getElementById('display');
    const pin = getPin();
    display.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const numberTypedField = document.getElementById('number-typed');
    const previousNumberTyped = numberTypedField.value;
    if(isNaN(number)){
        if(number === "C"){
            numberTypedField.value = '';
        }
        else if(number === '<'){
            const digit = previousNumberTyped.split('') ;
            digit.pop();
            const remainingDigit = digit.join('');
            numberTypedField.value = remainingDigit;
        }
    }
    else{
        const newNumberTyped = previousNumberTyped + number;
        numberTypedField.value = newNumberTyped;
    }
})

document.getElementById('submit-pin').addEventListener('click', function(){
    const displayValue = getInputValueById('display');
    const userTyped = getInputValueById('number-typed');

    const successPin = document.getElementById('success-pin');
    const wrongPin = document.getElementById('wrong-pin');
    if(displayValue === userTyped){
        successPin.style.display = 'block';
        wrongPin.style.display = 'none';
        alert('Congratulations! Secret door is opening for you')
        location.reload()
    }
    else{
        successPin.style.display = 'none';
        wrongPin.style.display = 'block';
    }
})
