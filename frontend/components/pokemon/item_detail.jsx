import React from 'react';

const ItemDetail = ({item}) => (// functional component
				<div className="item-info">
				<ul>
					<li><b>{item.name}</b></li>
					<li><label>Happiness: </label>{item.happiness}</li>
					<li><label>Price: &#36;</label>{item.price}</li>
				</ul>
				</div>
	
	)


export default ItemDetail;
