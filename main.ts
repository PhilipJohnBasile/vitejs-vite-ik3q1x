// Pre-defined test arrays
const testArray1 = [1, 2, 3, 4, 5];
const testArray2 = [2, -3, 4, 7, -1, 0];
const testArray3 = [1, 3, 2];
const testArray4 = [2, 4, 6, 1, 5];

// Question 1: Are there any 4s in the list?
function hasFour(arr: number[]): boolean {
  // Implement your solution here
}

console.log('Q1 - testArray1 has 4:', hasFour(testArray1));
console.log('Q1 - testArray2 has 4:', hasFour(testArray2));

// Question 2: Are they all positive?
function allPositive(arr: number[]): boolean {
  // Implement your solution here
}

console.log('Q2 - testArray1 all positive:', allPositive(testArray1));
console.log('Q2 - testArray2 all positive:', allPositive(testArray2));

// Question 3: Convert the input array into a running total array
// In: [1, 3, 2], Out: [1, 4, 6]
function runningTotal(arr: number[]): number[] {
  // Implement your solution here
}

console.log('Q3 - Running total of testArray3:', runningTotal(testArray3));

// Question 4: Find the missing number in a unsorted array of sequential numbers
// In: [2,4,6,1,5], Out: 3
function findMissingNumber(arr: number[]): number {
  // Implement your solution here
}

console.log('Q4 - Find missing number in data:', findMissingNumber(testArray4));
