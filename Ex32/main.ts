let current_users = ["Zaid", "Rayan", "Ayan", "Bapu"]

let new_users = ["Rohan", "Ayan", "Saad", "Bapu", "Hassan"]

new_users.forEach(new_user => {
    let condition = current_users.some(current_user => current_user.toLowerCase() === new_user.toLowerCase())
    if(condition){
        console.log(`Sorry ${new_user} is already taken`);
    }else{
        console.log(`This username ${new_user} is available`);
    }
})

