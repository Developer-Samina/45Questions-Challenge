// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// array of three favorite fruits
var favoriteFruits = ['banana', 'apple', 'strawberry'];
// statements to check for certain fruits in the array
if (favoriteFruits.includes('banana')) {
    console.log("I really like bananas.");
}
if (favoriteFruits.includes('apple')) {
    console.log("I really like apples.");
}
if (favoriteFruits.includes('strawberry')) {
    console.log("I really like strawberries.");
}
if (favoriteFruits.includes('orange')) {
    console.log("I really like oranges.");
}
else {
    console.log("Oranges are not in my list of favorite fruits.");
}
if (favoriteFruits.includes('grape')) {
    console.log("I really like grapes.");
}
else {
    console.log("Grapes are not in my list of favorite fruits.");
}
