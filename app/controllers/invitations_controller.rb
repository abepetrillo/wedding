class InvitationsController < ApplicationController

  def show
    if invitation
      json = {invitation: {
        code: invitation.code,
        guests: invitation.guests.order(:created_at).map {|g|
          {
            id: g.id,
            name: g.name,
            rsvp_status: g.rsvp_status
          }
        }
      }}
      render json: json, status: 200
    else
      render json: {error: 'Not authorized'}, status: :unprocessable_entity
    end
  end

  def update
    if invitation
      guests = invitation_params[:guests].map do |guest|
        guest_model = invitation.guests.find(guest[:id])
        guest_model.update_attributes(guest)
      end.compact

      if invitation.update_attributes(note: invitation_params[:note])
        render json: {status: :ok}, status: 200
      else
        render json: {error: 'Not authorized'}, status: :unprocessable_entity
      end
    else
      render json: {error: 'Not authorized'}, status: :unprocessable_entity
    end
  end

  private

  def invitation_params
    params.require(:invitation).permit(:note, guests: [:rsvp_status, :name, :id])
  end

  def invitation
    @invitation ||= Invitation.find(decoded_auth_token[:invitation_id]) if decoded_auth_token
  end

  def decoded_auth_token
    @decoded_auth_token ||= JsonWebToken.decode(http_auth_header) if http_auth_header
  end

  def http_auth_header
    if request.headers['Authorization'].present?
      return request.headers['Authorization'].split(' ').last
    else
      nil
    end
  end
end
