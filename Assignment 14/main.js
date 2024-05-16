// Question 14: 
/*Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d
like to invite to dinner. Then use your list to print a message to each person,
inviting them to dinner.*/
// Lets code😉:
var invitedGuests = ["Jamaal", "Kamaal", "Zawaal"];
for (var i = 0; i < invitedGuests.length; i++) {
    console.log("Hello ".concat(invitedGuests[i], ", You are invited to join us on our dinner"));
}
//                           <<< OR >>>
invitedGuests.forEach(function (invitedGuests) {
    console.log("Hello ".concat(invitedGuests, ", You are invited to join us on our dinner"));
});
