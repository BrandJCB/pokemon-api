const llamadaAPIFetchPokemon = (id) =>{
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then(res => res.json())
  .then( data => console.log(data))
}

llamadaAPIFetchPokemon(1);