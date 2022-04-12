class WorkoutMappersController < ApplicationController

    def destroy
        mapper = WorkoutMapper.find_by(id: [params[:id]])
        if mapper
            # debugger
            mapper.destroy
            render json: {}, status: :ok
        else
            render json: {error: mapper.errors}, status: :unprocessable_entity
        end
    end
end
