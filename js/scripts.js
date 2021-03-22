let pokemonList = [
  { name: "Bulbasaur", height: 0.7, type: ['grass', 'poison'] },
  { name: "Charmander", height: 0.6, type: ['fire'] },
  { name: "Pikachu", height: 0.4, type: ['electric'] },
];

pokemonList.forEach(function(pokemon) {
  if (pokemon.height > 0.6){
  document.write (pokemon.name + " - " + pokemon.type + " type, " + pokemon.height + " meters tall. (Wow that's big!) <br /> ")
} else {
  document.write (pokemon.name + " - " + pokemon.type + " type, " + pokemon.height + " meters tall. <br /> ")
}
});