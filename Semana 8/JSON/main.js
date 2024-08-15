const main = document.getElementById("main")


const creadoraDeCard = (titulo, descripcion, precio, imagen) => {
    main.innerHTML += `
    <div class="contenedorCard">
        <h3>${titulo}</h3>
        <img src="${imagen}" alt="">
        <p>${descripcion}</p>
        <p>$${precio}</p>
        <button>Comprar</button>
    </div>
    `
}

const llamadoraDeProductos = async ()=>{
    let resp = await fetch("./info.json")
    let data = await resp.json()
    data.forEach(el => {
        creadoraDeCard(el.titulo, el.descripcion, el.precio, el.imagen)
    })
}

llamadoraDeProductos()























// const contador = document.getElementById("contador")

// console.log("Hola")

// setTimeout(()=>{
//     console.log("ya estoy listo!")
// }, 0)
// setTimeout(()=>{
//     console.log("ya estoy listo!2")
// }, 0)
// setTimeout(()=>{
//     console.log("ya estoy listo!3")
// }, 0)
// let numero = 200
// contador.innerText = numero
// setInterval(()=>{
//     numero -= 1
//     contador.innerText = numero
// }, 1000)



// console.log("Hola 2")
// console.log("Hola 3")



// try {
// // ...
// throw new Error("404 No encontre nada")
// } catch (error) {
//     console.error("Algo salio mal, llame a soporte")
// } finally {
//     console.log("Hola, yo me ejecuto igual")
// }

// fetch(URL)
// .then(resp => resp.json())
// .then(data => {
//     console.log(data)
// })
// .catch(e=>{
//     console.error(e)
// })

// let numero = 10
// let id = setInterval(()=>{
//     console.log(numero)
//     numero--
//     if(numero < 1){
//         clearInterval(id)
//     }
// }, 1000)