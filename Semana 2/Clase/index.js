// console.log(3 == "3")//Verdadero
// console.log(3 === "3")//Falso


// console.log(3 != "3")//Falso
// console.log(3 !== "3")//Verdadero

// console.log(10 > 9) //Verdadero
// console.log(10 >= 9) //Verdadero
// console.log(10 < 9) //Falso
// console.log(10 <= 9) //Falso

// console.log(!(3 == "3")) //Falso
// console.log(3 == "3") //Verdadero


// console.log( 3 == "3" && 3 == 3 )// Verdadero
// console.log( 3 === "3" && 3 == 3 )// Falso


// console.log( 3 == "3" || 3 == 3 )// Verdadero
// console.log( 3 === "3" || 3 == 3 )// Verdadero

// let edad = parseInt(prompt("¿Cuantos años tienes?"))

// if (edad >= 18) {
//     alert("Puede pasar!")
// } else {
//     alert("Anda a jugar roblox")
// }

// alert("Sigo aqui")

// const nombreUser = prompt("¿Cual es tu nombre de usuario?")
// const nombrePass = prompt("¿Cual es tu contraseña?")


// if(nombrePass != "" && nombreUser != ""){
//     alert("Podes pasar")
// }else{
//     alert("No podes pasar")
// }


// let pasa = confirm("¿Quieres entrar a la tienda?") // True o False


// if ( pasa ){
//     alert("Bienvenido!")
//     const producto = parseInt(prompt("¿Quiere un pantalon (1) o quiere una remera (2) o un spinner (3)"))

//     if(producto === 1){
//         alert("Tenemos muchos, fijate al fondo")
//     } else if (producto === 2){
//         alert("No viste que solo vendemos pantalones? Igual tenemos algo")
//     } else if (producto === 3){
//         alert("Sos el primero en años, aca esta")
//     }else{
//         alert("Apretaste cualquier cosa")
//     }

// } else {
//     alert("Ni queria que entres")
// }



// let entrada = prompt("Ingresar un nombre");

// switch (entrada) {
//     case "ANA":
//             alert("HOLA ANA");
//             break;
//     case "JUAN":
//             alert("HOLA JUAN");
//             break;
//     case "NACHO":
//             alert("HOLA NACHO, COMO ESTAS!")
//             break
//     default:
//         alert("¿QUIÉN SOS?")
//         break;
// }


// let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// // En cada repetición, calculamos el número ingresado X el número de repetición (i) #Team++
// for (let i = 1; i <= 100; i++) {
//     let resultado = ingresarNumero * i ;
//     console.log(ingresarNumero + " X " + i + " = " + resultado);
// }


// let entrada = prompt("Ingresar un dato");
// //Repetimos con While hasta que el usuario ingresa "ESC"
// while(entrada != "ESC" ){
//     alert("El usuario ingresó " + entrada);
//     //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
//     entrada = prompt("Ingresar otro dato");
// }


// let total = 0
// let totalAlumnos = 0
// let bandera = true

// while(bandera){
//     let nota = parseInt(prompt("¿Cual es la nota?"))
//     total = total + nota
//     totalAlumnos++
//     bandera = confirm("¿Quiere seguir?")
// }

// alert("El promedio fue: " + total/totalAlumnos)


// let total = 0
// let cantidadDeAlumnos = parseInt(prompt("¿Cuantos alumnos tenes?"))

// for(let i = 1; i <= cantidadDeAlumnos; i++){
//     let nota = parseInt(prompt("¿Cual es la nota del alumno " + i + "?"))

//     total = total + nota
// }

// alert("El promedio fue: " + total/cantidadDeAlumnos)


// let total = 0
// let nota;
// let totalDeAlumnos = 0

// do{
//     nota = parseInt(prompt("¿Cual es la nota? Si ingresa 0, termina el codigo"))
//     if(nota !== 0){
//         totalDeAlumnos++
//         total = total + nota
//     }
// }while(nota !== 0)

// alert("El promedio fue: " + total/totalDeAlumnos)