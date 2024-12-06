const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const maxRecords = 151;
const limit = 10;
let offset = 0;

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) => `
              <li class="pokemon ${pokemon.type}">
                  <span class="number">#${pokemon.number}</span>
                  <span class="name">${pokemon.name}</span> 
                  <div class="detail">
                    <ol class="types">
                        ${pokemon.types
                          .map(
                            (type) => `<li class="type ${type}">${type}</li>`
                          )
                          .join("")}
                    </ol>
                    <img src="${pokemon.photo}">
                  <button class="details-button" onclick="showPokemonDetails(${
                    pokemon.number
                  })">Detalhes</button>
                  </div>
                  <div class="pokemon-details" id="details-${
                    pokemon.number
                  }" style="display: none;">
                      <p>Altura: <span id="height-${
                        pokemon.number
                      }"></span></p>
                      <p>Peso: <span id="weight-${
                        pokemon.number
                      }"></span></p>
                      <p>HP: ${pokemon.hp}</p>
                      <p>Ataque: ${pokemon.attack}</p>
                      <p>Defesa: ${pokemon.defense}</p>
                      <p>Habilidades: ${pokemon.abilities.join(", ")}</p>
                  </div>
              </li>
          `
      )
      .join("");
    pokemonList.innerHTML += newHtml;
  });
}

function showPokemonDetails(pokemonNumber) {
  const detailsDiv = document.getElementById(`details-${pokemonNumber}`);
  if (detailsDiv.style.display === "none") {
    detailsDiv.style.display = "block";
    pokeApi
      .getPokemonDetail({
        number: pokemonNumber,
        url: `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`,
      })
      .then((pokemon) => {
        document.getElementById(`height-${pokemonNumber}`).innerText =
          pokemon.height;
        document.getElementById(`weight-${pokemonNumber}`).innerText =
          pokemon.weight;
      });
  } else {
    detailsDiv.style.display = "none";
  }
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecord = offset + limit;
  if (qtdRecord >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);
    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});
