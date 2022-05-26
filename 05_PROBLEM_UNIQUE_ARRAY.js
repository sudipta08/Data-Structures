// Problem statement: Given an array, count the number of unique elements in it

// Approach 1: works for sorted and unsorted array
function countUniqueValues(input) {
    const uniqueValuesObj = {};

    for (let val of input) {
        uniqueValuesObj[val] = ++uniqueValuesObj[val] || 1;
    }

    return Object.keys(uniqueValuesObj).length;
}

// Approach 2: multiple pointers pattern (don't like it much) and it works for a sorted array
function countUniqueValues2(input) {
    if (!input.length) return 0;
    let i = 0;
    for (let j = 0; j < input.length; j++) {
        if (input[i] !== input[j]) {
            i++;
            input[i] = input[j];
        }
    }

    return i + 1;
}

// Approach 3: using Set object
function countUniqueValues3(input) {
    const uniqueValues = new Set(input);
    return uniqueValues.size;
}

const testCase1 = [];
const testCase2 = [-2,2,3,3,4];
console.log(countUniqueValues(testCase1));
console.log(countUniqueValues(testCase2));

console.log(countUniqueValues2(testCase1));
console.log(countUniqueValues2(testCase2));

console.log(countUniqueValues3(testCase1));
console.log(countUniqueValues3(testCase2));