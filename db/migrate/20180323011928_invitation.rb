class Invitation < ActiveRecord::Migration[5.1]
  def change
    create_table :invitations do |t|
      t.string :code
      t.timestamps
    end
  end
end
