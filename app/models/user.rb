class User < ApplicationRecord
    has_secure_password
    # has_many :workouts, dependent: :destroy
    validates :user_name, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validate :valid_email
    # validates :password, presence: true, length: {minimum: 8} #STRETCH: Validate must include special character, number 0-9, and uppercase letter


    private

    def valid_email
        unless email.match?(/@gmail.com|@test.com|@yahoo.com|@hotmail.com|@icloud.com/)
            errors.add(:email, "not valid")
        end
    end
end
