class Resume < ApplicationRecord
  belongs_to :recipient, class_name: "User"
  has_many :feedback, class_name: "Comment"
end
