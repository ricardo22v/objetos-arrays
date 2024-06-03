const person = {
    name: 'Carmen',
    lastName: 'Hinostroza',
    fullName() {
        return `Hola soy ${this.name} ${this.lastName}`
    }
}

console.log(person);