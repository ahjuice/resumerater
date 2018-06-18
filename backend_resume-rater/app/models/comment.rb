class Comment < ApplicationRecord
  belongs_to :resume
  belongs_to :poster, class_name: "User"
end
