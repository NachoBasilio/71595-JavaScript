const usuario = {
    nombre: "Nacho",
    edad: 17,
    tipoDeSubscription: "Max premium"
}

// console.log(usuario.nombre)



function UsuarioConstructor(nombre, edad, tipoDeSubscription){
    this.nombre = nombre
    this.edad = edad
    this.tipoDeSubscription = tipoDeSubscription
    this.verUnaSerie = (serie) => {
        alert( this.nombre + ", esta viendo " + serie)
    }
    this.cambiarNombre = () => {
        let newNombre = prompt("¿Como te llamas?")
        this.nombre = newNombre
    }
}


let usuario1 = new UsuarioConstructor("Lucas Montenegro", 26, "Premium")
let usuario2 = new UsuarioConstructor("Hugo", 38, "Estandar")

// console.log(usuario1)
// console.log(usuario2)



class UsuarioClass{
    constructor(nombre, edad, tipoDeSubscription){
        this.nombre = nombre
        this.edad = edad
        this.tipoDeSubscription = tipoDeSubscription
        this.diasDisponibles = 30
    }
    cambiarNombre(){
        let newNombre = prompt("¿Como te llamas?")
        this.nombre = newNombre
    }
}


let usuario3 = new UsuarioClass("Alejandro", 24, "Max premium")

// console.log(usuario3)
// console.log(usuario)

// localStorage.setItem("dark", JSON.stringify(usuario))
// let valor = JSON.parse(localStorage.getItem("dark"))

// console.log(valor)


