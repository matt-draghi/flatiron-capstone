Rails.application.routes.draw do
  
  # USERS
  post '/api/users', to: 'users#create'
  get '/api/me', to: 'users#show'
  patch '/api/users/:id', to: 'users#update'
  delete '/api/users/:id', to: 'users#destroy'

  #WORKOUTS
  # get '/workouts' can create an index to pull all made workouts - allowing users to add workouts to their workout list
  get '/api/workouts', to: 'workouts#index'
  get '/api/workouts/:id', to: 'workouts#show'
  post '/api/workouts', to: 'workouts#create'
  patch '/api/workouts/:id', to: 'workouts#update'
  delete '/api/workouts/:id', to: 'workouts#destroy'

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
