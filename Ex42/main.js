"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
let magicianNames = ['Harry Potter', 'DR. Strange', 'Wizard'];
function make_great(magician) {
    return magician.map((name) => `The GREAT ${name}`);
}
let greatMagicians = make_great(magicianNames);
show_magicians(greatMagicians);
