// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


const string1 :string = "apple";
const string2 :string = "orenge";
console.log(string1 == string2);
console.log(string1 !== string2);

// testing using the lower case
const mixedCaseString :string = "HELLOWWORLD"
console.log(mixedCaseString.toLowerCase() === "hellowWorld");

// Numerical tests involving equality and  equality, greater than and less than or equal to, and less than or equal to.
const num1 :number = 10;
const num2 :number = 5;
console.log(num1 === num2);  
console.log(num1 !== num2); 
console.log(num1 > num2);   
console.log(num1 < num2);    
console.log(num1 >= num2);   
console.log(num1 <= num2);


// Test using "and" and "or oprators"
const condition1 :boolean = true;
const condition2 :boolean = false;
// console.log(condition1 && condition2);
console.log(condition1 || condition2);

const fruits :string[] =["banana", "apple", "orenge", "grape"]
// .includes() ek JavaScript method hai jo ek array ya string mein specific value ya substring ka mojud hona ya na hona check karta hai. Agar value ya substring mojud hai to true return karta hai, warna false return karta hai.
console.log(fruits.includes("Apple"));
console.log(fruits.includes("apple"));