const main = document.getElementById("main")
const carritoDOM = document.getElementById("carrito")

const productosLibreria = [
    {
        id: 1,
        nombre: 'Cuaderno',
        precio: 2.50,
        categoria: 'Papeleria',
        stock: 100,
        img: "https://img.freepik.com/vector-gratis/diseno-lapiz-escribiendo_1095-187.jpg"
    },
    {
        id: 2,
        nombre: 'Lápiz',
        precio: 0.50,
        categoria: 'Papeleria',
        stock: 200,
        img: "https://img.freepik.com/vector-gratis/diseno-lapiz-escribiendo_1095-187.jpg"
    },
    {
        id: 3,
        nombre: 'Bolígrafo',
        precio: 1.20,
        categoria: 'Papeleria',
        stock: 150,
        img: "https://img.freepik.com/vector-gratis/diseno-lapiz-escribiendo_1095-187.jpg"
    },
    {
        id: 4,
        nombre: 'Borrador',
        precio: 0.30,
        categoria: 'Papeleria',
        stock: 300,
        img: "https://img.freepik.com/vector-gratis/diseno-lapiz-escribiendo_1095-187.jpg"
    },
    {
        id: 5,
        nombre: 'Resaltador',
        precio: 1.00,
        categoria: 'Papeleria',
        stock: 75,
        img: "https://img.freepik.com/vector-gratis/diseno-lapiz-escribiendo_1095-187.jpg"
    },
    {
        id: 6,
        nombre: 'Mochila',
        precio: 20.00,
        categoria: 'Accesorios',
        stock: 50,
        img: "https://img.freepik.com/vector-gratis/diseno-lapiz-escribiendo_1095-187.jpg"
    },
    {
        id: 7,
        nombre: 'Regla',
        precio: 0.80,
        categoria: 'Papeleria',
        stock: 120,
        img: "https://img.freepik.com/vector-gratis/diseno-lapiz-escribiendo_1095-187.jpg"
    },
    {
        id: 8,
        nombre: 'Tijeras',
        precio: 2.00,
        categoria: 'Papeleria',
        stock: 90,
        img: "https://img.freepik.com/vector-gratis/diseno-lapiz-escribiendo_1095-187.jpg"
    },
    {
        id: 9,
        nombre: 'Pegamento',
        precio: 1.50,
        categoria: 'Papeleria',
        stock: 60,
        img: "https://img.freepik.com/vector-gratis/diseno-lapiz-escribiendo_1095-187.jpg"
    },
    {
        id: 10,
        nombre: 'Calculadora',
        precio: 15.00,
        categoria: 'Electronica',
        stock: 30,
        img: "https://img.freepik.com/vector-gratis/diseno-lapiz-escribiendo_1095-187.jpg"
    },
    {
        id: 11,
        nombre: 'Pegamento',
        precio: 1.20,
        categoria: 'Papeleria',
        stock: 60,
        img: "https://img.freepik.com/vector-gratis/diseno-lapiz-escribiendo_1095-187.jpg"
    },
];

const carrito = []


productosLibreria.forEach(el=>{
    const ejemploCard = `
    <div class="contenedor">
        <h3>${el.nombre}</h3>
        <img src="${el.img}" />
        <p>Precio: $${el.precio}</p>
        <p>Categoría: ${el.categoria}</p>
        <button class="btnAgregar">Comprar</button>
    </div>
    `
    main.innerHTML += ejemploCard
})


const botonesEvento = document.getElementsByClassName("btnAgregar")
const arrayDeBotones = Array.from(botonesEvento)

const mostrarElCarrito = ()=>{
    carritoDOM.innerHTML = ""
    carrito.forEach(el=>{
        carritoDOM.innerHTML += `<h3>${el}</h3>`
    })
}

arrayDeBotones.forEach(boton => {
    boton.addEventListener("click", (e)=>{
        carrito.push(e.target.parentElement.children[0].innerText)
        mostrarElCarrito()
    })
})
