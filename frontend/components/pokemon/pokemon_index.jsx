//presentational component, which should render an unordered list of pokemon names next to corresponding images.

import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component{ // class component
	componentDidMount(){
		this.props.fetchAllPokemon();
	}

	render(){
		const {pokemon} = this.props;

		return(
			<div>
				<ol>
				{
					pokemon.map(poke =>(
						<PokemonIndexItem
						key={poke.id}
						poke={poke} />))
				}
				</ol>
			</div>)
	}

}

export default PokemonIndex;