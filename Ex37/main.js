"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shrits(size = 'medium', message = 'I love typescript') {
    console.log(`Create a shrit of ${size} size with a message of ${message} prints on it.`);
}
make_shrits();
make_shrits('small');
make_shrits('large', 'I love javascript');
