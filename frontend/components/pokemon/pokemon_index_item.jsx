
import React from 'react';
import {Link} from 'react-router';

const PokemonIndexItem = ({poke, router}) =>{

		return(
			<li className="index-label">
				<Link to={`/pokemon/${poke.id}`}>
					<img className="thumb" src={poke.image_url}/>
					<span>{poke.name}</span>
				</Link>
			</li>)
}



export default PokemonIndexItem;