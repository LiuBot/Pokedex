# json.extract! @poke, :id, :name, :attack, :defense :image_url, :moves, :poke_type


# json.items do 
# 	json.array! @poke.items, partial: 'api/items/item,' as: :item
# end

json.extract! @pokemon, :id, :name, :attack, :defense, :image_url, :moves,
  :poke_type, :items