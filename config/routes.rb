Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do # tells the controller to first look for a .json.jbuilder view rather than an html.erb
  	resources :pokemon, only: [:index, :show, :create, :update, :destroy]
  end 
end
