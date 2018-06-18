class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :resume_id
      t.integer :poster_id
      t.text :content

      t.timestamps
    end
  end
end
