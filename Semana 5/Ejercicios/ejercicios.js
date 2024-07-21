// Objetos:

/*

1. Crear dos colecciones de objetos literales. Cuando hablamos de colecciones, hacemos referencia a arrays de objetos. Pueden ser de dos temas diferentes o del mismo tema. Sean creativos con la manera de crearlos.
2. Crear dos clases constructoras para poder instanciar nuevos objetos de nuestros arrays anteriores.
3. Integración con temas anteriores: crear una función que solicite al usuario los datos para poder realizar una nueva instancia de un objeto "Alumno". Para ello, debemos crear la clase "Alumno". La misma contendrá: nombre, apellido, edad, correo y un método (función) que muestre por alert una presentación del alumno con sus datos. Ejemplo: si el profe fuese tal alumno, el método presentarAlumno podría ser un alert que diga "Buenos días. Mi nombre es Lucas Ruiz, tengo 17 años y mi correo es profe@lucas.com.ar"

*/

// localStorage y sessionStorage (aclaración: vamos a hablar de STORAGE, pero puede ser cualquiera de ambos. Queda a decisión de cada uno utilizar uno, otro o ambos para los ejercicios planteados):

/*

1. Solicitar al usuario que ingrese por prompt su nombre y almacenarlo en storage.
2. Solicitar al usuario que ingrese por prompt su edad y almacenarla en storage.
3. Solicitar por prompt otro dato personal del usuario (a elección de cada uno).
4. Realizar una función que solicite al usuario si quiere mostrar su nombre, su edad u otro ítem. En base a la respuesta dada, recuperar esa información desde storage.
5. Realizar una función que solicite al usuario indicar qué dato desea borrar de storage.

*/

// Ejercicio integrador:

/*

Se les va a proveer un array de productos. La idea es almacenarlos en storage para emular una carga de base de datos. Luego, se pedirá una función integradora que solicite al usuario si quiere o no agregar un nuevo producto. En caso de querer agregar, deberá pedir los datos necesarios para crear ese nuevo producto (tener cuidado con la estructura del objeto, en donde podemos crear una clase constructora o hacerlo desde un objeto literal). Se les va a proveer también una estructura base para que se centren solamente en trabajar lo integrado.

Estructura base para trabajar:

const productos = [
    {
        id: 1,
        nombre: "Producto de prueba A",
        precio: 100
    },
    {
        id: 2,
        nombre: "Producto de prueba B",
        precio: 200
    },
    {
        id: 3,
        nombre: "Producto de prueba C",
        precio: 150
    },
    {
        id: 4,
        nombre: "Producto de prueba D",
        precio: 80
    },
]

let opcion;

do {
    opcion = prompt("Bienvenido al sistema de gestión de productos. Estas son nuestras opciones:\n\n1. Mostrar todos los productos.\n2. Agregar un nuevo producto.\n\nPara salir, ingrese 0");

    switch (opcion) {
        case 0:
            alert("Muchas gracias por su visita");
            break;
        case 1:
            // REALIZAR LA FUNCIÓN QUE MUESTRE TODOS LOS PRODUCTOS
            break;
        case 2:
            // REALIZAR LA FUNCIÓN QUE SOLICITE DATOS PARA AGREGAR UN NUEVO PRODUCTO
            break;

        default:
            alert("Por favor, ingrese una opción válida");
            break;
    };

} while (opcion !== 0);

*/

// IMPORTANTE: LA ESTRUCTURA BASE FUE PROVISTA PARA QUE NO PIERDAN TIEMPO EN ELLA, PERO LOS INVITO AL DESAFÍO DE ARMAR SU PROPIA ESTRUCTURA CON UNA LÓGICA QUE CONSIDEREN MÁS CÓMODA O ACORDE. ASÍMISMO, SIÉNTANSE EN LA LIBERTAD DE CREAR Y UTILIZAR LA CANTIDAD DE FUNCIONES Y VARIABLES QUE CONSIDEREN NECESARIAS. COMO PISTA, SEGURAMENTE TENGAN QUE CREAR AL MENOS UNA VARIABLE MÁS Y AL MENOS UN PAR DE FUNCIONES.