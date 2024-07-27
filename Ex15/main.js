var Guests = ["Walter", "John Wick", "Saleem"];
var notComing = Guests[0];
console.log(notComing, "Can't attend the dinner");
Guests.splice(0, 1, "Amir");
Guests.forEach(function (guest) { return console.log("Would you like to have dinner with me, Mr.".concat(guest, "?")); });
