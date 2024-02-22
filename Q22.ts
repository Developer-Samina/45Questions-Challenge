// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// Define an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Try to access an element at an invalid index (intentional error)
const invalidIndex = 10;

// Check if the index is within the valid range before accessing the element
if (invalidIndex >= 0 && invalidIndex < numbers.length) {
  console.log(`Accessing element at index ${invalidIndex}: ${numbers[invalidIndex]}`);
} else {
  console.log(`Invalid index ${invalidIndex}. Please provide a valid index.`);
}