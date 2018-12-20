class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.text :question
      t.string :answer
      t.integer :points
      t.boolean :complete
      t.belongs_to :category, foreign_key: true

      t.timestamps
    end
  end
end
