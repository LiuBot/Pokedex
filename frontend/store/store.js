import {createStore, applyMiddleware} from 'redux';

//Redux Thunk middleware allows you to write action creators that return a function instead 
//of an action. 
//The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain 
// condition is met. The inner function receives the store methods dispatch and getState as parameters.

// A thunk is a function that wraps an expression to delay its evaluation.
        

import thunk from 'redux-thunk';
// import thunk from '../middleware/thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = (state) => (
	createStore(
		rootReducer, 
		applyMiddleware(thunk))
)
// This is a great pattern to use- instead of just exporting the store, we
//  are exporting a function that creates and returns a store. This can be used in the 
//  future to swap out reducers, preloadedState, or enhancers depending on different 
//  conditions (e.g. development vs production environments).

export default configureStore;