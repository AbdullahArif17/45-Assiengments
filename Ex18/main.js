"use strict";
let places = ["New York", "London", "Manceshter", "Istanbul", "Sydney"];
//In original order
console.log(places);
//In order
console.log([...places].sort());
//In Reverse order
console.log([...places].reverse());
//Not copying array
console.log(places.reverse());
//Again reverse
console.log(places.reverse());
//Sorting original list
console.log(places.sort());
//Again reversing
console.log(places.reverse());
