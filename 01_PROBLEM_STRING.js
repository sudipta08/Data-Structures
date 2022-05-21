// Problem statement: Given a string, print the count of occurrence of each letter in it

// loop through each character of the string
    // if the character (alphanumeric) is present in the output, then increment the count by 1
    // if the character (alphanumeric) is not present, then add it to the output


// Approach 1: Regex generally takes longer
function charCountWithRegex(inputString) {
    const output = {};
    const str = inputString.toLowerCase();
    
    for (let char of str) {
        if ((/[a-z0-9]/).test(char)) {
            output[char] = ++output[char] || 1;
        }
    }

    return output;
}

// Approach 2: Faster than above
function isAlphaNumeric(char) {
    const charCode = char.charCodeAt();
    if ((charCode >= 48 && charCode <= 57) || (charCode >= 97 && charCode <= 122) ) {
        return true;
    }
    return false;
}

function charCountWithUnicode(inputString) {
    const output = {};
    const str = inputString.toLowerCase();
    
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            output[char] = ++output[char] || 1;
        }
    }

    return output;
}

console.log(charCountWithRegex('Hello12113  @#'));
console.log(charCountWithUnicode('Hello1'));