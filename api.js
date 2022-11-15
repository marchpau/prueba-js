// Pedir datos de una api y pintar una lista.
// Mapear los datos de la api a un objeto que necesites.
// No usar estilos, solo lógica.
// Al darle click a un elemento abrir modal o detalle que pinte la información completa.
// Para importar ficheros utilizar Import y Export.
// Extra: Si sobra tiempo, añadir paginación al listado.

// Inicio.

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((characters) => showCharacters(characters.results));

showCharacters = (characters) => {
  const charactersDiv = document.querySelector("#characters-list");
  characters.map((character) => {
    const characterElement = document.createElement("li");
    characterElement.innerText = `${character.name}`;
    charactersDiv.append(characterElement);
  });

  const charactersModal = document.querySelector("#characters-info");
  characters.map((character) => {
    const characterInfo = document.createElement("p");
    characterInfo.innerText = `${character.species}`;
    charactersModal.append(characterInfo);
  });
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
