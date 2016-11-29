 import {RECEIVE_ERRORS} from '../actions/pokemon_actions';
 import merge from 'lodash/merge';

const errorReducer = (state = [], action) => {
 	Object.freeze(state);
 	let dupState = {};

 	switch(action.type){
 		case RECEIVE_ERRORS:
 			return action.errors ;		

 		default:
 			return state;
 	}
 }


export default errorReducer;