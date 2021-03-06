export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";
export const REQUEST_SINGLE_POKEMON = "REQUEST_SINGLE_POKEMON";
export const RECEIVE_NEW_POKEMON = "RECEIVE_NEW_POKEMON";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

 
// These return action objects 

// Action object should have two keys:
// 1. type of RECEIVE_ALL_POKEMON
// 2. the received pokemon data 

import * as APIUtil from '../util/api_util';

// Redux Thunk middleware allows you to write action creators that return a function instead 
//of an action.

export function fetchAllPokemon() { //should call the APIUtil, and then on resolution of the promise, dispatch receiveAllPokemon.

	return (dispatch) => {
		dispatch(requestAllPokemon());
		return APIUtil.fetchAllPokemon()
			.then(pokemon => dispatch(receiveAllPokemon(pokemon)));
	}
}


export function fetchSinglePokemon(id) {
	return (dispatch) => {
		dispatch(requestSinglePokemon());
		return APIUtil.fetchSinglePokemon(id).then(pokemon => {
			dispatch(receiveSinglePokemon(pokemon))
			return pokemon;
		});
	}
}

export function createNewPokemon(pokemon) {
	return (dispatch) => {
		dispatch(requestSinglePokemon());

		return APIUtil.createNewPokemon(pokemon)
		.then(pokemon => {dispatch(receiveNewPokemon(pokemon));return pokemon})
		// .catch((error) => {dispatch(receiveErrors(error))})
		// .catch((err) => console.log("rejected:", err));
	}
}


export const requestAllPokemon = () => ({
	type: REQUEST_ALL_POKEMON
})

export const receiveAllPokemon = (pokemon) => ({
	type: RECEIVE_ALL_POKEMON,
	pokemon
})

//Create actions for both requesting and receiving a single Pokemon.
// This requires defining a new constant and action creator for each action.
export const requestSinglePokemon = () => ({
	type: REQUEST_SINGLE_POKEMON
});

export const receiveSinglePokemon = (pokemon) =>({ // MAKE SURE THE SAME NAME IS USED IN THE REDUCER
	type: RECEIVE_SINGLE_POKEMON,
	pokemon
})

export const receiveNewPokemon = (pokemon) =>({ // MAKE SURE THE SAME NAME IS USED IN THE REDUCER
	type: RECEIVE_NEW_POKEMON,
	pokemon
})

export const receiveErrors = (errors) =>({
	type: RECEIVE_ERRORS,
	errors
})
