class Api::CardsController < ApplicationController
  before_action :set_card, only: [:show]
  before_action :set_category

  def index
    render json: Card.order(created_at: :desc)
  end

  def show
    @card = Card.find(params[:id])
    reenders json: @card
  end

  private

    def set_card
      @card = Category.find(params[:id])
    end

    def set_category
      @category = Category.find(params[:category_id])
    end
    
end
