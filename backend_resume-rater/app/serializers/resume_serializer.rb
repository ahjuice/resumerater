class ResumeSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :industry, :user_id
end
