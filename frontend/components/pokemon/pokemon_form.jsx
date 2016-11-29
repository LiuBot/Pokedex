// This will dispatch new action types 

// Uses controlled inputs to keep track of its form data 

import React from 'react'; 
import {withRouter} from 'react-router';

class PokemonForm extends React.Component{


	constructor(props){ //provide a default internal state to your form
		super(props);

		this.state = {
			name:"",
			image_url: "",
			poke_type: POKEMON_TYPES[0],
      attack: '',
      defense: '',
      moves: ['','']
		};
     this.updateMove = this.updateMove.bind(this)
  	 this.createNewPokemon = this.createNewPokemon.bind(this); // no autobinding in ES6 so need to do this
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  updateMove(i){
  return (e) => {
      let moves = _.merge([], this.state.moves);
      moves[i] = e.currentTarget.value;
      this.setState({ moves });
    };
  }

  createNewPokemon(e){
  	e.preventDefault();
  	 this.props.createNewPokemon(Object.assign({}, this.state)).then(newPokemon => {
      this.props.router.push(`pokemon/${newPokemon.id}`);
    })
  }

  errors(e){
    let {errors} = this.props;
    if (errors){
      errors.map((error,idx) => {
        return (
          <li 
          className="error"
          key={idx}>{error}</li>)
      })
    } else {
      return "";
    }
  }

  render(){
  	let {name, image_url, poke_type, attack, defense, moves} = this.state; // so you don't have to keep calling this.state.title, etc.

  	return(
      <div>
        <ul>
          {this.errors()}
        </ul>
        
  		<form 
      className="pokemon-form"
      onSubmit ={this.createNewPokemon}>
      <h1 className="form-title">Create a Pokemon!</h1>
  			<input type='text'
  			value={name}
  			placeholder="name"
  			onChange= {this.update('name')} />
  			<br />

        <input type='text'
        value={image_url}
        placeholder="Image url"
        onChange= {this.update('image_url')} />
        <br />

        <select 
        value={poke_type}
        onChange={this.update('poke_type')}>
          {
            POKEMON_TYPES.map((type,i) => 
                      <option 
                      value={type} 
                      key={i}>{type}
                      </option>)}
        </select>

        <input type='number'
        value={attack}
        placeholder="Attack"
        onChange= {this.update('attack')} />
        <br />

      <input type='number'
        value={defense}
        placeholder="Defense"
        onChange= {this.update('defense')} />
        <br />

    <input type='text'
        value={moves[0] || ''}
        placeholder="Move 1"
        onChange= {this.updateMove(0)} />
        <br />

    <input type='text'
        value={moves[1] || ''}
        placeholder="Move 2"
        onChange= {this.updateMove(1)} />
        <br />


  		<button
        className="create-button">Create Pokemon</button>
  		</form>
      </div>
  		)
  }
 
};

export default withRouter(PokemonForm);