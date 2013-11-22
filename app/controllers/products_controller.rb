class ProductsController < ApplicationController
  def index
  end

  def category
  	@category = params[:category]
  end

  def show
  	@product = params[:product]
  end
end
