

//?Función que hace el llamado a la API REST de Pokémon
const llamadaAPIFetchPokemon = async (id) =>{
  try {
    //*Llamar a la API de pokemon por medio de fetch
    const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

    //*Revisar si la peticion fu aceptada por la API de Pokemon
    if(peticion.status === 200){
      const data = await peticion.json();

      console.log(data);
      console.log('Nombre: ' + data.name);
      console.log('Imagen: ' + data.sprites.other.home.front_default);
      console.log('Habilidades:  ' + data.abilities);
      console.log('Hp: ' + data.stats[0].base_stat);
      console.log('Experiencia: ' + data.base_experience);
      console.log('Ataque: ' + data.stats[1].base_stat);

      //*Variable en la que guardaremos el HTML que se añadira 
      let cardPokemon = '';

      //Recorreomos la data que hemos traido
      cardPokemon += `
      <div class="card-pokemon">
        <div class="visual-pokemon">
          <img src="${data.sprites.other.home.front_default}" width="150px" alt="">
        </div>
        <div class="stats-pokemon">
          <p>Nombre: <span>${data.name}</span></p>
          <p>Hp: <span>${data.stats[0].base_stat}</span></p>
          <p>Experiencia: <span>${data.base_experience}</span></p>
          <p>Ataque: <span>${data.stats[1].base_stat}</span></p>
        </div>
      </div>
      `;

      document.getElementById('contenedor-pokemon').innerHTML = cardPokemon;

    }else{
      console.log('Ha ocurrido un error');
    }
    // .then(res => console.log(res))
    // .then( data => console.log(data))
  } catch (error) {
    console.log('Error');
  }
  
  
}

llamadaAPIFetchPokemon(400);