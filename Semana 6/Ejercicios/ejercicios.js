// Funciones de orden superior

/*

Si bien es cierto, hemos visto en clases funciones que retornan funciones y funciones que reciben funciones por parámetros, vamos a ejercitar mayormente el segundo caso que el primero para poder utilizar los métodos de búsqueda y transformación de arrays

El siguiente array posee datos de personas (fue generado con IA y cualquier parecido con la realidad es pura coincidencia) en los cuáles se destacan edad, si se han casado o no y si poseen hijos. Vamos a trabajar a partir de este array.

const personas = [
  { nombre: 'Ana', apellido: 'García', edad: 25, casado: false, hijos: false },
  { nombre: 'Juan', apellido: 'Martínez', edad: 30, casado: true, hijos: true },
  { nombre: 'María', apellido: 'Rodríguez', edad: 22, casado: false, hijos: false },
  { nombre: 'Carlos', apellido: 'Pérez', edad: 35, casado: true, hijos: true },
  { nombre: 'Sofía', apellido: 'López', edad: 28, casado: true, hijos: false },
  { nombre: 'Javier', apellido: 'Hernández', edad: 40, casado: true, hijos: true },
  { nombre: 'Laura', apellido: 'Díaz', edad: 18, casado: false, hijos: false },
  { nombre: 'Daniel', apellido: 'Ruiz', edad: 32, casado: true, hijos: false },
  { nombre: 'Carmen', apellido: 'Torres', edad: 19, casado: false, hijos: false },
  { nombre: 'Alejandro', apellido: 'Sánchez', edad: 45, casado: true, hijos: true },
  { nombre: 'Elena', apellido: 'Flores', edad: 24, casado: false, hijos: true },
  { nombre: 'Roberto', apellido: 'Ramírez', edad: 38, casado: true, hijos: true },
  { nombre: 'Isabel', apellido: 'Gómez', edad: 29, casado: false, hijos: false },
  { nombre: 'Miguel', apellido: 'Cruz', edad: 23, casado: false, hijos: false },
  { nombre: 'Patricia', apellido: 'Vargas', edad: 27, casado: true, hijos: true },
  { nombre: 'Fernando', apellido: 'Molina', edad: 41, casado: true, hijos: true },
  { nombre: 'Luisa', apellido: 'Ortega', edad: 20, casado: false, hijos: false },
  { nombre: 'Mario', apellido: 'Guerrero', edad: 33, casado: true, hijos: false },
  { nombre: 'Beatriz', apellido: 'Castro', edad: 26, casado: false, hijos: true },
  { nombre: 'Ricardo', apellido: 'Navarro', edad: 34, casado: true, hijos: true },
];

1. Realizar una función que recorra el array para dar un estadístico final de cuántas personas están casadas y cuántas no. (Se puede hacer de varias maneras pero recomendamos primero arrancar con forEach).
2. Encontrar el objeto de Elena Flores mediante algún método de búsqueda.
3. Realizar una función que solicite por prompt al usuario que ingrese su apellido. Con su apellido debe buscar en el array de personas si hay alguien con su mismo apellido, evidenciando una potencial familiaridad (es todo ficticio, claramente). Mostrar mensajes acordes de acuerdo al resultado. Ejemplo: si el profesor ingresara su apellido, debería recibir un mensaje del estilo "Existe un tal Daniel Ruiz, podría ser tu pariente". Si el apellido del profesor fuese Messi, debería recibir un mensaje del estilo "No existe ningún Messi en nuestra base de datos".
4. Realizar un nuevo array llamado personasProfe que consiste en asignarle a todos los usuarios la edad del profe (17 años por si aún no recuerdan a esta altura de la cursada).
5. Utilizar algún método para realizar la sumatoria de edades de todos los usuarios. El resultado final es 664. (Se podría utilizar un método reduce pero pueden analizar otras variantes).


EJERCICIO FINAL INTEGRADOR:

-Realizar un programa con las estructuras ya usadas anteriormente. Se le va a solicitar al usuario en un menú 3 opciones de filtrado:

1. Por estado civil
2. Por edad (mayores que una edad determinada)
3. Por la primera letra de su nombre

En el primer caso, vamos a preguntarle al usuario si quiere a los casados o solteros y en base a eso, mostrar solo las personas que cumplan esa condición.
En el segundo caso, vamos a solicitarle una edad al usuario que va a ser nuestra edad base. De ahí en adelante tomaremos todos los que estén dentro de esa edad. Ejemplo: si ponemos 30 de edad, vamos a traer todos los que tengan edad mayor o igual a 30.
En el último caso, pedimos al usuario que ingrese una letra y nos fijamos en la propiedad nombre de cada objeto. Si el usuario ingresa dos letras, solicitar nuevamente información. Si ingresa una letra válida pero no encuentra ninguna persona con esa letra, mostrar un mensaje avisando que no hay personas cuyo nombre inicie con esa letra. Pista: quizás un toUpperCase funcione.

*/