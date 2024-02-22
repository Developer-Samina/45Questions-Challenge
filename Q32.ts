// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// list of current users
const currentUsers: string[] = ['Abhi', 'Imran', 'Hamza', 'Umar', 'Khubaib'];

// list of new users
const newUsers: string[] = ['subhan', 'Imran', 'yasir', 'ukasha', 'nazeef'];

// new users to check for uniqueness

for (let newUser of newUsers) {
  // Convert both usernames to lowercase for case-insensitive comparison

  const lowercaseNewUser = newUser.toLowerCase();
  const isUnique = !currentUsers.some((currentUser) => currentUser.toLowerCase() === lowercaseNewUser);

  // Print a message based on the result
  
  if (isUnique) {
    console.log(`Username '${newUser}' is available.`);
  } else {
    console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
  }
}