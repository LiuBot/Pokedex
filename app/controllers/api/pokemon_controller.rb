class Api::PokemonController < ApplicationController


	def index
		sleep 1
		@pokemon = Pokemon.all
		# render line is missing because we're using jbuilder
	end 

	def show
		sleep 1
		@pokemon = Pokemon.find(params[:id])
	end 

	def create
		@pokemon = Pokemon.new(pokemon_params)

		if @pokemon.save
			render :show
		else
			render json: @pokemon.errors.full_messages
		end
	end 

private 
	def pokemon_params
		params.require(:pokemon).permit(:name, :image_url, :poke_type, :attack, :defense, moves:[])
	end 

end

