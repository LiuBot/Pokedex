
import React from 'react';

const PokemonIndexItem = ({poke}) =>{

		return(
			<li key={poke.id}>
			<img className="thumb" src={poke.image_url}/>
			<span>{poke.name}</span>
			</li>)
}



export default PokemonIndexItem;