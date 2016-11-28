//presentational component, which should render an unordered list of pokemon names next to corresponding images.

import React from 'react';

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
						<li key={poke.id}><img className="thumb" src={poke.image_url}/>{poke.name}</li>))
				}
				</ol>
			</div>)
	}

}

export default PokemonIndex;