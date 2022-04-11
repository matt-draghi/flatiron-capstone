class WorkoutsController < ApplicationController

    def index
        workouts = Workout.all.select{|workout| workout.user_id == session[:user_id]}
        if workouts
            render json: workouts, status: :ok
        else
            render json: {error: workouts.error.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        workout = user.workouts.find_by(name: params[:id])

        render json: workout, include: ['workout_mappers', 'exercises'], status: 200
    end

end
