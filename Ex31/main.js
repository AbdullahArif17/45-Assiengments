"use strict";
let userNames = ["Ali", "Zaid", "Saad", "Admin", "Ayan"];
userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like see status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging again.`);
        }
    });
}
