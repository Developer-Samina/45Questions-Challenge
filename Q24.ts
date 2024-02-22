// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


let shape1: string = 'square';
let shape2: string = 'circle';

console.log(`Is shape1 equal to shape2? I predict False.`);
console.log(shape1 === shape2);

console.log(`Is shape1 not equal to shape2? I predict True.`);
console.log(shape1 !== shape2);


let mixedCaseShape: string = 'SqUaRe';

console.log(`Is mixed Case Shape in lowercase equal to 'square'? I predict True.`);
console.log(mixedCaseShape.toLowerCase() === 'square');


let numberA: number = 5;
let numberB: number = 10;

console.log(`Is numberA equal to numberB? I predict False.`);
console.log(numberA === numberB);

console.log(`Is numberA not equal to numberB? I predict True.`);
console.log(numberA !== numberB);

console.log(`Is numberA greater than numberB? I predict False.`);
console.log(numberA > numberB);

console.log(`Is numberA less than numberB? I predict True.`);
console.log(numberA < numberB);

console.log(`Is numberA greater than or equal to numberB? I predict False.`);
console.log(numberA >= numberB);

console.log(`Is numberA less than or equal to numberB? I predict True.`);
console.log(numberA <= numberB);


console.log(`Is numberA less than numberB and numberA + numberB equal to 15? I predict True.`);
console.log(numberA < numberB && numberA + numberB === 15);

console.log(`Is numberA less than numberB or numberA + numberB equal to 14? I predict True.`);
console.log(numberA < numberB || numberA + numberB === 14);


let shapesArray: string[] = ['square', 'circle', 'triangle', 'rectangle'];
let shapeToCheck: string = 'triangle';

console.log(`Is shape To Check in shapes Array? I predict True.`);
console.log(shapesArray.includes(shapeToCheck));


let shapeNotInArray: string = 'oval';

console.log(`Is shape Not In Array not in shapes Array? I predict True.`);
console.log(!shapesArray.includes(shapeNotInArray));