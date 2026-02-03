# Big O Notation Examples in JavaScript

This project demonstrates various **Big O time complexities** using practical JavaScript examples. It serves as a reference for understanding algorithm efficiency and performance scaling.

## 🚀 How to Use
1. Clone this repository.
2. Open `index.html` in your web browser.
3. View the interactive demos and code snippets directly on the page.

## 📚 Covered Time Complexities

| Big O | Name | Description | Example |
|-------|------|-------------|---------|
| **O(1)** | Constant | Time matches input size? No. Always the same. | Array access, Stack push/pop |
| **O(log n)** | Logarithmic | Time grows logarithmically (search space halves). | Binary Search |
| **O(n)** | Linear | Time grows linearly with input size. | Linear Search |
| **O(n log n)** | Linearithmic | Standard for efficient sorting. | Merge Sort, Quick Sort |
| **O(n²)** | Quadratic | Time grows with square of input (nested loops). | Bubble Sort |
| **O(2ⁿ)** | Exponential | Time doubles with each addition to input. | Naive Fibonacci |
| **O(n!)** | Factorial | Grows extremely fast. | Permutations |

## 📝 Code Examples

### O(1) - Constant Time
Operations that take the same amount of time regardless of input size.
```javascript
function getFirstElement(arr) {
    return arr[0];
}
```

### O(log n) - Logarithmic Time
Common in algorithms that divide the problem in half each step.
```javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        // ... (see constant.js for full implementation)
    }
    return -1;
}
```

### O(n) - Linear Time
Iterating through all elements once.
```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
```

### O(n²) - Quadratic Time
Typically involves nested loops, like comparing every element with every other element.
```javascript
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            // Swap logic
        }
    }
}
```

## 📁 Files
- **index.html**: Main visual interface with demos.
- **constant.js**: Contains all the algorithm implementations and demo logic.

---
*Created for educational purposes to visualize algorithm efficiency.*
