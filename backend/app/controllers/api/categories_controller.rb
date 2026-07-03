class Api::CategoriesController < ApplicationController
  def index
    categories = Category.order(:name)
    render json: categories
  end

  def create
    newCategory = Category.new(category_params)
    
    category = Category.find_by(name: newCategory.name)

    if category
      render json: {errors: expense.errors.full_messages}, status: :unprocessable_entity
    else
      newCategory.save()
      render json: format_category(newCategory), status: :created
    end
    
  end

  def category_params
    params.require(:category).permit(:name)
  end

  def format_category(category)
    {
      id: category.id,
      name: category.name
    }
  end
end
