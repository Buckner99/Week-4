// Create an array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract the first element from the last element programmatically
let lastIndex = ages.length - 1;
let result = ages[lastIndex] - ages[0];
console.log(result);

// Add a new age to the array
ages.push(45);

// Subtract the first element from the last element dynamically
lastIndex = ages.length - 1;
result = ages[lastIndex] - ages[0];
console.log(result);

// Use a loop to calculate the average age
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let average = sum / ages.length;
console.log(average);

// Create an array called names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate the average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log(averageLetters);

// Concatenate all names together, separated by spaces
let allNames = '';
for (let i = 0; i < names.length; i++) {
    allNames += names[i] + ' ';
}
console.log(allNames.trim());

// Access the last element of any array
let lastElement = ages[ages.length - 1];
console.log(lastElement);

// Access the first element of any array
let firstElement = ages[0];
console.log(firstElement);

// Create a new array called nameLengths
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

// Calculate the sum of elements in the nameLengths array
let sumOfLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumOfLengths += nameLengths[i];
}
console.log(sumOfLengths);

// Function to concatenate a word n times
function repeatWord(word, n) {
    return word.repeat(n);
}
console.log(repeatWord('Hello', 3));

// Function to return a full name
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(getFullName('John', 'Doe'));

// Function to check if the sum of numbers in an array is greater than 100
function isSumGreaterThan100(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100;
}
console.log(isSumGreaterThan100([20, 30, 60]));

// Function to calculate the average of numbers in an array
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
console.log(calculateAverage([10, 20, 30]));

// Function to compare the average of two arrays
function compareAverages(array1, array2) {
    return calculateAverage(array1) > calculateAverage(array2);
}
console.log(compareAverages([10, 20, 30], [5, 15, 25]));

// Function to check if it's hot outside and if there's enough money to buy a drink
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 12.50));

// Custom function (example): Calculate the area of a rectangle
// This function takes the length and width of a rectangle and returns its area.
function calculateRectangleArea(length, width) {
    return length * width;
}
// Usage: console.log(calculateRectangleArea(5, 10));
