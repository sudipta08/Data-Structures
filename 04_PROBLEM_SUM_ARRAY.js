// Problem statement: Given an array find the first pair of elements where sum is 0

// this is multiple pointers pattern and solution works for a sorted array
// we can have two pointers, one pointing to the start of the array and another one to the end of the array
// till we get the sum as more than what we want, we shift to the right otherwise we shift to the left

function sumZero(input) {
    let left = 0;
    let right = input.length - 1;

    while (left < right) {
        const sum = input[left] + input[right];
        if (sum === 0) return [input[left], input[right]];
        else if (sum > 0) right--;
        else left++;
    }

    return [];
}

const testCase1 = [-3,4,5];
const testCase2 = [-2,-1,0,2,4];
console.log(sumZero(testCase1));
console.log(sumZero(testCase2));