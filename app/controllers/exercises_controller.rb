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
        if params[:id] == "daily"
            number_generator = Random.new(daystamp)
            min_exercise_id = Exercise.minimum(:id)
            max_exercise_id = Exercise.maximum(:id)
            random_exercise_id = number_generator.rand(min_exercise_id..max_exercise_id)
            daily_exercise = Exercise.find(random_exercise_id)
            
            if daily_exercise
                render json: daily_exercise, status: :ok
            else
                render json: {error: daily_exercise.full_messages}, status: 404
            end
        else
            exercise = Exercise.find_by(name: params[:id])
            if exercise
                render json: exercise, include: ['muscle_groups', 'equipment_types'], status: 200
            else
                render json: {error: "Exercise not found"}, statis: :unprocessable_entity
            end
        end
    end

    private 

    def daystamp
        Time.now.strftime("%y%m%d").to_i
    end
end
