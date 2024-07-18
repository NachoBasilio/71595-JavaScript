const array1 = [9,5,3,4,2,1,11,23,124]

const alumnos1 = ["Candela", "Alijandro", "Ezequiel", "Lucas", "Alejandro"]
const alumnos2 = ["Tomas", "Manuel", "Hugo"]


// console.log(array1.length)//Los Gatos Tienen Hambre

// console.log(array1)


// let numeroNuevo = parseInt(prompt("dame un numero"))

// array1.push(numeroNuevo)
// array1.unshift(numeroNuevo)


// console.log(array1)

//let valorEliminado = array1.pop()
// let valorEliminado = array1.shift()

// console.log(array1)

// console.log(valorEliminado)

const stringAPartirDeUnArray = alumnos1.join("\n- ")

// alert("- " + stringAPartirDeUnArray)
// console.log(alumnos)


// const alumnoABuscar = prompt("¿Que alumno usted esta buscando?")

// const indice = alumnos.indexOf(alumnoABuscar)

// if(indice === -1){
//     alert("El alumno no esta en nuestra base de datos")
// }else{
//     alert("Encontramos a " + alumnos[indice] + " en el lugar numero " + indice)
// }


// const numeroABuscar = parseInt(prompt("¿Que numero anda buscando?"))

// const booleanoDeBusqueda = array1.includes(numeroABuscar)

// if(booleanoDeBusqueda){
//     alert("El numero que usted busca esta en el array")
// }else{
//     alert("El numero que usted busca NO esta en el array")
// }

// 1- El Sort ROMPE nuestro array

// console.log(alumnos)

// alumnos.sort()

// console.log(alumnos)


// console.log(alumnos)

// alumnos.reverse()

// console.log(alumnos)


// console.log(alumnos)

// alumnos.sort().reverse()

// console.log(alumnos)

// const alumnos3 = alumnos1.concat(alumnos2)

// console.log(alumnos3)

// alumnos3.splice(4, 1)

// console.log(alumnos3)


// const alumnoABuscar = prompt("¿Que alumno usted esta con ganas de borrar?")

// const indice = alumnos3.indexOf(alumnoABuscar)

// if(indice === -1){
//     alert("El alumno no esta en nuestra base de datos")
// }else{
//     alert("Encontramos a " + alumnos3[indice] + " y lo borramos")

//     alumnos3.splice(indice, 1)
// }


// const alumnos4 = alumnos3.slice(0, 5) //[indice, hastaDonde)

// const alumnos5 = alumnos3.slice(0)

// console.log(alumnos5)
// console.log(alumnos3)

// alumnos3.pop()

// console.log(alumnos5)
// console.log(alumnos3)


// for(let i = 0; i < alumnos3.length; i++){
//     console.log(alumnos3[i])
// }

// console.log("________________________________________________________")

// for(let alumno of alumnos3){
//     console.log(alumno)
// }


let bandera = true
const productos = ["Pantalon", "Remera", "Gorro", "Bufanda"]
const metodosPago = ["Mercado Pago", "Debito", "Efectivo"]

let carrito = []
let total = 0


function sumarATotal (precio, nombre, cantidad = 1) {
    total += precio * cantidad //total = total + precio

    const palabraCap = nombre[0].toUpperCase() + nombre.slice(1)

    carrito.push(palabraCap + "X" + cantidad)
}

function logicaCompra(producto) {
    let cantidad = 1

    switch(producto){
        case "pantalon":
            cantidad = prompt("¿Cuantos " + producto + " queres?")
            sumarATotal(200, producto, cantidad)
            break
        case "remera":
            cantidad = prompt("¿Cuantos " + producto + " queres?")
            sumarATotal(100, producto, cantidad)
            break
        case "gorro":
            cantidad = prompt("¿Cuantos " + producto + " queres?")
            sumarATotal(60, producto, cantidad)
            break
        case "bufanda":
            cantidad = prompt("¿Cuantos " + producto + " queres?")
            sumarATotal(500, producto, cantidad)
            break
        default:
            alert("No tenemos ese producto")
            break
    }
}


function infoPago(metodo){
    if(metodo === "mercado pago"){
        total = total * 1.10
    }
    alert("El total a pagar es de " + total.toFixed(2))
    bandera = !confirm("¿Confirmamos la compra?")
}


function logicaDePago(metodo) {
    switch(metodo){
        case "mercado pago":
            infoPago(metodo)
            break
        case "debito":
            infoPago(metodo)
            break
        case "efectivo":
            infoPago(metodo)
            break
        default:
            alert("Ese metodo no esta bueno, paga con algo como la gente.")
            break
    }
}


while(bandera){
    const valorElegido = prompt("¿Que quiere comprar? \n\n- " + productos.join("\n- ")).toLowerCase()

    logicaCompra(valorElegido)

    bandera = confirm("¿Quiere seguir comprando?")
}

alert("El subtotal de compra es de :" + total)
alert("Los productos que compro son los siguientes \n\n" + carrito.join("\n"))

bandera = true

while(bandera){
    const metodoDePago = prompt("¿Como quiere pagar? \n\n- " + metodosPago.join("\n- ")).toLowerCase()


    logicaDePago(metodoDePago)

    if(bandera){
        bandera = !confirm("¿Cancelar compra?")
    }
}