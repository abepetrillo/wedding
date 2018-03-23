class SessionsController < ApplicationController
  def create
    invitation = Invitation.joins(:guests).where(code: invitation_params[:code]).first
    correct_name = invitation.guests.map(&:name).include? invitation_params[:name]
    if invitation && correct_name
      #create session
      render json: {auth_token: JsonWebToken.encode({invitation_id: invitation.id})}, status: 201
    else
      render json: {error: 'Name and code do not match'}, status: :unprocessable_entity
    end
  end

  private

  def invitation_params
    params.require(:invitation).permit(:code, :name)
  end
end
