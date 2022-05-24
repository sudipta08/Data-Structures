// Problem statement: Given two strings find if second is an anagram of first
// anagram means a word or a phrase that we get by rearranging the letters of another one

function isAnagram(string1, string2) {
    if (string1.length !== string2.length) return false;

    const lookupObj = {};

    for (let str of string1) {
        lookupObj[str] = ++lookupObj[str] || 1;
    }

    for (let str of string2) {
        if (lookupObj[str]) {
            --lookupObj[str];
        } else {
            return false;
        }
    }

    return true;
}

const testCase1 = ['', ''];
const testCase2 = ['qwerty', 'twerqy'];
const testCase3 = ['adam', 'eve'];
const testCase4 = ['adam', 'wert'];
console.log(isAnagram(testCase1[0], testCase1[1]));
console.log(isAnagram(testCase2[0], testCase2[1]));
console.log(isAnagram(testCase3[0], testCase3[1]));
console.log(isAnagram(testCase4[0], testCase4[1]));