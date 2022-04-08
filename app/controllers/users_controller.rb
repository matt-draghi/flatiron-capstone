class UsersController < ApplicationController

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        if user
            user.update(update_params)
            render json: user, status: :ok
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        if user&.authenticate(params[:password])
            user.destroy
            render json: {}, status: :ok
        else
            render json: {error: "Incorrect password"}, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :email)
    end

    def update_params
        params.permit(:username, :email)
    end
end
