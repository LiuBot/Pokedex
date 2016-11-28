export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";

// import {fetchAllPokemon} from '../util/api_util';
 
// These return action objects 

// Action object should have two keys:
// 1. type of RECEIVE_ALL_POKEMON
// 2. the received pokemon data 

import * as APIUtil from '../util/api_util';

// Redux Thunk middleware allows you to write action creators that return a function instead 
//of an action.

export function fetchAllPokemon() {
	return (dispatch) => {
		dispatch(requestAllPokemon());
		return APIUtil.fetchAllPokemon()
			.then(pokemon => dispatch(receiveAllPokemon(pokemon)));
	}
}


export const requestAllPokemon = () => ({
	type: REQUEST_ALL_POKEMON
})

export const receiveAllPokemon = (pokemon) => ({
	type: RECEIVE_ALL_POKEMON,
	pokemon
})