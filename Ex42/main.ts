function show_magicians (magician:string[]){
    magician.forEach(name => console.log(name))
}

let magicianNames = ['Harry Potter', 'DR. Strange', 'Wizard'];

function make_great (magician:string){
   return magician.map((name: any) => `The GREAT ${name}`);
}


let greatMagicians = make_great(magicianNames)

show_magicians(greatMagicians);