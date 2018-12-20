class Api::CategoriesController < ApplicationController
  def index
    render json: Category.order(created_at: :desc)
  end

  def show
    @category = Category.find(params[:id])
    reenders json: @category
  end
end
