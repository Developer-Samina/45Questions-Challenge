// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// Passing the if test (green alien)
var alienColorPass = 'green';
if (alienColorPass === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
}
else {
    console.log("No points earned. Keep shooting!");
}
// Failing the if test (red alien)
var alienColorFail = 'red';
if (alienColorFail === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
}
else {
    console.log("No points earned. Keep shooting!");
}
