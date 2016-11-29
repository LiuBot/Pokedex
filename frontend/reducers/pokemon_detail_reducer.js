 import {RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';
 import merge from 'lodash/merge';

const _defaultPoke = {
	image_url: "",
	name: "",
	poke_type:"",
	attack:"",
	defense: "",
	moves: [],
	items: []
}
const pokemonDetailReducer = (state = _defaultPoke, action) => {
 	Object.freeze(state);
 	let dupState = {};

 	switch(action.type){
 		case RECEIVE_SINGLE_POKEMON:
 			dupState = merge({}, action.poke);
 			return dupState;
 		default:
 			return state;
 	}
 }


export default pokemonDetailReducer;