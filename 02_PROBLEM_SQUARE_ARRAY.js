// Problem Statement: Given two arrays, print true if square of elements of first array is present in the second array
// Note that each element should have it's square
// example: [1, 1, 2], [1, 4, 4] should return false

// this is frequency counter pattern, better version is in 03_PROBLEM_ANAGRAM
// create objects from two arrays with distinct values and their count by looping through them
// loop through the first array object
    // if key square is not present in second array object return false
    // if key square is not present the exact number of times return false

function areArraysSame(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    const array1Counter = {};
    const array2Counter = {};

    for (let val of array1) {
        array1Counter[val] = ++array1Counter[val] || 1;
    }

    for (let val of array2) {
        array2Counter[val] = ++array2Counter[val] || 1;
    }

    for (key in array1Counter) {
        if (!array2Counter[key ** 2] || (array1Counter[key] !== array2Counter[key ** 2])) {
            return false;
        }
    }

    return true;
}

const testCase1 = [[1,2,3], [9,4,1]];
const testCase2 = [[1,1,3], [1,9,4]];
const testCase3 = [[1,2,3], [0,1,2]];
console.log(areArraysSame(testCase1[0], testCase1[1]));
console.log(areArraysSame(testCase2[0], testCase2[1]));
console.log(areArraysSame(testCase3[0], testCase3[1]));