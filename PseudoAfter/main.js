const productos = document.getElementById("productos")
const carrito = document.getElementById("carrito")
const Carrito = JSON.parse(localStorage.getItem("carrito")) || []

const Productos = [
    {
        imagen: "https://beforeweage.com/wp-content/uploads/2012/02/coffee-buenos-aires-cafe-chico.jpg?w=848",
        titulo: "Cafe Chico",
        precio: 900

    },
    {
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Caf%C3%A9_con_leche.jpg/1280px-Caf%C3%A9_con_leche.jpg",
        titulo: "Cafe Mediano",
        precio: 1100

    },
    {
        imagen: "https://media.istockphoto.com/id/519282873/es/foto/happy-businessman-holding-funny-gran-gran-taza-de-cof-negro.jpg?s=612x612&w=0&k=20&c=IdP1gZHhz31IgduwTPAO158PPJ8SiCALyepWsx5dAEc=",
        titulo: "Cafe Grande",
        precio: 1400,

    },
    {
        imagen: "https://www.lactaidenespanol.com/sites/lactaid_us/files/recipe-images/banana-strawberry-licuado.jpg",
        titulo: "Licuados",
        precio: 1600,
    },
];

const restadoraAlCarrito = (titulo) => {
    const producto = Carrito.find(el => {
        return el.titulo === titulo
    })

    if(producto.cantidad <= 1){
        let arrayDetitulos = Carrito.map(el => {
            return el.titulo
        })

        let index = arrayDetitulos.indexOf(titulo)

        Carrito.splice(index, 1)
    }else{
        producto.cantidad -= 1
    }
    actualizadoraDeCarrito()
}

const sumadoraAlCarrito = (titulo) => {
    const producto = Carrito.find(el => {
            return el.titulo === titulo
    })
    producto.cantidad += 1
    actualizadoraDeCarrito()
}


const creadoraDeCardsDeCarrito = (titulo, precio, cantidad) => {
    const contenedor = document.createElement("div")
    const tituloDOM = document.createElement("h3")
    const precioDOM = document.createElement("p")
    const contenedorCantidad = document.createElement("div")
    const cantidadDOM = document.createElement("p")
    const botonPlusDOM = document.createElement("button")
    const botonMinumDOM = document.createElement("button")

    contenedor.classList.add("contenedor")
    tituloDOM.classList.add("titulo")
    precioDOM.classList.add("precio")
    cantidadDOM.classList.add("cantidad")

    tituloDOM.innerText = titulo
    precioDOM.innerText = precio
    cantidadDOM.innerText = cantidad

    botonPlusDOM.innerText = "+"
    botonMinumDOM.innerText = "-"

    botonPlusDOM.addEventListener("click", ()=>{
        sumadoraAlCarrito(titulo)
    })

    botonMinumDOM.addEventListener("click", ()=>{
        restadoraAlCarrito(titulo)
    })

    contenedorCantidad.appendChild(botonMinumDOM)
    contenedorCantidad.appendChild(cantidadDOM)
    contenedorCantidad.appendChild(botonPlusDOM)

    contenedor.appendChild(tituloDOM)
    contenedor.appendChild(precioDOM)
    contenedor.appendChild(contenedorCantidad)

    return contenedor
}


const actualizadoraDeCarrito = () => {
    carrito.innerHTML = ""

    const totalDOM = document.createElement("h3")

    const total = Carrito.reduce((acc, el)=>{
        return acc + el.cantidad * el.precio
    },0)

    totalDOM.innerText = total

    Carrito.forEach(el =>{
        carrito.appendChild(creadoraDeCardsDeCarrito(el.titulo, el.precio, el.cantidad))
        carrito.appendChild(totalDOM)
    })
    localStorage.setItem("carrito", JSON.stringify(Carrito))
}


const agregadoraAlCarrito = (titulo, precio) => {
    const booleano = Carrito.some(el => {
        return el.titulo === titulo
    })

    if(booleano){
        const producto = Carrito.find(el => {
            return el.titulo === titulo
        })
        producto.cantidad += 1
    }else{
        Carrito.push({
            titulo,
            precio,
            cantidad: 1
        })
    }
    actualizadoraDeCarrito()
}

const creadoraDeCards = (titulo, imagen, precio) => {
    const contenedor = document.createElement("div")
    const tituloDOM = document.createElement("h3")
    const imagenDOM = document.createElement("img")
    const precioDOM = document.createElement("p")
    const botonDOM = document.createElement("button")

    contenedor.classList.add("contenedor")
    tituloDOM.classList.add("titulo")
    imagenDOM.classList.add("imagen")
    precioDOM.classList.add("precio")
    botonDOM.classList.add("boton")

    tituloDOM.innerText = titulo
    precioDOM.innerText = "$" + precio
    botonDOM.innerText = "Comprar"

    imagenDOM.src = imagen

    botonDOM.addEventListener("click", ()=>{
        agregadoraAlCarrito(titulo, precio)
    })


    contenedor.appendChild(tituloDOM)
    contenedor.appendChild(imagenDOM)
    contenedor.appendChild(precioDOM)
    contenedor.appendChild(botonDOM)

    return contenedor
}


Productos.forEach(el => {
    const productoDOM = creadoraDeCards(el.titulo, el.imagen, el.precio)

    productos.appendChild(productoDOM)
})


document.addEventListener("DOMContentLoaded",()=>{
    actualizadoraDeCarrito()
})