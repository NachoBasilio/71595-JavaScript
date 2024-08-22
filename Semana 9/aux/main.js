// Swal.fire({
//     title: "Tomas, tenes que leer. Te recomiendo perrito con chaucha 2",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid animi soluta voluptas, facere molestiae reprehenderit ",
//     icon: "success",
//     toast: true,
//     // timer: 2000,
//     // timerProgressBar: true,
//     imageUrl: "https://media.tenor.com/rEg8BNZeuVgAAAAM/jjk-jujutsu-kaisen.gif)",
//     // background: "url(https://media.tenor.com/rEg8BNZeuVgAAAAM/jjk-jujutsu-kaisen.gif)",
//     position: "bottom-end",
//     showConfirmButton: false,
//     showCancelButton: true
// })

// Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!"
// }).then((result) => {
//     console.log(result)
// });

// Swal.fire({
//     title: "Testeando los inputs",
//     input: "time",
//     width: "2000px"
// }).then((result)=>{
//     console.log(result.value)
// })

Swal.fire({
    icon: 'info',
    title: 'Soy un mensaje Toast',
    position: 'top-end',
    width: 300,
    toast: true,
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
    background: 'cornflowerblue',
    color: 'whitesmoke'
})

const URL = "https://pokeapi.co/api/v2/pokemon"

async function cargarPublicaciones() {
    const resp = await fetch(URL)
    const posts = await resp.json()
    console.table(posts)
}

function confirmarCarga() {
    Swal.fire({
        title: '¿Descargar publicaciones del servidor?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, ver posts',
        cancelButtonText: 'No por ahora'
    }).then((response)=> {
        if (response.isConfirmed) {
            cargarPublicaciones()
        }
    })
}

confirmarCarga()