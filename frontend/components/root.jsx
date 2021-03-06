import React from 'react';
//Remember that anywhere we use JSX, we must import React.
// We have the URL define what components the user sees:

import {Provider} from 'react-redux';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';

import PokemonIndexContainer from './pokemon/pokemon_index_container';	
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import PokemonFormContainer from './pokemon/pokemon_Form_container';
import ItemDetailContainer from './pokemon/item_detail_container';


const Root = ({store}) => (
	<Provider store={store}>
		<Router history={hashHistory}> 
			<Route path="/" component={PokemonIndexContainer}>
			<IndexRoute component={PokemonFormContainer}/>
				<Route path="pokemon/:pokemonId" component={PokemonDetailContainer} >
					<Route path="item/:itemId" component={ItemDetailContainer} />
					</Route>
			</Route>
		</Router>
	</Provider>)

export default Root;