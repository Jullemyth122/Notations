// O(1) - Constant time
// Array index access — always takes the same time regardless of input size
function getFirstElement(arr) {
    return arr[0]; // Always 1 operation
}

// O(1) - Object property lookup (hash map style)
// JavaScript objects act as hash tables — average-case O(1) lookup
const userDatabase = {
    "user123": { name: "Alice", age: 30 },
    "user456": { name: "Bob", age: 25 }
};

function getUserAge(userId) {
    const user = userDatabase[userId];
    return user ? user.age : null; // Lookup + optional property access — always constant
}

// O(1) - Set membership check
// Set.has() is average-case O(1) due to internal hashing
const bannedIPs = new Set(["192.168.1.1", "10.0.0.5", "172.16.0.1"]);

function isBanned(ip) {
    return bannedIPs.has(ip); // Single hash lookup — constant time
}


// O(1) - Stack operations (push/pop from end of array)
// Array push/pop are amortized O(1)
function stackOperation(stack, operation, value = null) {
    if (operation === "push") {
        stack.push(value);              // O(1) amortized
        return stack;
    } else if (operation === "pop") {
        return stack.pop();             // O(1) amortized
    }
}


// O(1) - Multiple constant operations combined
// Even with arithmetic, conditionals, and property accesses — still O(1)
function calculateTax(priceObj) {
    const basePrice = priceObj.amount;
    const rate = priceObj.isLuxury ? 0.20 : 0.10;  // Conditional — constant
    const tax = basePrice * rate;                  // Arithmetic — constant
    const total = basePrice + tax + priceObj.shipping; // More constants

    return {
        tax: tax.toFixed(2),
        total: total.toFixed(2)
    };
}

// O(log n) - Logarithmic time
// Binary search on a sorted array — halves the search space each step
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}


// O(log n) - Integer square root via binary search
// Finds the largest integer whose square is <= n
function integerSquareRoot(n) {
    if (n < 0) return -1;
    if (n === 0 || n === 1) return n;

    let left = 1;
    let right = n;
    let result = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        // Use division to avoid overflow
        if (mid <= n / mid) {
            result = mid;
            left = mid + 1;     // Try larger
        } else {
            right = mid - 1;    // Too big
        }
    }
    return result;
}
// Halves the range [1..n] each step → O(log n)

// O(log n) - Fast exponentiation (exponentiation by squaring)
// Computes base^exponent in logarithmic steps
function fastPow(base, exponent) {
    if (exponent < 0) return NaN; // Not handling negatives here
    let result = 1;
    let currentBase = base;

    while (exponent > 0) {
        if (exponent % 2 === 1) {
            result *= currentBase;
        }
        currentBase *= currentBase;   // Square the base
        exponent = Math.floor(exponent / 2); // Halve the exponent
    }
    return result;
}
// Reduces exponent by half each iteration → O(log exponent)

// O(log n) - Find peak element in a unimodal array
// Array rises to a peak then falls (guaranteed one peak)
// Returns any peak index
function findPeak(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] < arr[mid + 1]) {
            // Peak must be on the right side
            left = mid + 1;
        } else {
            // Peak is here or on the left
            right = mid;
        }
    }
    return left; // left === right at end
}
// Each step eliminates half the array → O(log n)

// O(log n) - Binary search in a rotated sorted array
// Finds target in array that was sorted then rotated
function searchRotated(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;

        // Left half is sorted
        if (arr[left] <= arr[mid]) {
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Right half is sorted
        else {
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}
// Still halves the search space each step → O(log n)

// O(n) - Linear time
// Linear search — checks each element once in the worst case
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

// O(n) - linear time 
// find max element in an array
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Time: O(n) - one iteration through the entire array
// Space: O(1) - only one variable to store the max value

// O(n) - linear time
// find the sum of all elements in an array
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Time: O(n) - one iteration through the entire array
// Space: O(1) - only one variable to store the sum

// O(n) - linear time
// Swaps elements from both ends moving towards the center
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

// Time: O(n) - one iteration through the entire array
// Space: O(1) - only one variable to store the left and right pointers

// O(n) - linear time
// Scans the entire array and increments counter when match is found
function countOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}

// Time: O(n) - one iteration through the entire array
// Space: O(1) - only one variable to store the count

// O(n) - linear time, space O(n) 
// Create a copy of the array and reverse it
function reverseArrayCopy(arr) {
    return arr.slice().reverse();
}

// Time: O(n) - one iteration through the entire array
// Space: O(n) - creates a copy of the array

// O(n) - linear time, space O(n)
// Reverse an array by building a new array (instead of in-place swapping)
function reverseArrayNew(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// Time: O(n) - one iteration through the entire array
// Space: O(n) - creates a new array of the same size

// O(n) - linear time, space O(n)
// Count the frequency of each element in an array 
function frequencyCounter(arr) {
    const frequency = {};
    for (let i = 0; i < arr.length; i++) {
        frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
    }
    return frequency;
}

// Time: O(n) - one iteration through the entire array
// Space: O(n) - creates a new object to store the frequency

// O(n) time, O(n) space
// Convert string to uppercase by creating a new string
// (Strings are immutable in JS, so any transformation creates new space)
function toUpperCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i].toUpperCase();
    }
    return result;
}
// Time: O(n) — processes each character once
// Space: O(n) — builds a new string of length n


