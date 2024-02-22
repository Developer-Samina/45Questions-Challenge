// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

// usernames
let usernames: string[] = ['areeba', 'bisma', 'rabia', 'haleema', 'sumbul'];

// Check if the list of users is not empty
if (usernames.length > 0) {
  // greetings
  for (let i = 0; i < usernames.length; i++) {
    const username = usernames[i];

    if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
} else {
  console.log("We need to grow our user base.");
}

// Remove all usernames
usernames = [];

// Check if the list of users is not empty
if (usernames.length > 0) {
  // print greetings (this won't be for an empty list)
  for (let i = 0; i < usernames.length; i++) {
    const username = usernames[i];

    if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
} else {
  console.log("We need to grow our user base.");
}