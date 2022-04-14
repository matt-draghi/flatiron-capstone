Rails.application.routes.draw do
  resources :muscle_groups
  resources :muscle_group_mappers
  resources :equipment_pieces
  resources :equipment_types
  resources :exercise_mappers
  resources :exercises
  resources :workout_mappers
  resources :workouts
  
  # USERS
  post '/users', to: 'users#create'
  get '/me', to: 'users#show'
  patch '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'

  #WORKOUTS
  # get '/workouts' can create an index to pull all made workouts - allowing users to add workouts to their workout list
  get '/workouts', to: 'workouts#index'
  get '/workouts/:id', to: 'workouts#show'
  post '/workouts', to: 'workouts#create'
  patch '/workouts/:id', to: 'workouts#update'

  #WORKOUT MAPPER
  delete '/workout-mapper/:id', to: 'workout_mappers#destroy'
  patch '/workout-mapper/:id', to: 'workout_mappers#update'
  post '/workout-mapper', to: 'workout_mappers#create'

  #EXERCISES 
  get '/exercises', to: 'exercises#index'
  get '/exercises/:id', to: 'exercises#show'
  
  # SESSIONS
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # DEFAULT
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
