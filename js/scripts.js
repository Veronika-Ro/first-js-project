let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');
  
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

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the pokemon
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.weight = details.weight;
      pokemon.types = details.types;
      pokemon.types = details.types.map(function(pokemon) {
        return pokemon.type.name;
        });
    }).catch(function (e) {
      console.error(e);
    });
  }

  function addListItem(pokemon){
    let orderedList = document.querySelector ('.pokemon-list');
    let listItem = document.createElement('li');
    listItem.classList.add('group-list-item' , 'col-12' , 'col-sm' , 'col-xs' , 'justify-content-around' , 'd-flex');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemonButton' , 'btn' , 'btn-outline-danger');
    button.setAttribute('data-toggle','modal');
    button.setAttribute('data-target', '#modal-container');
    //append the button and the list to their parents 
    listItem.appendChild(button);
    orderedList.appendChild(listItem);
    button.addEventListener('click', function (event) {
    showDetails (pokemon);
    });
  }

    //Modal function//
    function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    let modalHeader = $('.modal-header');

    //clear exisisting content of the Modal
    modalTitle.empty();
    modalBody.empty();

    //creatingg element for name in the modal
    let nameElement = $('<h1>' + pokemon.name + '</h1>');

    //creating the image in modal content
    let imageElementFront = $('<img class="modal-img">');
    imageElementFront.attr("src", pokemon.imageUrl);

    //creating element for height in modal content
    let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");

    //creating element for type in modal content
    let typesElement = $("<p>" + "type : " + pokemon.types + "</p>");

    //creating element for weight in modal content
    let weightElement = $("<p>" + "weight : " + pokemon.weight + "</p>");
    


    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(heightElement);
    modalBody.append(typesElement);
    modalBody.append(weightElement);
    

    }


   //execute the details of clicked pokemon on console 
   function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
    }

    //adds and pushes the pokemon to the list
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
    showDetails: showDetails,
    showModal: showModal
  };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});

