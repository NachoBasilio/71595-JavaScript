// function suma(num1, num2, num3 = 0){
//     if(num3 != 0){
//         return num1 + num2 + num3
//         console.log(23)
//     }else{
//         return num1 + num2
//     }
// }


// let resultado = suma(8,4)//12

// console.log(resultado)

// function calculadora(primerNumero, segundoNumero, operacion) {
//     switch (operacion) {
//         case "+":
//             return primerNumero + segundoNumero;
//         case "-":
//             return primerNumero - segundoNumero;
//         case "*":
//             return primerNumero * segundoNumero;
//         case "/":
//             return primerNumero / segundoNumero;
//         default:
//             return 0;
//     }
// }

// console.log(calculadora(10, 5, "/"));


function saludar(nombre){
    console.log(nombre)
}

const funcionSaludarAnonima = function (nombre) {
    console.log(nombre)
}

const funcionSaludarFlecha = (nombre) => {
    console.log(nombre)
}

saludar("Nacho")
funcionSaludarFlecha("Nacho")
funcionSaludarAnonima("Nacho")
