// Inside this file, we'll define functions that make AJAX requests fetching information from our rails api
const defaultError = data => console.log(data);

export const fetchAllPokemon = () => {
	return $.ajax({
		method: 'GET',
		url: '/api/pokemon'
		 // makes an AJAX request that will make a http request to the PokemonController#index endpoint
	})
}


export const fetchSinglePokemon = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`
  });
};

export const createNewPokemon = (pokemon, error = defaultError) => {
  return $.ajax({
    method: 'POST',
    url: '/api/pokemon',
    data: {pokemon},
    error
  });
};