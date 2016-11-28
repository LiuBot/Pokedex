// Inside this file, we'll define functions that make AJAX requests fetching information from our rails api

export const fetchAllPokemon = () => {
	return $.ajax({
		method: 'GET',
		url: 'api/pokemon' // makes an AJAX request that will make a http request to the PokemonController#index endpoint
	})
}

