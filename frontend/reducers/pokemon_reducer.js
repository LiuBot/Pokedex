 import {RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';
 import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
 	Object.freeze(state);
 	let dupState = {};

 	switch(action.type){
 		case RECEIVE_ALL_POKEMON:
 			dupState = merge({}, action.pokemon);
 			return dupState;
 		default:
 			return state;
 	}
 }


export default pokemonReducer;