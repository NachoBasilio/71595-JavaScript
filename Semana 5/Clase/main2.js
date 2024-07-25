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
];

let bandera = true
let mensaje = "Los productos que vendemos son los siguientes: \n"
let carrito = []

for(let i = 0; i < productosLibreria.length; i++){
    mensaje += i+1 + " - " + productosLibreria[i].nombre + "\n"
}

function logicaDeCompra(id){
    let producto;
    for(let i = 0; i < productosLibreria.length; i++){
        if(productosLibreria[i].id == id){
            producto = productosLibreria[i]
            break
        }else{
            producto = -1
        }
    }
    return producto
}

function determinarSiHayUnDescuento (total){
    let descuento = JSON.parse(localStorage.getItem("descuento"))
    if(descuento != null){
        return total * descuento
    }else{
        localStorage.setItem("descuento", "0.75")
    }
    return total
}

function calcularTotal(){
    let total = 0
    for(let i = 0; i < carrito.length; i++){
        total = total + carrito[i].precio
    }
    console.log(total)
    return determinarSiHayUnDescuento(total)
}


function mostrarCarrito(){
    let mensaje = "Su carrito tiene los siguientes productos: \n"
    for(let i = 0; i < carrito.length; i++){
        mensaje += i+1 + " - " + carrito[i].nombre + "\n"
    }

    let total = calcularTotal()
    console.log(total)
    alert(mensaje + "\n\nEl total de su compra es: "+ total)
}

function filtroDeProductos (tipoDeProducto){
    let arrayProductosFiltrados = []
    for(let i = 0; i < productosLibreria.length; i++){
        if(productosLibreria[i].categoria == tipoDeProducto){
            arrayProductosFiltrados.push(productosLibreria[i])
        }
    }
    return arrayProductosFiltrados
}

function creadorDeArraysNombres (array) {
    let arrayProductosNombres = []
    for(let i = 0; i < array.length; i++){
        arrayProductosNombres.push(array[i].nombre)
    }
    return arrayProductosNombres
}

while(bandera){
    let pregunta = parseInt(prompt("¿Que quiere hacer? \n\n1-Comprar \n\n2-Filtrar"))

    if(pregunta === 1){
        let productoAComprar = prompt(mensaje)
        let objetoAComprar = logicaDeCompra(productoAComprar)

        if(objetoAComprar == -1){
            alert("Ese producto no existe")
        }else{
            carrito.push(objetoAComprar)
        }
    }else{
        let categoria = prompt("Que categoria esta buscando?")
        let arrayAux = filtroDeProductos(categoria)
        let arrayAux2 = creadorDeArraysNombres(arrayAux)
        alert(arrayAux2.join("\n"))
    }


    bandera = !confirm("¿Queres terminar la comprando?")
}

mostrarCarrito()