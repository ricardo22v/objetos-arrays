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

delete person.name;
delete person.age;
delete person.hobby; 

console.log(person);