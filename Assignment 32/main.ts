//Question 32: 
//Checking Usernames: Ensure uniqueness in usernames.

//Lets Code😉❗

let old_Usernames : string[] = ["Alpha", "Charlie1", "Bravo", "Delta", "Gamma"];
let new_Usernames : string[] = ["alpha","beta","charlie","delta","gamma"];

new_Usernames.forEach(newUsernames=>{
    if(old_Usernames.some(oldUsernames => oldUsernames.toLowerCase() ===newUsernames.toLowerCase()))
        {console.log(`${newUsernames} will need to ener a new username.`);}
    else
    {console.log(`${newUsernames} is available`);}
});





















