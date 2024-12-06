const pokeApi = {}

function convetPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;
    pokemon.types = types;
    pokemon.type = type;
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
     .then((response) => response.json())
     .then(pokeDetail => {
        const pokemonDetail = convetPokeApiDetailToPokemon(pokeDetail);
        pokemonDetail.height = pokeDetail.height;
        pokemonDetail.weight = pokeDetail.weight;
        pokemonDetail.hp = pokeDetail.stats[0].base_stat;
        pokemonDetail.attack = pokeDetail.stats[1].base_stat;
        pokemonDetail.defense = pokeDetail.stats[2].base_stat;
        pokemonDetail.abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name);
        return pokemonDetail;
    });
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}