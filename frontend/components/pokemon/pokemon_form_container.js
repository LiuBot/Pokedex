import {connect} from 'react-redux';
import PokemonForm from './pokemon_form'
import {createNewPokemon} from '../../actions/pokemon_actions'

const mapStateToProps = ({errors}) =>({
	errors
})

const mapDispatchToProps = (dispatch) => ({
	createNewPokemon: (pokemon) => dispatch(createNewPokemon(pokemon))
})

// Create a PokemonFormContainer that only connects mapDispatchToProps.
// Pass a function prop called createPokemon that dispatches your CREATE_POKEMON action.

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(PokemonForm)