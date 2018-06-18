class Api::V1::ResumesController < ApplicationController

  def index
    @resumes = Resume.all

    render json: @resumes
  end
end
