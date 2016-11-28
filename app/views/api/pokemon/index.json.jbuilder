# Iterate over each pokemon
# Use json.set! to explicity set the key to the pokemon's id
# use json.extract! to grab the pokemon's id, name, and image_url

# We don't need to return any more information than this for our index route! 
#Remember, Jbuilder allows us to curate our data, retrieving only the attributes we are interested in.

@pokemon.each do |pokemon|
	json.set! poke.id do #json.set! to explicitly set the key to the pokemon's id 
		json.extract! pokemon, :id, :name, :image_url 
	end 
end

		# extract lets you get around grabbing each of the attributes separately 


