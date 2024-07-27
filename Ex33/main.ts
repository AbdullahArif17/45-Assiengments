let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

for(let oneNumber of numbers){
    let ordinalEnd: string

    if (oneNumber === 1) {
        ordinalEnd = 'st'
    }else if (oneNumber === 2) {
        ordinalEnd = 'nd'
    }else if (oneNumber === 3) {
        ordinalEnd = 'rd'
    }else{
        ordinalEnd = 'th'
    }
    console.log(`${oneNumber}${ordinalEnd}`)
}