let Guests = ["Walter", "John Wick", "Saleem"];

let notComing = Guests[0];

console.log(notComing, "Can't attend the dinner");

Guests.splice(0, 1, "Amir");
 
Guests.forEach(guest => console.log(`Would you like to have dinner with me, Mr.${guest}?`));