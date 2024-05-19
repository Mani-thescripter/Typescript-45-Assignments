//Question 30: 
//Hello Admin: Greet users differently, especially 'admin'.
// Lets Code😉❕
var greet = ["User1", "User2", "User3", "Admin", "User4", "User5"];
greet.forEach(function (greet) {
    if (greet === "Admin") {
        console.log("Hello Admin, I hope you are doing well.");
    }
    else {
        console.log("Hello ".concat(greet));
    }
});
