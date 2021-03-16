
let pokemonList = [
  { name: "Bulbasaur", height: 0.7, type: ['grass', 'poison'] },
  { name: "Charmander", height: 0.6, type: ['fire'] },
  { name: "Pikachu", height: 0.4, type: ['electric'] },
];

for (let i=0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 0.6){
  document.write (pokemonList[i].name + " - " + pokemonList[i].type + " type, " + pokemonList[i].height + " meters tall. (Wow that's big!) ")
} else {
  document.write (pokemonList[i].name + " - " + pokemonList[i].type + " type, " + pokemonList[i].height + " meters tall. ")
}
}