const pokemonName = document.getElementById('pokemon-name');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonFrontimg = document.getElementById
pokemonName.innerText = 'El nombre de mi pokemon es: ';

const pokemonApiUrl = 'https://pokeapi.co/api/v2/';

let getPokemonData = async ()=> {
    const response = await fetch(`${pokemonApiUrl}pokemon/1/`);
    const pokemon = await response.json();
    console.log(pokemon);
    const {name , height} = pokemonName;
    pokemonName.innerText = name;
    pokemonHeight.innerText = `La altura es: ${height}`;
    pokemonFrontimg.src = frontimg
};
getPokemonData();