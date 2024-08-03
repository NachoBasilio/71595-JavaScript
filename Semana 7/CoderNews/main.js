class Noticia {
    constructor(titulo, contenido, autor, imagen, categoria) {
        this.titulo = titulo;
        this.contenido = contenido;
        this.autor = autor;
        this.imagen = imagen;
        this.categoria = categoria; 
    }


}

const contenedorMayor = document.getElementById("Container-Main")

const Noticias = [
    new Noticia("Julian Alvarez marca 10 goles en un solo partido y establece un nuevo récord mundial", "El joven jugador argentino del River Plate deja boquiabiertos a los aficionados al marcar 10 goles en un solo partido, superando cualquier récord previo en la historia del fútbol.", "Juan Pérez", "https://media.ambito.com/p/9198118c25e325c23f37aa20b8ec4d2b/adjuntos/239/imagenes/040/575/0040575606/julian-alvarez-manchester-cityjpg.jpg", "futbol"),
    new Noticia("Científicos descubren un nuevo dispositivo de realidad virtual que permite a los usuarios viajar en el tiempo", "Un equipo de investigadores ha desarrollado un dispositivo de realidad virtual revolucionario que transporta a los usuarios a cualquier momento histórico, desde la era de los dinosaurios hasta el futuro distante.", "María González", "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2X3RPOITNFEF7PWMT6KHLBXXLQ.jpg", "tecnologia"),
    new Noticia("Nueva entrega de Pokémon presenta a Cristiano Ronaldo como entrenador maestro", "La última entrega de la serie Pokémon sorprende a los fans al incluir a Cristiano Ronaldo como un legendario entrenador Pokémon, desafiando a los jugadores a derrotarlo en una batalla épica.", "Carlos Martínez", "https://www.comboinfinito.com.br/principal/wp-content/uploads/2016/07/pokemon-go-cristiano-ronaldo.jpg", "pokemon"),
    new Noticia("Científicos logran clonar dinosaurios y planean abrir un parque temático", "Un grupo de científicos ha logrado un avance sin precedentes al clonar dinosaurios extintos y planean abrir un parque temático donde los visitantes podrán ver a estas criaturas prehistóricas en vivo.", "Laura Sánchez", "https://www.tecnopolis.gob.ar/wp-content/uploads/2020/07/10257688304_c30ca75b22_k-1920x1280.jpg", "tecnologia"),
    new Noticia("Angelina Jolie firma un contrato histórico para protagonizar diez películas de acción consecutivas", "La reconocida actriz Angelina Jolie ha firmado un contrato sin precedentes para protagonizar una serie de diez películas de acción consecutivas, cada una con presupuestos multimillonarios y efectos especiales de vanguardia.", "Diego López", "https://elcomercio.pe/resizer/vdbOdd_3jlemp3cGpnx22jP0XrE=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/G2IXZTKL5JFVZO32GQPWSG42JI.jpg", "extra"),
    new Noticia("Elon Musk revela su último proyecto: colonizar Marte en solo un año", "El empresario multimillonario Elon Musk ha anunciado su plan más ambicioso hasta la fecha: colonizar Marte en solo un año mediante el lanzamiento masivo de naves espaciales tripuladas.", "Andrés López", "https://www.infobae.com/new-resizer/etQPCpX3l-qnCkSfA1YSM9ejqEg=/arc-anglerfish-arc2-prod-infobae/public/26DJ6CSJAFAXJHJK2K25GL7JCM.webp", "tecnologia"),
    new Noticia("Roger Federer gana el Abierto de Australia sin perder un solo set", "El tenista suizo Roger Federer ha logrado una hazaña extraordinaria al ganar el Abierto de Australia sin perder un solo set en todo el torneo, demostrando su dominio indiscutible en la cancha.", "Andrés López", "https://media.gq.com.mx/photos/60e5c12d433a17b371256efd/16:9/w_2560%2Cc_limit/GettyImages-1322028403.jpg", "deportes"),
    new Noticia("Apple lanza un iPhone que puede teletransportar a los usuarios a cualquier parte del mundo", "La empresa tecnológica Apple ha presentado su último lanzamiento: un iPhone con la capacidad de teletransportar a los usuarios a cualquier ubicación del mundo con solo tocar la pantalla.", "Elena Martínez", "https://www.clarin.com/2023/06/20/6X-0J7sxO_720x0__1.jpg", "tecnologia"),
    new Noticia("Científicos descubren una nueva forma de vida extraterrestre en la Luna", "Un equipo de científicos ha hecho un descubrimiento impactante al encontrar evidencia de una forma de vida extraterrestre en la Luna, desencadenando un debate global sobre el origen y la naturaleza de esta misteriosa entidad.", "Roberto Soto", "https://images.ecestaticos.com/_wAYz7t3O_YxeegZ5k3HC1YpoZA=/0x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb99%2F108%2F9cd%2Fb991089cde559490dd6f5df5b9645de9.jpg", "extra"),
    new Noticia("Lady Gaga anuncia su próxima gira mundial que incluirá conciertos en la Luna y Marte", "La superestrella del pop Lady Gaga ha dejado a sus fans emocionados al anunciar su próxima gira mundial, que incluirá conciertos en la Luna y Marte, marcando un hito histórico en la industria del entretenimiento.", "María Fernández", "https://e.rpp-noticias.io/xlarge/2018/08/31/270627_670677.jpg", "extra")
];

