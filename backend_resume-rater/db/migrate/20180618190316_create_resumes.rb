class CreateResumes < ActiveRecord::Migration[5.2]
  def change
    create_table :resumes do |t|
      t.string :image_url
      t.string :industry
      t.integer :user_id

      t.timestamps
    end
  end
end
