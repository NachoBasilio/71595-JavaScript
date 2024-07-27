
// const items = [
//     { name: 'Charmander', price: 37 },
//     { name: 'Pidgey', price: 45 },
//     { name: 'Pikachu', price: 21 },
//     { name: 'Squirtle', price: 60 }
//   ]
// items.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     // a es igual a b
//     return 0;
// })

// console.log(items)



// Arreglo de cadenas de texto
let frutas = ['manzana', 'pera', 'banana', 'uva']

// Ordenar en orden ascendente (alfabético)
frutas.sort()

console.log(frutas) // Salida: ['banana', 'manzana', 'pera', 'uva']

// Ordenar en orden descendente (alfabético inverso)
frutas.sort(function(a, b) {
    // Si 'a' es menor que 'b', retorna 1 para colocar 'a' después de 'b'
    if(a < b) return 1
    // Si 'a' es mayor que 'b', retorna -1 para colocar 'a' antes de 'b'
    if(a > b) return -1
    // Si 'a' y 'b' son iguales, retorna 0 para dejarlos en sus posiciones actuales
    return 0
});

console.log(frutas); // Salida: ['uva', 'pera', 'manzana', 'banana']

// Definimos un arreglo de números
let numeros = [3, 1, 4, 1, 5, 9]

// para ordenar los números en orden ascendente
numeros.sort(function(a, b) {
    return a - b
});

// Ahora el arreglo 'numeros' está ordenado
console.log(numeros) // Salida: [1, 1, 3, 4, 5, 9]

// Ordenar en orden descendente
numeros.sort(function(a, b) {
    return b - a
});

// Ahora 'numeros' está ordenado en orden descendente
console.log(numeros) // Salida: [9, 5, 4, 3, 1, 1]