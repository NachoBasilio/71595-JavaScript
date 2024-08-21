let pokemonRandom = Math.floor(Math.random() * 151)
let imagen = document.getElementById("img")
let botonEnviar = document.getElementById("botonEnviar")
let input = document.getElementById("input")
let alerta = document.getElementById("alerta")
let arrayNombres = []
const URL = "https://pokeapi.co/api/v2/pokemon/"

async function llamadoraDeUnPokemon(numero){
    const result = await fetch(URL+numero)
    const data = await result.json()
    console.log(data)
    imagen.src = data.sprites.other.home.front_default
    logicaDeQuienEsEsePokemon(data.name)

}

function logicaDeQuienEsEsePokemon(nombre){
    botonEnviar.addEventListener("click", ()=>{
        if(input.value.toLowerCase() === nombre.toLowerCase()){
            alerta.innerText = "Ganaste!!!"
        }else{
            alerta.innerText = "Perdiste"
        }
    })
}

llamadoraDeUnPokemon(pokemonRandom)

// async function llamadoraDeMuchosPokemon(){
//     try{

//         const result = await fetch(URL)

//         const data = await result.json()

//         return data
//     }catch(error){
//         console.error("Perrito con Chaucha")
//     }

// }

// function mostrarPokemon (array) {
//     array.forEach(el => {
//         console.log(el)
//     })
// }

// llamadoraDeMuchosPokemon()
// .then(array => {
//     arrayNombres = array.results.map(el => el.name)
//     mostrarPokemon(arrayNombres)
// })

