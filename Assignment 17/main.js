//Question 17: 
// Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
//lets Code😉!
var invitedGuests = ["Jamaal", "Kamaal", "Sawaal", "Zawaal", "Malaal", "Jalaal", "Halaal"];
invitedGuests.pop();
invitedGuests.shift();
invitedGuests.splice(1, 3);
invitedGuests.forEach(function (invitedGuests) {
    console.log(invitedGuests);
});
