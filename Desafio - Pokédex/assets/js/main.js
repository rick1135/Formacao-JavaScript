
function convertPokemonToLi(pokeon) {
  return `<ol class="pokemons">
    <li class="pokemon">
      <span class="number">#001</span>
      <span class="name">${pokeon.name}</span>
      <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
        </ol>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          alt="${pokeon.name}"
        />
      </div>
    </li>
  </ol>`;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi
  .getPokemons()
  .then((pokemons = []) => {
    pokemonList.innerHTML+=pokemons.map(convertPokemonToLi).join('')
  })
  .catch((error) => console.log(error));
