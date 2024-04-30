"use strict";
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let aliancolor = "green";
aliancolor = "red";
// Version that passes the if test (greeen alian)
if (aliancolor == "green") {
    console.log("Player just earn 5 points");
}
else {
    console.log("Player just earn 10 points");
}
// Version that passes the else condition
aliancolor = "red";
if (aliancolor == "green") {
    console.log("Player just earn 5 points");
}
else {
    console.log("Player just earn 10 points");
}
