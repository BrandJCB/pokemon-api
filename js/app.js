//?Declaramos la posición inicial de la paginación (por defecto es 1)
let pagina = 0;

//?Botones de paginacion
const btnAnterior = document.querySelector('.btnAnterior');
const btnSiguiente = document.querySelector('.btnSiguiente');

//?Funcion boton siguiente
btnSiguiente.addEventListener('click', ()=>{
  if (pagina < 1126) {
      pagina += 3;
      console.log(pagina);
      llamadaAPIFetchPokemon(pagina);
  }
})

//?Funcion boton anterior
btnAnterior.addEventListener('click', ()=>{
  if( pagina > 0){
    pagina -= 3;
    console.log(pagina);
    llamadaAPIFetchPokemon(pagina);
  }
})


//?Función que hace el llamado a la API REST de Pokémon
const llamadaAPIFetchPokemon = async (offset) =>{
  try {
    //*Llamar a la API de pokemon por medio de fetch
    const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=3&offset=${offset}`);

    //*Revisar si la peticion fu aceptada por la API de Pokemon
    if(peticion.status === 200){
      const data = await peticion.json();

      data.results.forEach(result => {
        document.getElementById('contenedor-pokemon').innerHTML = '';
        //*Traemos la informacion de cada uno de los pokemones
        infoPokemon(result.url)
        .then( res => {
          document.getElementById('contenedor-pokemon').innerHTML += `
          <div class="card-pokemon" >
            <div class="visual-pokemon">
              <img src="${res.sprites.other.home.front_default}" width="150px" alt="">
            </div>
            <div class="stats-pokemon">
              <p>Nombre: <span>${res.name}</span></p>
              <p>Hp: <span>${res.stats[0].base_stat}</span></p>
              <p>Experiencia: <span>${res.base_experience}</span></p>
              <p>Ataque: <span>${res.stats[1].base_stat}</span></p>
            </div>
          </div>
        `;
        })
      })
    }else{
      console.log('Ha ocurrido un error');
    }
    // .then(res => console.log(res))
    // .then( data => console.log(data))
  } catch (error) {
    console.log('Error');
  }
}

//?Funcion que trae la informacion de pokemon especifico pasando como parametro su url
const infoPokemon = async (url) => {
  try {
    const peticion = await fetch(url);

    //*Revisamos que el status de la peticion sea el exitoso
    if(peticion.status === 200){
      const data = await peticion.json();
      return data;
    }
  } catch (error) {
    console.log('Error');
  }
}

llamadaAPIFetchPokemon(0);