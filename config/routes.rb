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
  post '/users_rails', to: 'users#create'
  get '/me_rails', to: 'users#show'
  patch '/users_rails/:id', to: 'users#update'
  delete '/users_rails/:id', to: 'users#destroy'

  #WORKOUTS
  # get '/workouts' can create an index to pull all made workouts - allowing users to add workouts to their workout list
  get '/workouts_rails', to: 'workouts#index'
  get '/workouts_rails/:id', to: 'workouts#show'
  post '/workouts_rails', to: 'workouts#create'
  patch '/workouts_rails/:id', to: 'workouts#update'
  delete '/workouts_rails/:id', to: 'workouts#destroy'

  #WORKOUT MAPPER
  delete '/workout-mapper_rails/:id', to: 'workout_mappers#destroy'
  patch '/workout-mapper_rails/:id', to: 'workout_mappers#update'
  post '/workout-mapper_rails', to: 'workout_mappers#create'

  #EXERCISES 
  get '/exercises_rails', to: 'exercises#index'
  get '/exercises_rails/:id', to: 'exercises#show'

  #EQUIPMENT TYPES
  get 'equipment-types_rails', to: 'equipment_types#index'
  
  # SESSIONS
  post '/login_rails', to: 'sessions#create'
  delete '/logout_rails', to: 'sessions#destroy'

  # DEFAULT
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
