function checkOddEven() {
    const numberInput = document.getElementById('number-input').value;
    const resultMessage = document.getElementById('result-message');

    // Check if input is empty or invalid
    if (numberInput === '') {
        resultMessage.textContent = "Please enter a number!";
        resultMessage.classList.remove('hidden');
        resultMessage.classList.remove('even', 'odd');
    } else {
        const number = parseInt(numberInput);

        // Validate that the input is a number
        if (isNaN(number)) {
            resultMessage.textContent = "Please enter a valid number!";
            resultMessage.classList.remove('hidden');
            resultMessage.classList.remove('even', 'odd');
        } else {
            // Check if number is even or odd
            if (number % 2 === 0) {
                resultMessage.textContent = `${number} is Even!`;
                resultMessage.classList.add('even');
                resultMessage.classList.remove('odd');
            } else {
                resultMessage.textContent = `${number} is Odd!`;
                resultMessage.classList.add('odd');
                resultMessage.classList.remove('even');
            }
            resultMessage.classList.remove('hidden');
        }
    }
}
