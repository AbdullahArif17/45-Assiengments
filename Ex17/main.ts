let Guests = ["Walter", "John Wick", "Saleem", "Ayan"];

let notComing = Guests[0];

console.log(notComing, "can't attend the dinner");

Guests.splice(0, 1, "Amir");
 
console.log("Good News ! We have set a new bigger table for dinner");

Guests.unshift("Usman");

Guests.push("Zaid");

let mid: number = Math.floor(Guests.length / 2);

Guests.splice(mid, 0, "Farhan");

console.log("All guests for dinner");

Guests.forEach(Guest => console.log(`Would you like to have dinner with me, Mr.${Guest}`));


console.log("Unfortunately! The new table won't arrive at time so I can invite only two Guest for Dinner");

while(Guests.length > 2){
    let reGuest = Guests.pop();
    console.log(`Sorry!, ${reGuest} I can't invite you to dinner.`);
}

console.log("You are still invited.");

Guests.forEach(last2 => console.log(`You are Invited ${last2} for dinner`));

Guests.pop();
Guests.pop();

console.log("Empty List:", Guests);