class StalksController < ApplicationController
  before_action :set_stalk, only: [:show, :update, :destroy]

  # GET /stalks
  def index
    @stalks = Stalk.all

    render json: @stalks
  end

  # GET /stalks/1
  def show
    render json: @stalk
  end

  # POST /stalks
  def create
    @stalk = Stalk.new(stalk_params)

    if @stalk.save
      render json: @stalk, status: :created, location: @stalk
    else
      render json: @stalk.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /stalks/1
  def update
    if @stalk.update(stalk_params)
      render json: @stalk
    else
      render json: @stalk.errors, status: :unprocessable_entity
    end
  end

  # DELETE /stalks/1
  def destroy
    @stalk.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stalk
      @stalk = Stalk.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def stalk_params
      params.require(:stalk).permit(:twitter_user_id, :url, :notification)
    end
end
