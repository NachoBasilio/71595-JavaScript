

//Función tradicional para calcular la cantidad de caracteres en un titular de noticia:

//Descripción: En CoderNews, necesitamos asegurarnos de que los titulares de las noticias no excedan cierta longitud para mantener la presentación limpia. Esta función calculará la cantidad de caracteres en un titular dado.

//La funcion tiene calcular cantidad de caracteres
//recibe un titulo
//retorna cantidad

// function calculadoraDeCaracteres (titulo) {
//     let cantidadDeCaracteres = titulo.length
//     return cantidadDeCaracteres
// }

// let cantidad1 = calculadoraDeCaracteres("Julian Alvarez metio 10 goles en a final de a copa america, Julian Alvarez metio 10 goles en a final de a copa america")
// console.log(cantidad1)

//Función para determinar si una noticia es corta o larga:

//Descripción: CoderNews quiere clasificar automáticamente las noticias como cortas o largas para ayudar a los lectores a elegir qué leer. Esta función determina si una noticia dada es corta o larga según la longitud de su contenido.

// function evaluadoraDeTitulo(numeroDeCaracteres) {
//     if(numeroDeCaracteres > 100){
//         return "Es muy largo el titulo"
//     }else{
//         return "El titulo es corto"
//     }
// }

// let tamanioDelTitulo = evaluadoraDeTitulo(cantidad1)
// console.log(tamanioDelTitulo)

//Pista: Tiene que retornar un booleano si es mayor a 100


//Función de flecha para determinar la importancia de una noticia según la cantidad de comentarios:

//Descripción: CoderNews quiere etiquetar automáticamente la importancia de una noticia según la cantidad de comentarios que recibe. Esta función determina esa importancia.

// const importanciaPorComentario = (cantidadDeComentarios) => {
//     if(cantidadDeComentarios >= 50){
//         return "Es muy importante"
//     } else if (cantidadDeComentarios < 50 && cantidadDeComentarios >= 40){
//         return "Es importante"
//     } else if (cantidadDeComentarios < 40 && cantidadDeComentarios >= 20) {
//         return "Es normal"
//     } else if (cantidadDeComentarios < 20 && cantidadDeComentarios >= 0){
//         return "Es bajo"
//     } else {
//         return -1
//     }
// }

// let cantidadDeComentarios = parseInt(prompt("¿Cuantos comentarios tiene la publicacion?"))

// let importancia = importanciaPorComentario(cantidadDeComentarios)

// if(importancia === -1 ){
//     alert("Pusiste cualquier cosa")
// }else{
//     alert(importancia)
// }


//Función anónima que muestra un mensaje personalizado según la relevancia de una noticia:

//Descripción: Los usuarios de CoderNews pueden calificar la relevancia de las noticias, y esta función proporciona un mensaje personalizado según la calificación a - 5

// const calificaNoticia = function (calificacion) {
//     switch(calificacion){
//         case 1:
//             return "Gracias, si vio algo para mejorar solo digalo"
//         case 2:
//             return "Gracias, si vio algo para mejorar solo digalo"
//         case 3:
//             return "Gracias por su review"
//         case 4:
//             return "Muchas gracias por su visita"
//         default:
//             return "MUCHA gracias!"
//     }
// }


// const mantenedoraDelUsuario = function () {
//     let bandera = true
//     let calificacionUser = parseInt(prompt("Del 1 al 5, cuanto le pone a esta noticia?"))

//     while(bandera){
//         if(calificacionUser == 5 || calificacionUser == 4 || calificacionUser == 3 || calificacionUser == 2 || calificacionUser == 1 ){
//             alert(calificaNoticia(calificacionUser))
//             bandera = falso
//         }else{
//             alert("Pusiste cualquier cosa")
//             calificacionUser = parseInt(prompt("Del 1 al 5, cuanto le pone a esta noticia?"))
//         }
//     }
// }


// mantenedoraDelUsuario()


let bandera = true
let totalCompra = 0


const logicaDeCompra = (valor, cantidad) => {
    if(isNaN(cantidad)){
        cantidad = 1
        totalCompra += valor * cantidad
    } else{
        totalCompra += valor * cantidad
    }
}

while(bandera){
    let opcionElegida = parseInt(prompt("Que quiere comprar:\n 1- Remera \n 2- Pantalon \n 3- Gorras"))
    let cantidad = 1

    switch(opcionElegida){
        case 1:
            cantidad = parseInt(prompt("¿Cuantas remeras queres?"))
            logicaDeCompra(200, cantidad)
            break
        case 2:
            cantidad = parseInt(prompt("¿Cuantas pantalon queres?"))
            logicaDeCompra(100, cantidad)
            break
        case 3:
            cantidad = parseInt(prompt("¿Cuantas gorra queres?"))
            logicaDeCompra(700, cantidad)
            break
        default:
            alert("No tenemos de eso, pero puede seguir viendo.")
            break
    }
    if(totalCompra !== 0){
        alert("El sub total es: " + totalCompra)
    }
    bandera = confirm("¿Quiere seguir comprando?")
}

const metodosDePago = function () {
    let bandera = true

    while(bandera){
        let metodoDeCompra = parseInt(prompt("Estos son los metodos de pago: \n 1- BitCoins \n 2- MercadoPago \n 3- Chachos \n 4- Débito \n 5- NFT's \n 6-  Dolares \n 7- Pesos"))

        if(metodoDeCompra == 4){
            alert("El recargo es del 10%")
            bandera = !confirm("¿Esta seguro de que quiere comprar?")
        }else{
            bandera = !confirm("¿Esta seguro de que quiere comprar?")
        }

    }

}

function confirmarCompra(total){
    let confirmacion = confirm("El total de compra es: " + total)

    if(confirmacion){
        metodosDePago()
        alert("Su compra fue realizada, si ticket llegara proto")
    }else{
        alert("Esta bien, no pasa nada *Guarda la ropa triste*")
    }

}

confirmarCompra(totalCompra)