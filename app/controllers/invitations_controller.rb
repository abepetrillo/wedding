class InvitationsController < ApplicationController
  def update
    if invitation
      render json: {status: :ok}, status: 200
    else
      render json: {error: 'Not authorized'}, status: :unprocessable_entity
    end
  end

  private

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
