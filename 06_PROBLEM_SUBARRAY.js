// Problem Statement: Given an array, find the max sum of consecutive numbers

// Approach 1: pretty simple but naive
function maxSubArraySum(input, n) {
    let maxSum = -Infinity;

    for (let i = 0; i < input.length - n + 1; i++) {
        let totalSum = input[i];
        for (let j = i + 1; j < i + n; j++) {
            totalSum = totalSum + input[j];
        }
        if (totalSum > maxSum) maxSum = totalSum;
    }
    return maxSum;
}

// Approach 2: sliding window pattern
function maxSubArraySum2(input, n) {
    let maxSum = -Infinity;
    let tempSum = 0;

    if (!input.length) return null;

    for (let i = 0; i < n; i++) {
        tempSum += input[i];
    }

    for (let j = n; j < input.length; j++) {
        tempSum = tempSum + input[j] - input[j - n];// add the current element and remove first element of the previous pair
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

const testCase1 = [1,2,5,2,8,1,5];
console.log(maxSubArraySum(testCase1, 2));
console.log(maxSubArraySum(testCase1, 4));
console.log(maxSubArraySum2(testCase1, 2));
console.log(maxSubArraySum2(testCase1, 4));