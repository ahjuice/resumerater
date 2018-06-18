class Resume < ApplicationRecord
  belongs_to :user
  has_many :feedback, class_name: "Comment"
end
