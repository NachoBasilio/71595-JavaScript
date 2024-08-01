const productosLibreria = [
    {
        id: 1,
        nombre: 'Cuaderno',
        precio: 2.50,
        categoria: 'Papeleria',
        stock: 100
    },
    {
        id: 2,
        nombre: 'Lápiz',
        precio: 0.50,
        categoria: 'Papeleria',
        stock: 200
    },
    {
        id: 3,
        nombre: 'Bolígrafo',
        precio: 1.20,
        categoria: 'Papeleria',
        stock: 150
    },
    {
        id: 4,
        nombre: 'Borrador',
        precio: 0.30,
        categoria: 'Papeleria',
        stock: 300
    },
    {
        id: 5,
        nombre: 'Resaltador',
        precio: 1.00,
        categoria: 'Papeleria',
        stock: 75
    },
    {
        id: 6,
        nombre: 'Mochila',
        precio: 20.00,
        categoria: 'Accesorios',
        stock: 50
    },
    {
        id: 7,
        nombre: 'Regla',
        precio: 0.80,
        categoria: 'Papeleria',
        stock: 120
    },
    {
        id: 8,
        nombre: 'Tijeras',
        precio: 2.00,
        categoria: 'Papeleria',
        stock: 90
    },
    {
        id: 9,
        nombre: 'Pegamento',
        precio: 1.50,
        categoria: 'Papeleria',
        stock: 60
    },
    {
        id: 10,
        nombre: 'Calculadora',
        precio: 15.00,
        categoria: 'Electronica',
        stock: 30
    },
    {
        id: 11,
        nombre: 'Pegamento',
        precio: 1.20,
        categoria: 'Papeleria',
        stock: 60
    },
]

let bandera = true
let carrito = []

//Find, filter, forEach, map
function agregadoraDeCarrito(el){
    carrito.push(el)
}

function stockManejador(producto, cantidad){
    let estaONoEsta = carrito.some((el)=>{
        return el.id === producto.id
    })

    if(estaONoEsta){
        let objetoDelCarrito = carrito.find((el)=>{
            return el.id === producto.id
        })
        objetoDelCarrito.stock += cantidad
    }else{
        agregadoraDeCarrito({
            nombre: producto.nombre,
            precio: producto.precio,
            id: producto.id,
            stock: cantidad
        })
    }
}

function compra(id){
    let productoBuscado = productosLibreria.find((el)=>{
        return el.id === id
    })
    if(productoBuscado){
        let cantidad = parseInt(prompt("¿Cuanto quiere comprar?"))
        stockManejador(productoBuscado, cantidad)
    }else{
        alert("Producto no existe")
    }
}

function logicaDeCompra(){
    let mensaje = "Los productos son:\n"
    productosLibreria.forEach(el =>{
        mensaje += `${el.id} - ${el.nombre}\n`
        // mensaje += el.id + "-" + el.nombre + "\n"
    })
    let productoID = parseInt(prompt(mensaje))
    compra(productoID)
}

function mostrarElCarrito(){
    let mensaje = "Su carrito es:\n"
    carrito.forEach(el =>{
        mensaje += `${el.nombre} - ${el.stock}\n`
    })

    let total = carrito.reduce((acc, el)=>{
        return acc + el.stock * el.precio
    }, 0).toFixed(2)

    mensaje += `El total es de: ${total}\n`
    alert(mensaje)
}

while(bandera){
    let opciones = parseInt(prompt("¿Que quiere hacer?\n1-comprar\n2-filtrar\n3-buscar"))

    switch(opciones){
        case 1:
            logicaDeCompra()
            break
        case 2:
            //Logica de filtrado
            break
        case 3:
            //Logica de busqueda
            break
        default:
            alert("Opción incorrecta")
    }

    bandera = confirm("¿Quiere seguir operando?")
}

mostrarElCarrito()