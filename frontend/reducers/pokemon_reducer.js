 import {RECEIVE_ALL_POKEMON, RECEIVE_NEW_POKEMON} from '../actions/pokemon_actions';
 import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
 	Object.freeze(state);
 	let dupState = {};

 	switch(action.type){
 		case RECEIVE_ALL_POKEMON:
 			dupState = merge({}, action.pokemon);
 			return dupState; 		

	case RECEIVE_NEW_POKEMON:
		 return merge({}, state, {
        [action.pokemon.id]: action.pokemon
      });

 		default:
 			return state;
 	}
 }


export default pokemonReducer;