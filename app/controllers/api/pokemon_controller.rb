class Api::PokemonController < ApplicationController


	def index
		sleep 1
		@pokemon = Pokemon.all
	end 

	def show
		sleep 1
		@pokemon = Pokemon.find(params[:id])
	end 

private 
	def pokemon_params
		params.require(:pokemon).permit(:name, :image_url, :poke_type, :attack, :defense, moves:[])
	end 

end
