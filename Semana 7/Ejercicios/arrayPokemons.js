const allPokemons = [
    {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    },
    {
        "name": "venusaur",
        "url": "https://pokeapi.co/api/v2/pokemon/3/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    },
    {
        "name": "charmander",
        "url": "https://pokeapi.co/api/v2/pokemon/4/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
        "name": "charmeleon",
        "url": "https://pokeapi.co/api/v2/pokemon/5/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    {
        "name": "charizard",
        "url": "https://pokeapi.co/api/v2/pokemon/6/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
        "name": "squirtle",
        "url": "https://pokeapi.co/api/v2/pokemon/7/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
        "name": "wartortle",
        "url": "https://pokeapi.co/api/v2/pokemon/8/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
    },
    {
        "name": "blastoise",
        "url": "https://pokeapi.co/api/v2/pokemon/9/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    },
    {
        "name": "caterpie",
        "url": "https://pokeapi.co/api/v2/pokemon/10/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
    },
    {
        "name": "metapod",
        "url": "https://pokeapi.co/api/v2/pokemon/11/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    },
    {
        "name": "butterfree",
        "url": "https://pokeapi.co/api/v2/pokemon/12/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    {
        "name": "weedle",
        "url": "https://pokeapi.co/api/v2/pokemon/13/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
    },
    {
        "name": "kakuna",
        "url": "https://pokeapi.co/api/v2/pokemon/14/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
    },
    {
        "name": "beedrill",
        "url": "https://pokeapi.co/api/v2/pokemon/15/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
    },
    {
        "name": "pidgey",
        "url": "https://pokeapi.co/api/v2/pokemon/16/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
    },
    {
        "name": "pidgeotto",
        "url": "https://pokeapi.co/api/v2/pokemon/17/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
    },
    {
        "name": "pidgeot",
        "url": "https://pokeapi.co/api/v2/pokemon/18/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
    },
    {
        "name": "rattata",
        "url": "https://pokeapi.co/api/v2/pokemon/19/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    {
        "name": "raticate",
        "url": "https://pokeapi.co/api/v2/pokemon/20/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
    },
    {
        "name": "spearow",
        "url": "https://pokeapi.co/api/v2/pokemon/21/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
    },
    {
        "name": "fearow",
        "url": "https://pokeapi.co/api/v2/pokemon/22/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
    },
    {
        "name": "ekans",
        "url": "https://pokeapi.co/api/v2/pokemon/23/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
    },
    {
        "name": "arbok",
        "url": "https://pokeapi.co/api/v2/pokemon/24/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
    },
    {
        "name": "pikachu",
        "url": "https://pokeapi.co/api/v2/pokemon/25/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    {
        "name": "raichu",
        "url": "https://pokeapi.co/api/v2/pokemon/26/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
    },
    {
        "name": "sandshrew",
        "url": "https://pokeapi.co/api/v2/pokemon/27/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
    },
    {
        "name": "sandslash",
        "url": "https://pokeapi.co/api/v2/pokemon/28/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
    },
    {
        "name": "nidoran-f",
        "url": "https://pokeapi.co/api/v2/pokemon/29/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
    },
    {
        "name": "nidorina",
        "url": "https://pokeapi.co/api/v2/pokemon/30/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
    },
    {
        "name": "nidoqueen",
        "url": "https://pokeapi.co/api/v2/pokemon/31/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
    },
    {
        "name": "nidoran-m",
        "url": "https://pokeapi.co/api/v2/pokemon/32/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
    },
    {
        "name": "nidorino",
        "url": "https://pokeapi.co/api/v2/pokemon/33/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
    },
    {
        "name": "nidoking",
        "url": "https://pokeapi.co/api/v2/pokemon/34/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
    },
    {
        "name": "clefairy",
        "url": "https://pokeapi.co/api/v2/pokemon/35/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
    },
    {
        "name": "clefable",
        "url": "https://pokeapi.co/api/v2/pokemon/36/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
    },
    {
        "name": "vulpix",
        "url": "https://pokeapi.co/api/v2/pokemon/37/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
    },
    {
        "name": "ninetales",
        "url": "https://pokeapi.co/api/v2/pokemon/38/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
    },
    {
        "name": "jigglypuff",
        "url": "https://pokeapi.co/api/v2/pokemon/39/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
    },
    {
        "name": "wigglytuff",
        "url": "https://pokeapi.co/api/v2/pokemon/40/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
    },
    {
        "name": "zubat",
        "url": "https://pokeapi.co/api/v2/pokemon/41/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
    },
    {
        "name": "golbat",
        "url": "https://pokeapi.co/api/v2/pokemon/42/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
    },
    {
        "name": "oddish",
        "url": "https://pokeapi.co/api/v2/pokemon/43/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
    },
    {
        "name": "gloom",
        "url": "https://pokeapi.co/api/v2/pokemon/44/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
    },
    {
        "name": "vileplume",
        "url": "https://pokeapi.co/api/v2/pokemon/45/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
    },
    {
        "name": "paras",
        "url": "https://pokeapi.co/api/v2/pokemon/46/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
    },
    {
        "name": "parasect",
        "url": "https://pokeapi.co/api/v2/pokemon/47/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
    },
    {
        "name": "venonat",
        "url": "https://pokeapi.co/api/v2/pokemon/48/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
    },
    {
        "name": "venomoth",
        "url": "https://pokeapi.co/api/v2/pokemon/49/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
    },
    {
        "name": "diglett",
        "url": "https://pokeapi.co/api/v2/pokemon/50/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
    },
    {
        "name": "dugtrio",
        "url": "https://pokeapi.co/api/v2/pokemon/51/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
    },
    {
        "name": "meowth",
        "url": "https://pokeapi.co/api/v2/pokemon/52/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
    },
    {
        "name": "persian",
        "url": "https://pokeapi.co/api/v2/pokemon/53/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
    },
    {
        "name": "psyduck",
        "url": "https://pokeapi.co/api/v2/pokemon/54/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
    },
    {
        "name": "golduck",
        "url": "https://pokeapi.co/api/v2/pokemon/55/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
    },
    {
        "name": "mankey",
        "url": "https://pokeapi.co/api/v2/pokemon/56/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
    },
    {
        "name": "primeape",
        "url": "https://pokeapi.co/api/v2/pokemon/57/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
    },
    {
        "name": "growlithe",
        "url": "https://pokeapi.co/api/v2/pokemon/58/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
    },
    {
        "name": "arcanine",
        "url": "https://pokeapi.co/api/v2/pokemon/59/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
    },
    {
        "name": "poliwag",
        "url": "https://pokeapi.co/api/v2/pokemon/60/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
    },
    {
        "name": "poliwhirl",
        "url": "https://pokeapi.co/api/v2/pokemon/61/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
    },
    {
        "name": "poliwrath",
        "url": "https://pokeapi.co/api/v2/pokemon/62/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
    },
    {
        "name": "abra",
        "url": "https://pokeapi.co/api/v2/pokemon/63/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
    },
    {
        "name": "kadabra",
        "url": "https://pokeapi.co/api/v2/pokemon/64/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
    },
    {
        "name": "alakazam",
        "url": "https://pokeapi.co/api/v2/pokemon/65/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
    },
    {
        "name": "machop",
        "url": "https://pokeapi.co/api/v2/pokemon/66/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
    },
    {
        "name": "machoke",
        "url": "https://pokeapi.co/api/v2/pokemon/67/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
    },
    {
        "name": "machamp",
        "url": "https://pokeapi.co/api/v2/pokemon/68/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
    },
    {
        "name": "bellsprout",
        "url": "https://pokeapi.co/api/v2/pokemon/69/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
    },
    {
        "name": "weepinbell",
        "url": "https://pokeapi.co/api/v2/pokemon/70/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
    },
    {
        "name": "victreebel",
        "url": "https://pokeapi.co/api/v2/pokemon/71/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
    },
    {
        "name": "tentacool",
        "url": "https://pokeapi.co/api/v2/pokemon/72/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
    },
    {
        "name": "tentacruel",
        "url": "https://pokeapi.co/api/v2/pokemon/73/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
    },
    {
        "name": "geodude",
        "url": "https://pokeapi.co/api/v2/pokemon/74/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
    },
    {
        "name": "graveler",
        "url": "https://pokeapi.co/api/v2/pokemon/75/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
    },
    {
        "name": "golem",
        "url": "https://pokeapi.co/api/v2/pokemon/76/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
    },
    {
        "name": "ponyta",
        "url": "https://pokeapi.co/api/v2/pokemon/77/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
    },
    {
        "name": "rapidash",
        "url": "https://pokeapi.co/api/v2/pokemon/78/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
    },
    {
        "name": "slowpoke",
        "url": "https://pokeapi.co/api/v2/pokemon/79/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
    },
    {
        "name": "slowbro",
        "url": "https://pokeapi.co/api/v2/pokemon/80/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
    },
    {
        "name": "magnemite",
        "url": "https://pokeapi.co/api/v2/pokemon/81/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
    },
    {
        "name": "magneton",
        "url": "https://pokeapi.co/api/v2/pokemon/82/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
    },
    {
        "name": "farfetchd",
        "url": "https://pokeapi.co/api/v2/pokemon/83/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
    },
    {
        "name": "doduo",
        "url": "https://pokeapi.co/api/v2/pokemon/84/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
    },
    {
        "name": "dodrio",
        "url": "https://pokeapi.co/api/v2/pokemon/85/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
    },
    {
        "name": "seel",
        "url": "https://pokeapi.co/api/v2/pokemon/86/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
    },
    {
        "name": "dewgong",
        "url": "https://pokeapi.co/api/v2/pokemon/87/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
    },
    {
        "name": "grimer",
        "url": "https://pokeapi.co/api/v2/pokemon/88/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
    },
    {
        "name": "muk",
        "url": "https://pokeapi.co/api/v2/pokemon/89/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
    },
    {
        "name": "shellder",
        "url": "https://pokeapi.co/api/v2/pokemon/90/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
    },
    {
        "name": "cloyster",
        "url": "https://pokeapi.co/api/v2/pokemon/91/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
    },
    {
        "name": "gastly",
        "url": "https://pokeapi.co/api/v2/pokemon/92/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
    },
    {
        "name": "haunter",
        "url": "https://pokeapi.co/api/v2/pokemon/93/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
    },
    {
        "name": "gengar",
        "url": "https://pokeapi.co/api/v2/pokemon/94/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
    },
    {
        "name": "onix",
        "url": "https://pokeapi.co/api/v2/pokemon/95/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
    },
    {
        "name": "drowzee",
        "url": "https://pokeapi.co/api/v2/pokemon/96/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
    },
    {
        "name": "hypno",
        "url": "https://pokeapi.co/api/v2/pokemon/97/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
    },
    {
        "name": "krabby",
        "url": "https://pokeapi.co/api/v2/pokemon/98/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
    },
    {
        "name": "kingler",
        "url": "https://pokeapi.co/api/v2/pokemon/99/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
    },
    {
        "name": "voltorb",
        "url": "https://pokeapi.co/api/v2/pokemon/100/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
    },
    {
        "name": "electrode",
        "url": "https://pokeapi.co/api/v2/pokemon/101/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
    },
    {
        "name": "exeggcute",
        "url": "https://pokeapi.co/api/v2/pokemon/102/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"
    },
    {
        "name": "exeggutor",
        "url": "https://pokeapi.co/api/v2/pokemon/103/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
    },
    {
        "name": "cubone",
        "url": "https://pokeapi.co/api/v2/pokemon/104/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"
    },
    {
        "name": "marowak",
        "url": "https://pokeapi.co/api/v2/pokemon/105/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
    },
    {
        "name": "hitmonlee",
        "url": "https://pokeapi.co/api/v2/pokemon/106/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
    },
    {
        "name": "hitmonchan",
        "url": "https://pokeapi.co/api/v2/pokemon/107/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"
    },
    {
        "name": "lickitung",
        "url": "https://pokeapi.co/api/v2/pokemon/108/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
    },
    {
        "name": "koffing",
        "url": "https://pokeapi.co/api/v2/pokemon/109/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"
    },
    {
        "name": "weezing",
        "url": "https://pokeapi.co/api/v2/pokemon/110/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
    },
    {
        "name": "rhyhorn",
        "url": "https://pokeapi.co/api/v2/pokemon/111/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"
    },
    {
        "name": "rhydon",
        "url": "https://pokeapi.co/api/v2/pokemon/112/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
    },
    {
        "name": "chansey",
        "url": "https://pokeapi.co/api/v2/pokemon/113/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"
    },
    {
        "name": "tangela",
        "url": "https://pokeapi.co/api/v2/pokemon/114/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
    },
    {
        "name": "kangaskhan",
        "url": "https://pokeapi.co/api/v2/pokemon/115/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
    },
    {
        "name": "horsea",
        "url": "https://pokeapi.co/api/v2/pokemon/116/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
    },
    {
        "name": "seadra",
        "url": "https://pokeapi.co/api/v2/pokemon/117/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"
    },
    {
        "name": "goldeen",
        "url": "https://pokeapi.co/api/v2/pokemon/118/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"
    },
    {
        "name": "seaking",
        "url": "https://pokeapi.co/api/v2/pokemon/119/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
    },
    {
        "name": "staryu",
        "url": "https://pokeapi.co/api/v2/pokemon/120/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
    },
    {
        "name": "starmie",
        "url": "https://pokeapi.co/api/v2/pokemon/121/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
    },
    {
        "name": "mr-mime",
        "url": "https://pokeapi.co/api/v2/pokemon/122/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
    },
    {
        "name": "scyther",
        "url": "https://pokeapi.co/api/v2/pokemon/123/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
    },
    {
        "name": "jynx",
        "url": "https://pokeapi.co/api/v2/pokemon/124/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
    },
    {
        "name": "electabuzz",
        "url": "https://pokeapi.co/api/v2/pokemon/125/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
    },
    {
        "name": "magmar",
        "url": "https://pokeapi.co/api/v2/pokemon/126/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
    },
    {
        "name": "pinsir",
        "url": "https://pokeapi.co/api/v2/pokemon/127/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
    },
    {
        "name": "tauros",
        "url": "https://pokeapi.co/api/v2/pokemon/128/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
    },
    {
        "name": "magikarp",
        "url": "https://pokeapi.co/api/v2/pokemon/129/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
    },
    {
        "name": "gyarados",
        "url": "https://pokeapi.co/api/v2/pokemon/130/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
    },
    {
        "name": "lapras",
        "url": "https://pokeapi.co/api/v2/pokemon/131/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
    },
    {
        "name": "ditto",
        "url": "https://pokeapi.co/api/v2/pokemon/132/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    },
    {
        "name": "eevee",
        "url": "https://pokeapi.co/api/v2/pokemon/133/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
    },
    {
        "name": "vaporeon",
        "url": "https://pokeapi.co/api/v2/pokemon/134/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
    },
    {
        "name": "jolteon",
        "url": "https://pokeapi.co/api/v2/pokemon/135/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
    },
    {
        "name": "flareon",
        "url": "https://pokeapi.co/api/v2/pokemon/136/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
    },
    {
        "name": "porygon",
        "url": "https://pokeapi.co/api/v2/pokemon/137/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"
    },
    {
        "name": "omanyte",
        "url": "https://pokeapi.co/api/v2/pokemon/138/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
    },
    {
        "name": "omastar",
        "url": "https://pokeapi.co/api/v2/pokemon/139/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
    },
    {
        "name": "kabuto",
        "url": "https://pokeapi.co/api/v2/pokemon/140/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
    },
    {
        "name": "kabutops",
        "url": "https://pokeapi.co/api/v2/pokemon/141/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
    },
    {
        "name": "aerodactyl",
        "url": "https://pokeapi.co/api/v2/pokemon/142/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
    },
    {
        "name": "snorlax",
        "url": "https://pokeapi.co/api/v2/pokemon/143/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
    },
    {
        "name": "articuno",
        "url": "https://pokeapi.co/api/v2/pokemon/144/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
    },
    {
        "name": "zapdos",
        "url": "https://pokeapi.co/api/v2/pokemon/145/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
    },
    {
        "name": "moltres",
        "url": "https://pokeapi.co/api/v2/pokemon/146/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
    },
    {
        "name": "dratini",
        "url": "https://pokeapi.co/api/v2/pokemon/147/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
    },
    {
        "name": "dragonair",
        "url": "https://pokeapi.co/api/v2/pokemon/148/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"
    },
    {
        "name": "dragonite",
        "url": "https://pokeapi.co/api/v2/pokemon/149/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
    },
    {
        "name": "mewtwo",
        "url": "https://pokeapi.co/api/v2/pokemon/150/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
    },
    {
        "name": "mew",
        "url": "https://pokeapi.co/api/v2/pokemon/151/",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
    }
];