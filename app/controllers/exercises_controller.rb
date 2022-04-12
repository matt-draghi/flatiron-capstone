class ExercisesController < ApplicationController

    def index
        exercises = Exercise.all
        if exercises
            render json: exercises, status: :ok
        else
            render json: {error: exercises.error.full_messages}, status: :not_found
        end
    end

    def show
        exercise = Exercise.find_by(name: params[:id])
        if exercise
            render json: exercise, include: ['muscle_groups', 'equipment_types'], status: 200
        else
            render json: {error: "Exercise not found"}, statis: :unprocessable_entity
        end
    end
end