// O(n log n) - Linearithmic time
// Efficient sorting (JavaScript's built-in sort is typically O(n log n))
function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b); // Timsort or similar in V8
}

// Alternative explicit merge sort implementation
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// O(n²) - Quadratic time
// Bubble sort — nested loops compare and swap every pair
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// O(2ⁿ) - Exponential time
// Naive Fibonacci — each call branches into two recursive calls
function fibonacciExponential(n) {
    if (n <= 1) return n;
    return fibonacciExponential(n - 1) + fibonacciExponential(n - 2);
}

// O(n!) - Factorial time
// Generating all permutations of an array (Heap's algorithm)
function permutations(arr) {
    const result = [];

    function heapPermute(arr, n = arr.length) {
        if (n === 1) {
            result.push(arr.slice());
            return;
        }

        for (let i = 0; i < n; i++) {
            heapPermute(arr, n - 1);
            if (n % 2 === 1) {
                [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
            } else {
                [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]];
            }
        }
    }

    heapPermute(arr);
    return result;
}

// demo samples ---


const testArr = [5, 3, 8, 4, 2];
const sortedTestArr = [1, 3, 5, 7, 9, 11];

const findPeakArr = [17, 33, 26, 11, 55, 111];
const rotatedSearchArr = [7, 10, 23, 13, 22, 41];

const findMaxArr = [15, 13, 16, 40, 26, 33, 45, 23, 88, 87, 12];
const findSumArr = [13, 11, 12, 8, 44, 22, 12, 7];
const reverseArr = [11, 26, 19, 18, 27, 33, 22, 11];
const countOccurrencesArr = [1, 1, 17, 18, 2, 33, 22, 11, 26, 19, 3, 2, 11];
const frequencyArr = [1, 16, 3, 3, 2, 2, 111, 11, 1, 2, 33, 66, 55, 22, 11, 33, 27, 28, 19, 23];
const stringCase = "Hello World";

document.getElementById('o1-demo').innerHTML = `
            <strong>Demo:</strong><br>
            Input: [10, 20, 30, 40]<br>
            getFirstElement() → <strong>${getFirstElement([10, 20, 30, 40])}</strong>
        `;

document.getElementById('o1-demo2').innerHTML = `
            <strong>Demo:</strong><br>
            Input: {"user123": { name: "Alice", age: 30 },<br>
            "user456": { name: "Bob", age: 25 }}<br>
            getUserAge("user123") → <strong>${getUserAge("user123")}</strong>
        `;
document.getElementById('o1-demo3').innerHTML = `
            <strong>Demo:</strong><br>
            Input: ["192.168.1.1", "10.0.0.5", "172.16.0.1"]<br>
            isBanned("user123") → <strong>${isBanned("user123")}</strong>
        `;
document.getElementById('o1-demo4').innerHTML = `
            <strong>Demo:</strong><br>
            Input: [1,2,3,4,5] , "push", 11<br>
            stackOperation([1,2,3,4,5],"push", 11) → <strong>${stackOperation([1, 2, 3, 4, 5], "push", 11)}</strong>
        `;
document.getElementById('o1-demo5').innerHTML = `
            <strong>Demo:</strong><br>
            Input: {amount: 100, isLuxury: true, shipping: 10}<br>
            calculateTax({amount: 100, isLuxury: true, shipping: 10}) → <strong>
            tax: ${calculateTax({ amount: 100, isLuxury: true, shipping: 10 }).tax},
            total: ${calculateTax({ amount: 100, isLuxury: true, shipping: 10 }).total}
            </strong>
        `;


document.getElementById('ologn-demo').innerHTML = `
            <strong>Demo:</strong><br>
            Sorted array: [1, 3, 5, 7, 9, 11]<br>
            binarySearch(..., 7) → index <strong>${binarySearch(sortedTestArr, 7)}</strong> (found)
        `;
document.getElementById('ologn-demo2').innerHTML = `
            <strong>Demo:</strong><br>
            Input Integer: 69<br>
            integerSquareRoot(69) → <strong>${integerSquareRoot(69)}</strong> (found)
        `;
