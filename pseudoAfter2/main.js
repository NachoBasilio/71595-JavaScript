const URL = 'https://dummyjson.com/products'
const main = document.getElementById("main")
const carritoDOM = document.getElementById("carrito")
const comprar = document.getElementById("comprar")
const cancelar = document.getElementById("cancelar")
const total = document.getElementById("total")
const buscador = document.getElementById("buscador")
let carrito = JSON.parse(localStorage.getItem("carrito")) || []



const agregarEventosCarrito = () => {
    const botonesAgregar = document.getElementsByClassName("botonCarrito")
    const botonesAgregarArray = Array.from(botonesAgregar)
    botonesAgregarArray.forEach(el=>{
        el.addEventListener("click", (e)=>{
            let id;
            const productoEnElCarrito = carrito.find((el, idArr) => {
                id = idArr
                return el.producto == e.target.parentElement.children[0].innerText
            })
            if(e.target.innerText === "+"){
                productoEnElCarrito.cantidad++
            }else{
                if(productoEnElCarrito.cantidad == 1){
                    carrito.splice(id, 1)
                }else{
                    productoEnElCarrito.cantidad--
                }
            }
            actualizarCarrito()
        })
    })
}

function actualizarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
    carritoDOM.innerHTML = ""
    carrito.forEach(el => {
        carritoDOM.innerHTML += `
            <div>
                <h3>${el.producto}</h3>
                <p>${el.precio}</p>
                <button class="botonCarrito">+</button>
                <p>${el.cantidad}</p>
                <button class="botonCarrito">-</button>
            </div>
        `
    })
    total.innerText = carrito.reduce((acc, el)=>{
        return acc + el.precio * el.cantidad
    },0).toFixed(2)
    agregarEventosCarrito()
}


comprar.addEventListener("click", ()=>{
    carrito = []
    actualizarCarrito()
})

cancelar.addEventListener("click", ()=>{
    carrito = []
    actualizarCarrito()
})

const agregadoraDeEventos = () => {
    const botonesAgregar = document.getElementsByClassName("botonDeCompra")
    const arrayDeBotones = Array.from(botonesAgregar)
    arrayDeBotones.forEach((el)=>{
        el.addEventListener("click" , (e) => {
            const productoEnElCarrito = carrito.find(el => el.producto == e.target.parentElement.children[0].innerText)
            if(!productoEnElCarrito){
                carrito.push({
                    producto: e.target.parentElement.children[0].innerText,
                    precio: parseFloat(e.target.parentElement.children[4].innerText),
                    cantidad: 1
                })
            }else{
                productoEnElCarrito.cantidad++
            }
            actualizarCarrito()
        })
    })
}

const pintadoraDeCards = (arrayDeProductos) => {
    main.innerHTML = ""
    arrayDeProductos.forEach((e)=>{
        main.innerHTML += `
            <div>
                <h3>${e.title}</h3>
                <img src="${e.imagen[0]}" />
                <p>${e.description}</p>
                <p>${e.price}</p>
                <p>${e.rating}</p>
                <button class="botonDeCompra">Comprar</button>
            </div>
        `
    })
    agregadoraDeEventos()
}


const creeNuestroArrayDeProductos = async () =>{
    let res = await fetch(URL)
    let data = await res.json()

    let nuestroProducto = data.products.map((e)=>{
        return {
            title: e.title,
            id: e.id,
            imagen: e.images,
            description: e.description,
            price: e.price,
            rating: e.price,
            categoria: e.category
        }
    })
    console.log(nuestroProducto)
    pintadoraDeCards(nuestroProducto)
    buscador.addEventListener("input", (e)=>{
        const arrayFiltrado = nuestroProducto.filter(el => el.title.toLowerCase().includes(e.target.value.toLowerCase()))
        pintadoraDeCards(arrayFiltrado)
    })

}




creeNuestroArrayDeProductos()



document.addEventListener("DOMContentLoaded", () => {
    actualizarCarrito()
})