//Creates the alert message when the input is empty
const checkButton = document.querySelector('#check-btn');
const inputField = document.querySelector('#text-input');
const resultField = document.querySelector('#result');

function alertMessage (){
    if (inputField.value === ''){
        window.alert('Please input a value');
    }
}

//code for checking if text is a palindrome
checkButton.addEventListener('click', alertMessage);


function palindrome () {
    const normalized = inputField.value.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    const reversed = normalized.split('').reverse().join('')

     const newText = document.createElement('p');
    if (normalized === reversed) {
        newText.textContent = `${inputField.value} is a palindrome.`;
    } else {
        newText.textContent = `${inputField.value} is not a palindrome.`;
    }

    resultField.innerHTML = '';
    resultField.appendChild(newText);
}

checkButton.addEventListener('click', palindrome);
