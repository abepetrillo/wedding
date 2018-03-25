class AddNoteToInvitations < ActiveRecord::Migration[5.1]
  def change
    add_column :invitations, :note, :string
  end
end
