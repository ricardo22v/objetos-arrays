const values = ['Ricardo', 'Carmen', 'Piero'];
// // // Existen 2 formas de programar:

// // Forma Imperativa: te explica paso a paso lo que se realiza
for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}

// // // Forma Declarativa: te muestra el resultado final sin explicaciones
values.forEach((value) => {
console.log(value);
});
