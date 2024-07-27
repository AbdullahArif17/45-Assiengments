let userNames = ["Ali", "Zaid", "Saad", "Admin", "Ayan"];

userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would yiu like see status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging again.`)
    }
})

