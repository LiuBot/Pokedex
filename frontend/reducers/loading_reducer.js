 import {RECEIVE_ALL_POKEMON, 
 	REQUEST_ALL_POKEMON, 
 	RECEIVE_SINGLE_POKEMON, 
 	REQUEST_SINGLE_POKEMON, 
 	RECEIVE_NEW_POKEMON,
 	CREATE_NEW_POKEMON} from '../actions/pokemon_actions';


const initialState = {
	indexLoading: false,
	detailLoading:false
}
const loadingReducer = (state = initialState, action) => {
 	Object.freeze(state);
 	let dupState = {};

 	switch(action.type){
 		case RECEIVE_ALL_POKEMON:
 		case RECEIVE_NEW_POKEMON:
 		case RECEIVE_SINGLE_POKEMON:
 			return initialState;
 		case REQUEST_ALL_POKEMON:
 			return Object.assign({}, state, { indexLoading: true });
 		case REQUEST_SINGLE_POKEMON:
 		 	return Object.assign({}, state, { detailLoading: true });

 		default:
 			return state;
 	}
 }


export default loadingReducer;
