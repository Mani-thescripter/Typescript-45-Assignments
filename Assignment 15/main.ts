//Question 15: 
/*Changing Guest List: One of your guests can't make it to the dinner, 
so you need to send out a new set of invitations with a replacement guest.*/

//Lets Code😉


var invitedGuests = ["Jamaal", "Kamaal", "Zawaal"];
invitedGuests.splice(1,1,"Malaal")
// console.log(invitedGuests)

for (var i = 0; i < invitedGuests.length; i++) {
    console.log("Hello ".concat(invitedGuests[i], ", You are invited to join us on our dinner"));
}




