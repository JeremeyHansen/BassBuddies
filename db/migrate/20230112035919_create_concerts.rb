class CreateConcerts < ActiveRecord::Migration[7.0]
  def change
    create_table :concerts do |t|
      t.string :venue
      t.string :address
      t.string :date
      t.string :img
      t.string :artist
      t.string :link

      t.timestamps
    end
  end
end
