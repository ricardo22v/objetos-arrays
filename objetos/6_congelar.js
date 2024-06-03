const person = {
    name: 'Carmen',
    lastName: 'Hinostroza',
    age: 30,
    jobTitle: 'Restauradora',
    hobby: 'pasear',
    account: {
        name: 'Scotiabank',
        number: 'CCI',
    },
};

Object.freeze(person);

person.name = 'Ricardo'
console.log(person);