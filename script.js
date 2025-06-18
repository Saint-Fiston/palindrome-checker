document.addEventListener('DOMContentLoaded', function() {
    const checkBtn = document.getElementById('check-btn');
    const textInput = document.getElementById('text-input');
    const resultDiv = document.getElementById('result');
    
    checkBtn.addEventListener('click', function() {
        const inputValue = textInput.value.trim();
        
        if (inputValue === '') {
            alert('Please input a value');
            return;
        }
        
        const isPalindrome = checkPalindrome(inputValue);
        const resultText = isPalindrome 
            ? `${inputValue} is a palindrome` 
            : `${inputValue} is not a palindrome`;
        
        resultDiv.textContent = resultText;
    });
    
    function checkPalindrome(str) {
        // Remove all non-alphanumeric characters and convert to lowercase
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        
        // Check if the cleaned string is empty (only had non-alphanumeric chars)
        if (cleanedStr === '') {
            return false;
        }
        
        // Compare the string with its reverse
        return cleanedStr === cleanedStr.split('').reverse().join('');
    }
});