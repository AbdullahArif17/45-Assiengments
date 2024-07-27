function Sandwich(...items: string[]){
    console.log('\nYour sandwich items:')
    items.forEach(singleItem => console.log('-' + singleItem))
    console.log('Enjoy your sandwich')
};

Sandwich('Chicken', 'Cheese', 'Mayo')
Sandwich('Butter', 'Egg')
Sandwich('Garilc Bread', 'Mayo')