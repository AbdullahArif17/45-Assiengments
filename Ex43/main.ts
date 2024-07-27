function show_magicians (magician:string[]){
    magician.forEach(name => console.log(name))
}

let magicianNames = ['Harry Potter', 'DR. Strange', 'Wizard'];

function make_great (magician:string){
   return magician.map((name: any) => `The GREAT ${name}`);
}
let CopyMagicianNames  = magicianNames.slice()

let greats = make_great(CopyMagicianNames)

show_magicians(magicianNames)

show_magicians(greats)