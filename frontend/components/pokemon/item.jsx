import React from 'react';
import {Link} from 'react-router';

const Item = ({item}) =>{
	return(
		//Path: /pokemon/:pokemonId/items/:itemId
		// Link triggers itemDetail to be retrieved 
		<li className="item-pic">
		<Link to={`/pokemon/${item.pokemon_id}/item/${item.id}` } activeClassName="active"> 
		<img src={item.image_url}/>
		</Link>
		</li>)
}

export default Item;