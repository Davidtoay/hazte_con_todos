'use strict';
    
    // MAPEO Y LLAMADAA LA API

const listaPokemon = document.querySelector("#pokedex")


const obtenerPokemons = async ()=> {

    const pokemons = [];

    for (let i = 1; i <= 150; i++) {

        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const pokemonRe = await respuesta.json();
        // console.log(pokemonRe);
        
        pokemons.push({
            name: pokemonRe.name,
            image: pokemonRe.sprites.versions["generation-v"]['black-white'].animated.front_shiny,
            type: pokemonRe.types.map((type) => type.type.name).join(', '),
            id: pokemonRe.id,
        });
    }
    console.log(pokemons);
    pintamosPokemons(pokemons)

    return pokemons;

}


    // PINTAMOS LOS POKEMOS
    const pintamosPokemons = (pokemons) => {
        // listaPokemon.innerHTML = "";
        for (const pokemon of pokemons) {

            let pokeli = document.createElement("li");
            pokeli.className = "card";
            // pokeli.innerHTML = pokemon;
            const carta = document.createElement("div");


            const idPokemon = document.createElement("div");
            // idPokemon.className = "card";
            idPokemon.innerHTML = pokemon.id;

            const titlePokemon = document.createElement("div");
            titlePokemon.className = "card-title";
            titlePokemon.innerHTML = pokemon.name;

            const typePokemon = document.createElement("div");
            typePokemon.className = "card-subtitle";
            typePokemon.innerHTML = pokemon.type;

            const fotoPokemon = document.createElement("img")
            fotoPokemon.className = "card-image";
            fotoPokemon.src = pokemon.image;
            
            pokeli.appendChild(idPokemon);
            pokeli.appendChild(titlePokemon);
            pokeli.appendChild(fotoPokemon);
            pokeli.appendChild(typePokemon);


            listaPokemon.appendChild(pokeli);

            document.body.appendChild(listaPokemon);

        }

}

obtenerPokemons();


const buscarPokemon = document.createElement("input");
// buscarPokemon.innerHTML = "value";
buscarPokemon.addEventListener("input", (pokemon) => {
    return pokemon.name;
})


document.body.appendChild(buscarPokemon);


    // const cercaTuPokemon = (pokemon, value) => {
    //      filtrarPokemon = pokemon.filter ((pokemon) ({

    //     return pokemon.name.toLowerCase().includes(value.toLowerCase())
    // }));

    // pintamosPokemons(filtrarPokemon);

    
    // var rebels = pilots.filter(function (pilot) {  
    //     return pilot.faction === "Rebels";});

