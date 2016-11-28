import React from 'react';
//Remember that anywhere we use JSX, we must import React.
// We have the URL define what components the user sees:

import {Provider} from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container' 
import {Router, Route, hashHistory} from 'react-router';


const Root = ({store}) => (
	<Provider store={store}>
		<Router history={hashHistory}> 
			<Route path="/" component={PokemonIndexContainer}/>
		</Router>
	</Provider>)

export default Root;