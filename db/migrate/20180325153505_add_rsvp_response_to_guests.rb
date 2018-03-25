class AddRsvpResponseToGuests < ActiveRecord::Migration[5.1]
  def change
    add_column :guests, :rsvp_status, :string, default: 'no_response'
  end
end
