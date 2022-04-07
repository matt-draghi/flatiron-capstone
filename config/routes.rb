Rails.application.routes.draw do
  
  # USERS
  get '/users', to: 'users#create'
  get '/me', to: 'users#show'
  
  # SESSIONS
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # DEFAULT
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
