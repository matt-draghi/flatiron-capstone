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

        render json: workout, include: ['workout_mappers'], status: 200
    end

    def create
        workout = Workout.new()
        workout.user_id = session[:user_id]
        userWorkoutsArray = Workout.all.select{|workout| workout.user_id == session[:user_id]}
        workout.name = "Workout #{userWorkoutsArray.length + 1}"

        if workout.valid?
            workout.save
            render json: workout, status: :created
        else
            render json: {errors: workout.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        workout = user.workouts.find_by(name: params[:id])

        if workout
            workout.update(update_params)
            render json: workout, status: :ok
        else
            render json: {errors: workout.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        workout = user.workouts.find_by(name: params[:id])

        if workout
            workout.destroy
            render json: {}, status: :ok
        else
            render json: {errors: workout.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def update_params
        params.permit(:name)
    end

end
