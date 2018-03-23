class Guests < ActiveRecord::Migration[5.1]
  def change
    create_table :guests do |t|
      t.string :name
      t.references :invitation
      t.timestamps
    end
  end
end