document.getElementById('ologn-demo3').innerHTML = `
            <strong>Demo:</strong><br>
            Input Integer: 3, 6<br>
            fastPow(3, 6) → <strong>${fastPow(3, 6)}</strong> (found)
        `;
document.getElementById('ologn-demo4').innerHTML = `
            <strong>Demo:</strong><br>
            Input Array: [${findPeakArr.join(', ')}]<br>
            findPeak([${findPeakArr.join(', ')}]) → index <strong>${findPeak(findPeakArr)}</strong> (found)
        `;
document.getElementById('ologn-demo5').innerHTML = `
            <strong>Demo:</strong><br>
            Rotated array: [${rotatedSearchArr.join(', ')}]<br>
            searchRotated(..., 7) → index <strong>${searchRotated(rotatedSearchArr, 7)}</strong> (found)
        `;

document.getElementById('on-demo').innerHTML = `
            <strong>Demo:</strong><br>
            Array: [10, 20, 30, 40, 50]<br>
            linearSearch(..., 30) → index <strong>${linearSearch([10, 20, 30, 40, 50], 30)}</strong>
        `;
document.getElementById('on-demo2').innerHTML = `
            <strong>Demo:</strong><br>
            Array: [15, 13, 16, 40, 26, 33, 45, 23, 88, 87, 12]<br>
            findMax([1  5, 13, 16, 40, 26, 33, 45, 23, 88, 87, 12]) → <strong>${findMax([15, 13, 16, 40, 26, 33, 45, 23, 88, 87, 12])}</strong>
        `;
document.getElementById('on-demo3').innerHTML = `
            <strong>Demo:</strong><br>
            Array: [${findSumArr.join(', ')}]<br>
            findSum(${findSumArr.join(', ')}, 30) → <strong>${findSum(findSumArr, 30)}</strong>
        `;
document.getElementById('on-demo4').innerHTML = `
            <strong>Demo:</strong><br>
            Array: [${reverseArr.join(', ')}]<br>
            reverseArray(${reverseArr.join(', ')}) → <strong>${reverseArray(reverseArr)}</strong>
        `;
document.getElementById('on-demo5').innerHTML = `
            <strong>Demo:</strong><br>
            Array: [${countOccurrencesArr.join(', ')}]<br>
            countOccurrences(${countOccurrencesArr.join(', ')}, 11) → <strong>${countOccurrences(countOccurrencesArr, 11)}</strong>
        `;
document.getElementById('on-demo6').innerHTML = `
            <strong>Demo:</strong><br>
            Array: [${reverseArr.join(', ')}]<br>
            reverseArrayCopy(${reverseArr.join(', ')}) → <strong>${reverseArrayCopy(reverseArr)}</strong>
        `;
document.getElementById('on-demo7').innerHTML = `
            <strong>Demo:</strong><br>
            Array: [${reverseArr.join(', ')}]<br>
            reverseArrayNew(${reverseArr.join(', ')}) → <strong>${reverseArrayNew(reverseArr)}</strong>
        `;
document.getElementById('on-demo8').innerHTML = `
            <strong>Demo:</strong><br>
            Array: [${frequencyArr.join(', ')}]<br>
            frequencyCounter(${frequencyArr.join(', ')}) → <strong>${frequencyCounter(frequencyArr)}</strong>
        `;
document.getElementById('on-demo9').innerHTML = `
            <strong>Demo:</strong><br>
            String Case: [${stringCase}]<br>
            toUpperCase(${stringCase}) → <strong>${toUpperCase(stringCase)}</strong>
        `;

document.getElementById('onlogn-demo').innerHTML = `
            <strong>Demo (built-in sort):</strong><br>
            Original: [${testArr.join(', ')}]<br>
            sortArray() → <strong>[${sortArray([...testArr]).join(', ')}]</strong>
        `;

document.getElementById('on2-demo').innerHTML = `
            <strong>Demo:</strong><br>
            Original: [${testArr.join(', ')}]<br>
            bubbleSort() → <strong>[${bubbleSort([...testArr]).join(', ')}]</strong>
        `;

document.getElementById('o2n-demo').innerHTML = `
            <strong>Demo:</strong><br>
            fibonacciExponential(10) → <strong>${fibonacciExponential(10)}</strong><br>
            <em>(Note: larger n becomes extremely slow)</em>
        `;

document.getElementById('onfact-demo').innerHTML = `
            <strong>Demo:</strong><br>
            permutations([1, 2, 3]) → <strong>${permutations([1, 2, 3]).length}</strong> permutations<br>
            <em>(Grows extremely fast — try larger arrays at your own risk!)</em>
        `;