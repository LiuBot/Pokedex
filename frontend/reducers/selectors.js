//  Selectors are functions that are used to "select" complex pieces of the state

// Define and export a function, selectAllPokemon(state), which accepts the application 
// state as an argument and exports an array of all the pokemon objects. You can use lodash's values method.
import _ from 'lodash';

export const selectAllPokemon = state => _.values(state.pokemon);

export const selectPokemonItem = ({pokemonDetail}, itemId) => {
	const foundItem = pokemonDetail.items.find(item => item.id === itemId)
	return foundItem || {};
}