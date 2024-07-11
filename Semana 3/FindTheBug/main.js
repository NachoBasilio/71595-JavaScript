const IVA = 0.10;
let importe = prompt("Ingresa el importe sobre el cual quieres calcular el IVA:");

const precioConIVA = (imp, iva) => imp * iva;

console.log(precioConIVA(importe, IVA))


// ¿Qué tiene que hacer este código?

// ¿Por qué no cumple con su función?


const valorM2 = 31.83; //valor fijo del seguro por Metro 2
const comision = 1.025; //comisión del 2.5%
const M2 = prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:");

const calcularPoliza = m2 => m2 * valorM2 * comision;
const valorPoliza = calcularPoliza(M2).toFixed(2);
console.log("El costo de la póliza es: $" + valorPoliza);


// ¿Qué tiene que hacer este código?

// ¿Por qué no cumple con su función?

// ¿Qué propuesta podrías hacer para que tenga sentido su uso?