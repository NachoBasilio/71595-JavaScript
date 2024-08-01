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
        let objetoEnDB = productosLibreria.find((el)=>{
            return el.id === producto.id
        })
        if(cantidad > objetoEnDB.stock){
            alert("Si te vendemos, te debemos")
        }else{
            let objetoDelCarrito = carrito.find((el)=>{
                return el.id === producto.id
            })
            objetoDelCarrito.stock += cantidad
            objetoEnDB.stock -= cantidad
        }
    }else{
        let objetoEnDB = productosLibreria.find((el)=>{
            return el.id === producto.id
        })
        if(cantidad > objetoEnDB.stock){
            alert("Si te vendemos, te debemos")
        }else{
            objetoEnDB.stock -= cantidad
            agregadoraDeCarrito({
                nombre: producto.nombre,
                precio: producto.precio,
                id: producto.id,
                stock: cantidad
            })
        }
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

function filtradoraPorCategoria(categoria){
    const arrayFiltrado = productosLibreria.filter(el=>{
        return el.categoria.toLowerCase() === categoria.toLowerCase()
    })

    let mensaje = "Los productos filtrados:\n"
    arrayFiltrado.forEach(el =>{
        mensaje += `${el.nombre}\n`
    })

    alert(mensaje)
}

function logicaDeFiltrado(){
    let categoria = prompt("De que categoria quiere buscar")
    filtradoraPorCategoria(categoria)
}

function busquedaAPartirDeID(id){
    let objetoABuscar = productosLibreria.find((el)=>{
        return el.id === id
    })
    if(objetoABuscar){
        alert(`El producto que estaba buscando es este:\n Nombre: ${objetoABuscar.nombre}\n Categoria: ${objetoABuscar.categoria}\n Precio: ${objetoABuscar.precio}`)
    }else{
        alert("El objeto que busca no esta aqui")
    }
}

function logicaDeBusqueda(){
    let id = parseInt(prompt("¿Que objeto busca?"))
    busquedaAPartirDeID(id)

}

while(bandera){
    let opciones = parseInt(prompt("¿Que quiere hacer?\n1-comprar\n2-filtrar\n3-buscar\n4-terminar"))

    switch(opciones){
        case 1:
            logicaDeCompra()
            break
        case 2:
            logicaDeFiltrado()
            break
        case 3:
            logicaDeBusqueda()
            break
        case 4:
            break
        default:
            alert("Opción incorrecta")
    }

    bandera = confirm("¿Quiere seguir operando?")
}

mostrarElCarrito()
console.log(productosLibreria)