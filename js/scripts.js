let pokemonRepository = (function () {
  let pokemonList = [
  { name: "Bulbasaur", height: 0.7, type: ['grass', 'poison'] },
  { name: "Charmander", height: 0.6, type: ['fire'] },
  { name: "Pikachu", height: 0.4, type: ['electric'] },
];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();


pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height > 0.6){
  document.write (pokemon.name + " - " + pokemon.type + " type, " + pokemon.height + " meters tall. (Wow that's big!) <br /> ")
} else {
  document.write (pokemon.name + " - " + pokemon.type + " type, " + pokemon.height + " meters tall. <br /> ")
}
});