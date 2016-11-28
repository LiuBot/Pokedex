import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
// window._ = require('lodash');

// import {receiveAllPokemon, fetchAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
// import {selectAllPokemon} from "./reducers/selectors";

document.addEventListener("DOMContentLoaded", () =>{
	const root = document.getElementById("root");
	const store = configureStore();
	//Just for testing:
	// window.store = store;
	// window.selectAllPokemon = selectAllPokemon;
	// window.receiveAllPokemon = receiveAllPokemon;
	// window.fetchAllPokemon = fetchAllPokemon;
	// window.requestAllPokemon = requestAllPokemon;
	ReactDOM.render(<Root store={store}/>, root);
})