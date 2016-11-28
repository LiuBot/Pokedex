class Api::PokemonController < ApplicationController


	def index
		sleep 1
		@pokemon = Pokemon.all
		# render line is missing because we're using jbuilder
	end 

	def show
		sleep 1
		@poke = Pokemon.find(params[:id])
	end 

private 
	def pokemon_params
		params.require(:pokemon).permit(:name, :image_url, :poke_type, :attack, :defense, moves:[])
	end 

end

