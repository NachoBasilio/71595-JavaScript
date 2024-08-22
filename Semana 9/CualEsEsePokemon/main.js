let pokemonRandom = Math.floor(Math.random() * 151)
let intentos = 10
let puntos = 0
let imagen = document.getElementById("img")
let botonEnviar = document.getElementById("botonEnviar")
let input = document.getElementById("input")
let alerta = document.getElementById("alerta")
let nombreActual = ""

const URL = "https://pokeapi.co/api/v2/pokemon/"

async function llamadoraDeUnPokemon(numero){
    const result = await fetch(URL + numero)
    const data = await result.json()
    console.log(data.name)
    imagen.src = data.sprites.other.home.front_default
    if(data.name === "nidoran-m" || data.name === "nidoran-f"){
        nombreActual = "nidoran"
    } else {
        nombreActual = data.name
    }
}

function verificarRespuesta(){
    if(input.value.toLowerCase() === nombreActual.toLowerCase()){
        Swal.fire({
            title:"¡Ganaste vamos por mas!",
            timer: 3000,
            timerProgressBar: true,
            imageUrl: "https://gifdb.com/images/high/happy-dancing-pikachu-bq9scc4eo2ox1y94.gif",
            showConfirmButton: false
        })
        puntos++
    } else {
        Swal.fire({
            title:"Perdiste, pero podes seguir jugando",
            timer: 3000,
            timerProgressBar: true,
            imageUrl: "https://media.tenor.com/-kUSrDb9vQIAAAAM/pikach.gif",
            showConfirmButton: false
        })
    }
    pokemonRandom = Math.floor(Math.random() * 151)
    input.value = ""
    imagen.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-question.png"
    llamadoraDeUnPokemon(pokemonRandom)
    intentos--
}

botonEnviar.addEventListener("click", verificarRespuesta)

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        verificarRespuesta()
    }
})

llamadoraDeUnPokemon(pokemonRandom)

