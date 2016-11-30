import {connect} from 'react-redux';
import PokemonIndex from './pokemon_index'
import {fetchAllPokemon} from '../../actions/pokemon_actions'
import {selectAllPokemon} from '../../reducers/selectors'

const mapStateToProps = (state) => ({
	pokemon: selectAllPokemon(state),
	loading: state.loading.indexLoading
})

const mapDispatchToProps = (dispatch) => ({
	fetchAllPokemon: () => dispatch(fetchAllPokemon())
})

//connect function accepts two functions as arguments: mapStateToProps and mapDispatchToProps. 
//Both functions are invoked when our redux store updates. 
//They are responsible for determining and constructing the props that are passed to presentational component.
export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(PokemonIndex
	)