
import React from 'react';
import {Link} from 'react-router';

const PokemonIndexItem = ({poke, router}) =>{

		return(
			<li className="index-label" key={poke.id}>
				<Link to={`/pokemon/${poke.id}`} activeClassName="active-link">
					<img className="thumb" src={poke.image_url}/>
					<span>{poke.name}</span>
				</Link>
			</li>)
}



export default PokemonIndexItem;