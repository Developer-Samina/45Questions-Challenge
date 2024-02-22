// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// list of current users
var currentUsers = ['Abhi', 'Imran', 'Hamza', 'Umar', 'Khubaib'];
// list of new users
var newUsers = ['subhan', 'Imran', 'yasir', 'ukasha', 'nazeef'];
var _loop_1 = function (newUser) {
    // Convert both usernames to lowercase for case-insensitive comparison
    var lowercaseNewUser = newUser.toLowerCase();
    var isUnique = !currentUsers.some(function (currentUser) { return currentUser.toLowerCase() === lowercaseNewUser; });
    // Print a message based on the result
    if (isUnique) {
        console.log("Username '".concat(newUser, "' is available."));
    }
    else {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please enter a new username."));
    }
};
// new users to check for uniqueness
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
