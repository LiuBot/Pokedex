import React from 'react';
import Item from './item'


class PokemonDetail extends React.Component{
	componentDidMount(){
		this.props.fetchSinglePokemon(this.props.params.pokemonId);
	}

// So you can send another request every time you click on a different link
 componentWillReceiveProps(nextProps) {
    if (this.props.params.pokemonId !== nextProps.params.pokemonId)
      this.props.fetchSinglePokemon(nextProps.params.pokemonId);
  }

	render(){
		const {pokemonDetail, children, loading} = this.props;
			return loading ? <div className="spinner">
	  <div className="double-bounce1"></div>
	  <div className="double-bounce2"></div>
	</div> : 			
				<div className="pokemon-detail">
					<ul>
						<img src={pokemonDetail.image_url} alt={pokemonDetail.name} />
						<li><h2>{pokemonDetail.name}</h2></li>
						<li><label>Type:</label> {pokemonDetail.poke_type}</li>
						<li><label>Attack:</label> {pokemonDetail.attack}</li>
						<li><label>Defense:</label> {pokemonDetail.defense}</li>
						<li><label>Moves:</label> {pokemonDetail.moves.join(', ')}</li>
					</ul>

				<div className="pokemon-toys">
				<h3 className="items-title">Items</h3>
				<ul className="item-list">
					{pokemonDetail.items.map( (item) => 
						<Item 
						key={item.name} 
						item={item}/>)}
				</ul>
				</div>
					{children}
				</div>

				;
	}
}

export default PokemonDetail;
