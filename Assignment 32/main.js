//Question 32: 
//Checking Usernames: Ensure uniqueness in usernames.
//Lets Code😉❗
var old_Usernames = ["Alpha", "Charlie1", "Bravo", "Delta", "Gamma"];
var new_Usernames = ["alpha", "beta", "charlie", "delta", "gamma"];
new_Usernames.forEach(function (newUsernames) {
    if (old_Usernames.some(function (oldUsernames) { return oldUsernames.toLowerCase() === newUsernames.toLowerCase(); })) {
        console.log("".concat(newUsernames, " will need to ener a new username."));
    }
    else {
        console.log("".concat(newUsernames, " is available"));
    }
});
