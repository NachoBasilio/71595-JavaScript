// Ejercicio para if-else:
// En CoderNews, queremos mostrar diferentes mensajes dependiendo del número de comentarios que tiene una noticia.
// Si una noticia tiene menos de 10 comentarios, mostrar el mensaje "Pocos comentarios".
// Si tiene entre 10 y 50 comentarios, mostrar "Comentarios moderados".
// De lo contrario, mostrar "¡Gran debate en marcha!".

// let cantidadDeComentarios = parseInt(prompt("¿Cuantos comentarios tiene esta noticia?"))

// if(cantidadDeComentarios >= 0 && cantidadDeComentarios < 10){
//     alert("Pocos comentarios")
// }else if(cantidadDeComentarios >= 10 && cantidadDeComentarios < 50){
//     alert("Comentarios moderados")
// }else if(cantidadDeComentarios >= 50){
//     alert("¡Gran debate en marcha!")
// }else{
//     alert("Valor incorrecto")
// }


// Ejercicio para switch:
// En CoderNews, queremos asignar un nivel de importancia a las noticias basado en su categoría.
// Crea un switch statement que asigne un nivel de importancia a una noticia según su categoría:
// - "Tecnología" tiene un nivel de importancia de "Alto".
// - "Deportes" tiene un nivel de importancia de "Medio".
// - "Política" tiene un nivel de importancia de "Bajo".
// - Para cualquier otra categoría, el nivel de importancia es "Desconocido".

// let categoria = prompt("¿Que categoría tiene su noticia?").toLocaleLowerCase()

// switch (categoria) {
//     case "tecnologia":
//         alert("Alto")
//         break
//     case "deportes":
//         alert("Medio")
//         break
//     case "politica":
//         alert("Bajo")
//         break
//     default:
//         alert("Desconocido")
//         break
// }

// Ejercicio para for:
// En CoderNews, queremos imprimir los títulos de las noticias con un número de serie.
// Utiliza un bucle for para imprimir el número de serie seguido del título de la noticia.

// let noticia1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus tortor, commodo eget magna et, varius facilisis arcu. Sed suscipit massa ut turpis interdum, sit amet lacinia purus pulvinar."

// let noticia2 = "Fusce sed nisi ac velit placerat ultricies. Sed tincidunt sapien risus, id ultrices est blandit id. Mauris eget ante consequat, elementum nunc vitae"

// let noticia3 = "Nunc posuere ligula vitae mauris vestibulum, et aliquam eros gravida. Pellentesque elementum euismod est, et eleifend justo semper nec. Fusce gravida elementum volutpat. Proin sed ligula sagittis"

// for(let i = 1; i <= 3 ;i++){
//     if(i === 1){
//         alert(noticia1 + " " + i)
//     }else if(i === 2){
//         alert(noticia2 + " " + i)
//     }else{
//         alert(noticia3 + " " + i)
//     }
// }

// Ejercicio para while:
// En CoderNews, queremos permitir a los usuarios buscar una noticia por su título.
// Utiliza un bucle while para buscar el título de una noticia ingresado por el usuario.

// let titulo1 = "Julian Alvarez metio 10 goles en un solo partido"
// let titulo2 = "JavaScript es el mejor lenguaje de programación del mundo"
// let titulo3 = "Soy un titulo chiquito"

// let tituloABuscar = prompt("¿Que titulo busca?")

// while(tituloABuscar !== titulo1 && tituloABuscar !== titulo2 && tituloABuscar !== titulo3){
//     tituloABuscar = prompt("No lo encontramos ¿Que titulo busca?")
// }

// alert("Encontraste tu titulo, " + tituloABuscar)

// Ejercicio para do-while:
// En CoderNews, queremos permitir a los usuarios votar si les gustó o no una noticia.
// Utiliza un bucle do-while para solicitar al usuario su voto (sí o no) al menos una vez.
// Continúa solicitando el voto mientras el usuario ingrese una respuesta inválida.

// let voto;

// do{
//     voto = prompt("¿Te gusto la noticia? (si o no)").toLocaleLowerCase()
// }while(voto != "no" && voto != "si")



// En CoderNews, queremos permitir a los usuarios calificar la relevancia de una noticia.
// El programa solicitará al usuario que ingrese la relevancia de una noticia en una escala del 1 al 5.
// Utiliza un bucle while para validar la entrada del usuario y permitirle intentarlo nuevamente si la entrada no está en el rango válido.
// Implementa un switch para mostrar un mensaje personalizado dependiendo de la calificación ingresada por el usuario.

// Variable para almacenar la calificación de relevancia ingresada por el usuario
// let relevanciaNoticia;

// Bucle para validar si la entrada del usuario es un número
// let resenaEfectiva = false;

// Solicitar al usuario que ingrese la relevancia de la noticia
// let entrada = prompt("Por favor, califica la relevancia de esta noticia en una escala del 1 al 5:"); //¿Que hay que hacer con este dato?



let user = prompt("¿Cual es su usuario?")
let pass = prompt("¿Cual es su contraseña?")

while(user != "Candela" && pass != "1234"){
    alert("No sos candela, no podes pasar")
}


let compraCodigo = 0
let totalDeCompra = 0
let bandera = true

while((compraCodigo != 1 && compraCodigo != 2 && compraCodigo != 3 && compraCodigo != 4) || bandera){

    compraCodigo = parseInt(prompt("Hola Cande! ¿Que queres comprar? \n 1- remeras \n 2- pantalon \n 3- gorras \n 4 - gatitos"))

    switch(compraCodigo){
        case 1:
            alert("Tenemos pantalones al fondo")
            totalDeCompra = totalDeCompra + 10
            break
        case 2:
            alert("Tenemos remeras al fondo")
            totalDeCompra = totalDeCompra + 10
            break
        case 3:
            alert("Tenemos gorras al fondo")
            totalDeCompra = totalDeCompra + 10
            break
        case 4:
            alert("Tenemos gatitos al fondo")
            totalDeCompra = totalDeCompra + 10
            break
        default:
            alert("Codigo no valido")
            break
    }

    bandera = confirm("¿Quiere seguir comprando?")
    if(!bandera){
        compraCodigo = 1
    }
}

alert(totalDeCompra)
