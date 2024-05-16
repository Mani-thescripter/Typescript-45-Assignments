//Question 16: 
//More Guests: You've found a bigger dinner table, so there's room for more guests.

//Lets Code😉!

let invitedGuests : string[] = ["Jamaal","Kamaal","Zawaal","Malaal"];

invitedGuests.push("Jalaal")
invitedGuests.unshift("Halaal")
invitedGuests.splice(2,1,"Sawaal")
invitedGuests.forEach (invitedGuests => {
    console.log (`Hello ${invitedGuests}, You are invited to join us on our dinner`);

})
