export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";


// These return action objects 

// Action object should have two keys:
// 1. type of RECEIVE_ALL_POKEMON
// 2. the received pokemon data 
export const receiveAllPokemon = (pokemon) => ({
	type: RECEIVE_ALL_POKEMON,
	pokemon
})