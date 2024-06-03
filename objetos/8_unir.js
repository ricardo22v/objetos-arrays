const developer = {
    nombre: 'Ricardo',
    apellido: 'Velasquez',
    edad: 29,
};

const estudios = {
    career: 'Frontend',
    company: 'IDAT',
};

// // Método Assign:

const unirObjetos = Object.assign(developer, estudios);
console.log(unirObjetos);


// // Método con Spread Operator:

const unirObjetos2 = { ...developer, ...estudios};
console.log(unirObjetos2);
