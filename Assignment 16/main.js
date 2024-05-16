//Question 16: 
//More Guests: You've found a bigger dinner table, so there's room for more guests.
//Lets Code😉!
var invitedGuests = ["Jamaal", "Kamaal", "Zawaal", "Malaal"];
invitedGuests.push("Jalaal");
invitedGuests.unshift("Halaal");
invitedGuests.splice(2, 1, "Sawaal");
invitedGuests.forEach(function (invitedGuests) {
    console.log("Hello ".concat(invitedGuests, ", You are invited to join us on our dinner"));
});
