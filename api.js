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
    characterElement.innerHTML += `
    <button class="trigger">${character.name}</button>
    <div class="modal">
        <div class="modal-content">
            <span class="close-button">×</span>
            <h1>${character.name}</h1>
            <p>${character.species}</p>
            <p>${character.status}</p>
            <p>${character.origin.name}</p>
        </div>
    </div>
    `;

    charactersDiv.append(characterElement);
  });

  const modal = document.querySelector(".modal");
  const trigger = document.querySelector(".trigger");
  const closeButton = document.querySelector(".close-button");

  function toggleModal() {
    modal.classList.toggle("show-modal");
  }

  function windowOnClick(event) {
    if (event.target === modal) {
      toggleModal();
    }
  }

  trigger.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);
};
