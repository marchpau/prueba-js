// Pedir datos de una api y pintar una lista.
// Mapear los datos de la api a un objeto que necesites.
// No usar estilos, solo lógica.
// Al darle click a un elemento abrir modal o detalle que pinte la información completa.
// Para importar ficheros utilizar Import y Export.
// Extra: Si sobra tiempo, añadir paginación al listado.

// Inicio.

fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(characters => showCharacters(characters.results));

showCharacters = characters => {
    const charactersDiv = document.querySelector("#characters-list");
    characters.map(character => {
      const characterElement = document.createElement("li");
      characterElement.innerText = `${character.name}`;
      charactersDiv.append(characterElement);
    });


    const charactersModal = document.querySelector("#characters-info");
    characters.map(character => {
      const characterInfo = document.createElement("p");
      characterInfo.innerText = `${character.species}`;
      charactersModal.append(characterInfo);
    });


  }

  