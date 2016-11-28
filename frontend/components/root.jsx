import React from 'react';
//Remember that anywhere we use JSX, we must import React.
import {Provider} from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container'

const Root = ({store}) => (
	<Provider store={store}>
	<PokemonIndexContainer />
	</Provider>)

export default Root;