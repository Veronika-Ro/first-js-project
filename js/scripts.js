let pokemonRepository = (function () {
  let pokemonList = [
  { name: "Bulbasaur", height: 0.7, type: ['grass', 'poison'] },
  { name: "Charmander", height: 0.6, type: ['fire'] },
  { name: "Pikachu", height: 0.4, type: ['electric'] },
  ];

  function addListItem(pokemon){
    let orderedList = document.querySelector ('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemonButton');
     //append the butten and the list to their parents 
    listItem.appendChild(button);
    orderedList.appendChild(listItem);
    button.addEventListener('click', function (event) {
    showDetails (pokemon);
    });
  }

   //execute the details of clicked pokemon on console 
  function showDetails(pokemon){
    console.log(pokemon);
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  //getAll execute the pokemonlist
  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem (pokemon);
});

 /* Previous function- if (pokemon.height > 0.6){
  document.write (pokemon.name + " - " + pokemon.type + " type, " + pokemon.height + " meters tall. (Wow that's big!) <br /> ")
} else {
  document.write (pokemon.name + " - " + pokemon.type + " type, " + pokemon.height + " meters tall. <br /> ")
}
}); */