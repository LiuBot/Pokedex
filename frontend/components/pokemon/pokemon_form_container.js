import {connect} from 'react-redux';
import PokemonForm from './pokemon_form'
import {createNewPokemon} from '../../actions/pokemon_actions'


const mapDispatchToProps = (dispatch, {pokemon}) => ({
	createNewPokemon: (pokemon) => dispatch(createNewPokemon(pokemon))
})

// Create a PokemonFormContainer that only connects mapDispatchToProps.
// Pass a function prop called createPokemon that dispatches your CREATE_POKEMON action.

export default connect(
	null,
	mapDispatchToProps
	)(PokemonForm)