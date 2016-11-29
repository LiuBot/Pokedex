//presentational component, which should render an unordered list of pokemon names next to corresponding images.

import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonForm from './pokemon_form'


class PokemonIndex extends React.Component{ // class component
	componentDidMount(){
		this.props.fetchAllPokemon();
	}

	render(){
		const {pokemon, children} = this.props;

		return(
			<div>
				<ol className="poke-index">
				{
					pokemon.map(poke =>(
						<PokemonIndexItem
							key={poke.id}
							poke={poke} 
							children={children}/>))
				}
				</ol>
				{children}
			</div>)
	}

}

export default PokemonIndex;