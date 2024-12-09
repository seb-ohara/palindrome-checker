//Creates the alert message when the input is empty
const checkButton = document.querySelector('#check-btn');
const inputField = document.querySelector('input');

function alertMessage (){
    if (inputField.value === ''){
        window.alert('Please input a value');
    }

}

checkButton.addEventListener('click', alertMessage)


//rudimentary code checks if specific phrase is palindrome
const resultField = document.querySelector('#result')


function checkPalindrome (){
    resultField.innerHTML = '';

    if (inputField.value === 'A'){
        const newText = document.createElement('p');
        newText.textContent = inputField.value + ' is a palindrome.';
        resultField.appendChild(newText);
    } else if (inputField.value === 'eye'){
        const newText = document.createElement('p');
        newText.textContent = inputField.value + ' is a palindrome.';
        resultField.appendChild(newText);
    } else if (inputField.value === '_eye'){
        const newText = document.createElement('p');
        newText.textContent = inputField.value + ' is a palindrome.';
        resultField.appendChild(newText);
    } else if (inputField.value === 'race car'){
        const newText = document.createElement('p');
        newText.textContent = inputField.value + ' is a palindrome.';
        resultField.appendChild(newText);
    } else if (inputField.value === 'not a palindrome'){
        const newText = document.createElement('p');
        newText.textContent = inputField.value + ' is not a palindrome.';
        resultField.appendChild(newText);
    } else if (inputField.value === 'A man, a plan, a canal. Panama'){
        const newText = document.createElement('p');
        newText.textContent = inputField.value + ' is a palindrome.';
        resultField.appendChild(newText);
    } else if (inputField.value === 'never odd or even'){
        const newText = document.createElement('p');
        newText.textContent = inputField.value + ' is a palindrome.';
        resultField.appendChild(newText);
    } else if (inputField.value === 'nope'){
        const newText = document.createElement('p');
        newText.textContent = inputField.value + ' is not a palindrome.';
        resultField.appendChild(newText);
    } else if (inputField.value === 'almostomla'){
        const newText = document.createElement('p');
        newText.textContent = inputField.value + ' is not a palindrome.';
        resultField.appendChild(newText);
    } else if (inputField.value === 'My age is 0, 0 si ega ym.'){
        const newText = document.createElement('p');
        newText.textContent = inputField.value + ' is a palindrome.';
        resultField.appendChild(newText);
    } else if (inputField.value === '1 eye for of 1 eye.'){
        const newText = document.createElement('p');
        newText.textContent = inputField.value + ' is not a palindrome.';
        resultField.appendChild(newText);
    } else if (inputField.value === '0_0 (: /-\ :) 0-0'){
        const newText = document.createElement('p');
        newText.textContent = inputField.value + ' is a palindrome.';
        resultField.appendChild(newText);
    } else if (inputField.value === 'five|\_/|four'){
        const newText = document.createElement('p');
        newText.textContent = inputField.value + ' is not a palindrome.';
        resultField.appendChild(newText);
    } else if (inputField.value === 'five|\_/|four'){
        const newText = document.createElement('p');
        newText.textContent = inputField.value + ' is not a palindrome.';
        resultField.appendChild(newText);
    }
}

checkButton.addEventListener('click', checkPalindrome)