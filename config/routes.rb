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
  post '/api/users', to: 'users#create'
  get '/api/me', to: 'users#show'
  patch '/api/users/:id', to: 'users#update'
  delete '/api/users/:id', to: 'users#destroy'

  #WORKOUTS
  # get '/workouts' can create an index to pull all made workouts - allowing users to add workouts to their workout list
  get '/api/workouts_', to: 'workouts#index'
  get '/api/workouts_/:id', to: 'workouts#show'
  post '/api/workouts_', to: 'workouts#create'
  patch '/api/workouts_/:id', to: 'workouts#update'
  delete '/api/workouts_/:id', to: 'workouts#destroy'

  #WORKOUT MAPPER
  delete '/api/workout-mapper/:id', to: 'workout_mappers#destroy'
  patch '/api/workout-mapper/:id', to: 'workout_mappers#update'
  post '/api/workout-mapper', to: 'workout_mappers#create'

  #EXERCISES 
  get '/api/exercises', to: 'exercises#index'
  get '/api/exercises/:id', to: 'exercises#show'

  #EQUIPMENT TYPES
  get '/api/equipment-types', to: 'equipment_types#index'
  
  # SESSIONS
  post '/api/login', to: 'sessions#create'
  delete '/api/logout', to: 'sessions#destroy'

  # DEFAULT
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
