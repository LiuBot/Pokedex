import {connect} from 'react-redux';
import ItemDetail from './item_detail';
import {selectPokemonItem} from '../../reducers/selectors';


const mapStateToProps = (state, {params}) => ({
	item: selectPokemonItem(state, parseInt(params.itemId))
})


//connect function accepts two functions as arguments: mapStateToProps and mapDispatchToProps. 
//Both functions are invoked when our redux store updates. 
//They are responsible for determining and constructing the props that are passed to presentational component.
export default connect(
	mapStateToProps
	)(ItemDetail)