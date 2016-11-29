import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {fetchSinglePokemon} from '../../actions/pokemon_actions';

const mapStateToProps = ({pokemonDetail}) => {
	return {pokemonDetail}
}

const mapDispatchToProps = (dispatch) => {
  return { fetchSinglePokemon: (id) => dispatch(fetchSinglePokemon(id)) };
}

//connect function accepts two functions as arguments: mapStateToProps and mapDispatchToProps. 
//Both functions are invoked when our redux store updates. 
//They are responsible for determining and constructing the props that are passed to presentational component.
export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(PokemonDetail)