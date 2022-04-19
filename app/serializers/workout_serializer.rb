class WorkoutSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :description, :image

  belongs_to :user
  has_many :workout_mappers
  has_many :exercises, through: :workout_mappers

  def image
    if object.image.attached?
      {
        url: rails_blob_url(object.image, only_path: true)
      }
    end
  end
end
