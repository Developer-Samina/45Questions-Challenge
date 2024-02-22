// 23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let car: string = 'subaru';

// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru');

// Test 2
console.log("Is car != 'toyota'? I predict True.");
console.log(car !== 'toyota');

// Test 3
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

// Test 4
console.log("Is car !== 'Subaru'? I predict True.");
console.log(car !== 'Subaru');

// Test 5
let is_JapaneseCar: boolean = true;
console.log("Is car == 'subaru' and is Japanese Car is True? I predict True.");
console.log(car === 'subaru' && is_JapaneseCar);

// Test 6
let has_Sunroof: boolean = false;
console.log("Is car == 'subaru' or has Sunroof is True? I predict True.");
console.log(car === 'subaru' || has_Sunroof);

// Test 7
let is_Sedan: boolean = true;
console.log("Is car == 'subaru' and is Sedan is False? I predict False.");
console.log(car === 'subaru' && !is_Sedan);

// Test 8
let is_Convertible: boolean = false;
console.log("Is car != 'subaru' or is Convertible is False? I predict False.");
console.log(car !== 'subaru' || !is_Convertible);

// Test 9
let is_LuxuryCar: boolean = false;
console.log("Is car == 'subaru' or is LuxuryCar is True? I predict True.");
console.log(car === 'subaru' || is_LuxuryCar);

// Test 10
let is_CompactCar: boolean = true;
console.log("Is car != 'subaru' and isCompactCar is False? I predict False.");
console.log(car !== 'subaru' && !is_CompactCar);