var current_users = ["Zaid", "Rayan", "Ayan", "Bapu"];
var new_users = ["Rohan", "Ayan", "Saad", "Bapu", "Hassan"];
new_users.forEach(function (new_user) {
    var condition = current_users.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); });
    if (condition) {
        console.log("Sorry ".concat(new_user, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_user, " is available"));
    }
});
