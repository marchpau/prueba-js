// Pedir datos de una api y pintar una lista.
// Mapear los datos de la api a un objeto que necesites.
// No usar estilos, solo lógica.
// Al darle click a un elemento abrir modal o detalle que pinte la información completa.
// Para importar ficheros utilizar Import y Export.
// Extra: Si sobra tiempo, añadir paginación al listado.

// Inicio.

fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Algo falló.", error));

  
