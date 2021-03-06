class WorkoutMappersController < ApplicationController

    def destroy
        mapper = WorkoutMapper.find_by(id: [params[:id]])
        if mapper
            mapper.destroy
            render json: {}, status: :ok
        else
            render json: {error: mapper.errors}, status: :unprocessable_entity
        end
    end

    def update
        mapper = WorkoutMapper.find_by(id: params[:id])
        if mapper
            mapper.update(update_params)
            render json: mapper, status: :ok
        else
            render json: {errors: mapper.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def create
        mapper = WorkoutMapper.create(mapper_params)
        if mapper.valid?
            render json: mapper, status: :created
        else
            render json: {errors: mapper.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def update_params
        params.permit(:id, :reps, :sets, :weight)
    end

    def mapper_params
        params.permit(:workout_id, :exercise_id, :reps, :sets, :weight)
    end
end
