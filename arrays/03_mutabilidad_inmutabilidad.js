
const values = ['Ricardo', 'Carmen', 'Piero'];

// // // MUTABILIDAD (Modifica el estado original)

values.push('Monica');
values.push('Dino');
values.push('Martin');
console.log(values);


// // // INMUTABILIDAD (crea una copia, y no modifica el estado original)

const nuevoArreglo = [...values, 'Lupin']
console.log(nuevoArreglo);


