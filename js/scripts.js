let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function addListItem(pokemon){
    let orderedList = document.querySelector ('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemonButton');
     //append the button and the list to their parents 
    listItem.appendChild(button);
    orderedList.appendChild(listItem);
    button.addEventListener('click', function (event) {
    showDetails (pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

   //execute the details of clicked pokemon on console 
   function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
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
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});

 /* Previous function- if (pokemon.height > 0.6){
  document.write (pokemon.name + " - " + pokemon.type + " type, " + pokemon.height + " meters tall. (Wow that's big!) <br /> ")
} else {
  document.write (pokemon.name + " - " + pokemon.type + " type, " + pokemon.height + " meters tall. <br /> ")
}
}); */