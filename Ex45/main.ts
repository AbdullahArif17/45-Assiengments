function Car(manufacturer: string, model: string, ...options: string[]){
    let car = {
        manufacturer: manufacturer,
        model: model,
    }
    options.forEach(option => {
        let [key, value] = option.split(':');
        car[key.trim()] = value.trim();
    });
    return car;
}

let myCar = Car('Toyota', 'Corrolla', 'color: Red', 'year: 2020')

console.log(myCar)