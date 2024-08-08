
const nodoPadre = document.getElementById("nodoPadre")

const nodoCualquiera = document.getElementById("cualquiera")
const nodosCualquiera = document.getElementsByClassName("cualquiera")
const nodosDivs = document.getElementsByTagName("div")

const nodoCualquieraQuery = document.querySelector("#cualquiera")
const nodoCualquieraQueryClass = document.querySelector(".cualquiera")
const nodosCualquieraQueryClass = document.querySelectorAll(".cualquiera")

console.dir(nodoCualquiera)
console.dir(nodosCualquiera)
console.dir(nodosDivs)
console.log("------------------------------------------")
console.dir(nodoCualquieraQuery)
console.log(nodoCualquieraQueryClass)
console.log(nodosCualquieraQueryClass)

const deHTMLCollectionAArray = Array.from(nodosCualquiera)
const deNodeListAArray = Array.from(nodosCualquieraQueryClass)

console.log(deHTMLCollectionAArray)
console.log(deNodeListAArray)

console.log(nodoCualquiera.innerText)

//nodoCualquiera.innerText = "Hola, me editaron desde JS"



//let nombre = prompt("¿Como te llamas?")

//nodoCualquiera.innerHTML = `<h1> Hola ${nombre} </h1>`


console.log(nodoCualquiera.className)

// nodoCualquiera.className += " fondoRojo"

// nodoCualquiera.className = ""

if(nombre === "Nacho"){

    deHTMLCollectionAArray[1].classList.remove("cualquiera")
}

deHTMLCollectionAArray.forEach(el => {
    el.classList.toggle("cualquiera")
})

const nodoDeLaboratorio = document.createElement("div")

nodoDeLaboratorio.innerText = "Hola, yo ni estaba en el html"
nodoDeLaboratorio.classList.add("fondoRojo")


deHTMLCollectionAArray[1].appendChild(nodoDeLaboratorio)


const botonClick = document.getElementById("click")
botonClick.addEventListener("contextmenu", (e)=>{

    // if(e.target.innerText == "YA ME CLICKEARON"){
    //     e.target.innerText = "click"
    // }else{
    //     e.target.innerText = "ya me clickearon"
    // }

    nodoPadre.innerHTML = "Aguanten los eventos"
})


const inputTexto = document.getElementById("nombre")


inputTexto.addEventListener("keypress", (e)=>{
    console.log(e)
})

const input = document.getElementById("input")

input.addEventListener("input", (e)=>{
    console.log(e.target.value)
})

const change = document.getElementById("change")

change.addEventListener("change", (e)=>{
    console.log(e.target.value)
})


const form = document.getElementById("form")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
})